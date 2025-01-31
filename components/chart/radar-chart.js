import { Radar } from "react-chartjs-2";

/**
 * 레이더 차트 컴포넌트
 *
 * @see {@link https://www.chartjs.org/docs/latest/charts/radar.html}
 *
 * @param {Object} data - Chart.js 형식의 데이터 객체
 * @param {number} [maxValue] - 차트 최대값
 */
export default function RadarChart({ data, maxValue }) {
  // Dataset 설정
  const chartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: "rgba(75, 75, 75, 0.2)",
      borderColor: "rgba(75, 75, 75, 0.8)",
      borderWidth: 2,
      pointBackgroundColor: dataset.backgroundColor,
      pointBorderColor: "rgba(75, 75, 75, 0.8)",
      pointRadius: 5,
      pointHoverRadius: 8,
    })),
  };

  // 눈금 간격 계산
  const calculatedMaxValue =
    maxValue === 100 ? 100 : Math.ceil(maxValue / 5 + 1) * 5;
  const stepSize = Math.ceil(calculatedMaxValue / 5); // 5등분하여 눈금 표시

  // 레이더 차트 기본 설정
  const options = {
    maintainAspectRatio: false, // TODO: 현재 해당 옵션을 통해 중앙 정렬을 하나, 추후 해당 부분 확인 및 개선
    scales: {
      r: {
        beginAtZero: true, // 0부터 시작
        max: calculatedMaxValue, // 계산된 최대값
        ticks: { stepSize }, // 계산된 눈금 간격
      },
    },
    plugins: {
      legend: { display: false }, // 범례 숨김
    },
  };

  return <Radar data={chartData} options={options} />;
}
