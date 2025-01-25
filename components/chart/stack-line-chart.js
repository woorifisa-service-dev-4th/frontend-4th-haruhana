import { Line } from "react-chartjs-2";

/**
 * 스택형 바 차트와 라인 차트가 결합된 복합 차트 컴포넌트
 * 바 차트는 스택형으로 쌓이고, 라인 차트는 별도의 축으로 표시됩니다.
 *
 * @see {@link https://www.chartjs.org/docs/latest/charts/line.html}
 * @see {@link https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart}
 *
 * @param {Object} data - Chart.js 형식의 데이터 객체
 * @param {string[]} data.labels - x축 레이블 배열
 * @param {Object[]} data.datasets - 데이터셋 배열
 * @param {string} data.datasets[].type - 차트 타입 ('bar' | 'line')
 * @param {number[]} data.datasets[].data - 실제 데이터 값 배열
 * @param {string} [data.datasets[].stack] - 스택 그룹 식별자 (바 차트용)
 * @param {string} data.datasets[].yAxisID - 사용할 y축 ID
 * @param {number} maxValue - Y축 최대값 (5단위로 자동 조정됨)
 * @param {function} valueFormatter - 값 포맷팅 함수 (예: (value) => `${value}개`)
 * @param {Object} [axisConfig] - 축 설정
 * @param {Object} [axisConfig.left] - 왼쪽 y축 설정 (스택형 바 차트용)
 * @param {string} [axisConfig.left.title] - 왼쪽 축 제목
 * @param {string} [axisConfig.left.id="y"] - 왼쪽 축 ID
 * @param {boolean} [axisConfig.left.display=true] - 왼쪽 축 표시 여부
 * @param {Object} [axisConfig.right] - 오른쪽 y축 설정 (라인 차트용)
 * @param {string} [axisConfig.right.title] - 오른쪽 축 제목
 * @param {string} [axisConfig.right.id="y1"] - 오른쪽 축 ID
 * @param {boolean} [axisConfig.right.display=true] - 오른쪽 축 표시 여부
 * @param {Object} [tooltipConfig] - 툴팁 설정
 * @param {function} tooltipConfig.stackFormatter - 스택형 바 차트 툴팁 포맷팅 함수
 * @param {function} tooltipConfig.lineFormatter - 라인 차트 툴팁 포맷팅 함수
 */
export default function StackLineChart({
  data,
  maxValue,
  valueFormatter,
  axisConfig = {
    left: { title: "왼쪽 축", id: "y", display: true },
    right: { title: "오른쪽 축", id: "y1", display: true },
  },
  tooltipConfig = {
    stackFormatter: (label, value, total) =>
      `${label}: ${value} (${((value / total) * 100).toFixed(1)}%)`,
    lineFormatter: (label, value) => `${label}: ${value}`,
  },
}) {
  // 최대값 계산 (5단위로 올림)
  const calculatedMaxValue = Math.ceil(maxValue / 5 + 1) * 5;

  // 데이터셋에 기본 스타일 적용
  const chartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      // 차트 타입별 기본 스타일 설정
      ...(dataset.type === "line"
        ? {
            borderColor: "rgba(75, 75, 75, 0.8)", // 라인 색상
            backgroundColor: "rgba(75, 75, 75, 0.2)", // 라인 아래 영역 색상
            borderWidth: 3, // 라인 두께
            tension: 0.1, // 라인 곡선 정도
          }
        : {
            borderWidth: 1, // 바 테두리 두께
          }),
    })),
  };

  // 차트 옵션 설정
  const options = {
    // 크기 관련 설정
    responsive: true, // 반응형 지원
    maintainAspectRatio: false, // 비율 고정 해제

    // 상호작용 설정
    interaction: {
      mode: "index", // 같은 X축 선상의 모든 데이터 표시
      intersect: false, // 마우스 오버 시 교차점이 아닌 위치에서도 반응
    },

    // 축 설정
    scales: {
      // X축 설정
      x: {
        stacked: true, // 스택형 차트 활성화
        grid: { display: false }, // 그리드 숨김
      },

      // 왼쪽 Y축 설정 (스택형 바 차트용)
      [axisConfig.left.id]: {
        display: axisConfig.left.display, // 축 표시 여부
        stacked: true, // 스택형 차트 활성화
        beginAtZero: true, // 0부터 시작
        position: "left", // 왼쪽에 위치
        title: {
          display: true,
          text: axisConfig.left.title, // 축 제목
        },
        max: calculatedMaxValue, // 최대값 설정
        ticks: {
          count: 6, // 눈금 개수 (0 포함 6개)
          callback: valueFormatter, // 값 포맷팅
        },
      },

      // 오른쪽 Y축 설정 (라인 차트용)
      [axisConfig.right.id]: {
        display: axisConfig.right.display, // 축 표시 여부
        beginAtZero: true, // 0부터 시작
        position: "right", // 오른쪽에 위치
        grid: { drawOnChartArea: false }, // 그리드 숨김
        title: {
          display: true,
          text: axisConfig.right.title, // 축 제목
        },
        max: calculatedMaxValue, // 최대값 설정
        ticks: {
          count: 6, // 눈금 개수 (0 포함 6개)
          callback: valueFormatter, // 값 포맷팅
        },
      },
    },

    // 플러그인 설정
    plugins: {
      // 툴팁 설정
      tooltip: {
        callbacks: {
          label: (context) => {
            // 라인 차트인 경우
            if (context.dataset.type === "line") {
              return tooltipConfig.lineFormatter(
                context.dataset.label,
                context.parsed.y
              );
            }
            // 스택형 바 차트인 경우
            const stackTotal = context.chart.data.datasets
              .filter((ds) => ds.stack === context.dataset.stack)
              .reduce((sum, ds) => sum + ds.data[context.dataIndex], 0);

            return tooltipConfig.stackFormatter(
              context.dataset.label,
              context.parsed.y,
              stackTotal
            );
          },
        },
      },

      // 범례 설정
      legend: {
        position: "bottom", // 하단에 위치
        labels: {
          usePointStyle: true, // 점 스타일 사용
          padding: 20, // 여백
        },
      },

      // 데이터 레이블 설정
      datalabels: {
        display: false, // 데이터 레이블 숨김
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
