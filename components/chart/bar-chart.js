import { Bar } from "react-chartjs-2";

/**
 * 바 차트 컴포넌트
 *
 * @see {@link https://www.chartjs.org/docs/latest/charts/bar.html}
 *
 * @param {object} data - Chart.js 형식의 데이터 객체
 * @param {number} maxValue - Y축 최대값 (100이 아닌 경우 자동으로 5단위로 조정)
 * @param {function} valueFormatter - 값 포맷팅 함수
 * @param {boolean} [showLegend=true] - 범례 표시 여부
 * @param {string} [orientation='vertical'] - 차트 방향
 * @param {boolean} [enableTooltip=false] - 툴팁 활성화 여부
 * @param {object} [customOptions={}] - 추가 Chart.js 옵션
 */
export default function BarChart({
  data,
  maxValue,
  valueFormatter,
  showLegend = true,
  orientation = "vertical",
  enableTooltip = false,
  customOptions = {},
}) {
  // Dataset 설정
  const chartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 1,
    })),
  };

  // 최대값 계산
  const calculatedMaxValue =
    maxValue === 100 ? 100 : Math.ceil(maxValue / 5 + 1) * 5;

  const options = {
    // 차트 크기 관련 옵션
    responsive: true, // 컨테이너 크기에 맞게 자동 조절
    maintainAspectRatio: false, // 종횡비 고정 해제

    // 차트 방향 설정
    indexAxis: orientation === "horizontal" ? "y" : "x",

    // 축 설정
    scales: {
      [orientation === "horizontal" ? "x" : "y"]: {
        beginAtZero: true, // 0부터 시작
        max: calculatedMaxValue, // 계산된 최대값 적용
        ticks: {
          callback: valueFormatter, // 값 형식 지정
          count: 6, // 눈금 개수 (0 포함 6개)
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // 그리드 색상
          display: true, // 그리드 표시
        },
      },
      [orientation === "horizontal" ? "y" : "x"]: {
        grid: {
          display: false, // 반대축 그리드 숨김
        },
      },
    },

    // 플러그인 설정
    plugins: {
      tooltip: {
        enabled: enableTooltip, // tooltip 기본 비활성화
      },
      legend: {
        display: showLegend, // 범례 표시 여부
        position: "bottom", // 범례 위치
        labels: { usePointStyle: true }, // 범례 스타일
      },

      // 데이터 레이블 설정
      datalabels: {
        formatter: valueFormatter, // 데이터 레이블 형식
        anchor: "center", // 레이블 위치
        align: "center", // 레이블 정렬
        font: {
          size: 24, // 폰트 크기
          weight: "bold", // 폰트 굵기
        },
      },
    },
    ...customOptions,
  };

  return <Bar data={chartData} options={options} />;
}
