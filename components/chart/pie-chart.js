import { Pie } from "react-chartjs-2";

/**
 * 파이 차트 컴포넌트
 *
 * @see {@link https://www.chartjs.org/docs/latest/charts/doughnut.html#pie}
 *
 * @param {Object} data - Chart.js 형식의 데이터 객체
 */
export default function PieChart({ data }) {
  // Dataset 설정
  const chartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 2,
      borderColor: "#ffffff",
    })),
  };

  const options = {
    maintainAspectRatio: false, // TODO: 현재 해당 옵션을 통해 중앙 정렬을 하나, 추후 해당 부분 확인 및 개선
    radius: "90%", // 차트 크기 (컨테이너 대비)
    layout: {
      padding: {
        // 차트 여백 설정
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: false, // tooltip 비활성화
      },
      legend: {
        display: true, // 범례 표시 여부
        position: "bottom", // 범례 위치: 하단
        labels: {
          padding: 20, // 범례 항목 간 간격
          usePointStyle: true, // 범례 모양: 동그라미
          font: { size: 12 }, // 범례 폰트 크기
        },
      },
      datalabels: {
        // 데이터 라벨 설정
        color: "#333", // 라벨 색상: 검정
        font: {
          size: 16, // 라벨 폰트 크기
          weight: "bold",
        },
        formatter: (value, ctx) => {
          // 퍼센트 계산 및 포맷팅
          const sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / sum) * 100).toFixed(1);
          return `${percentage}%`;
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}
