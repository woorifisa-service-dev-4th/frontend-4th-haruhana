import { Box, Typography } from "@mui/material";
import BarChart from "../../chart/bar-chart";
import { statisticUtils } from "@/utils/statisticUtils";
import { useMemo } from "react";
import { CHART_COLORS } from "@/constants/chartColors";

/**
 * 정답률을 나와 평균을 비교하여 보여주는 컴포넌트
 * @param {Object} data - 사용자 통계 요약 데이터 (mockStatisticsResponseData.js - mockSummaryStatisticsData 참고)
 */
export default function CorrectRateChart({ data }) {
  // 차트를 그리기 위해 나의 정답률과 평균 정답률 데이터 추출
  const { myValue: myRate, avgValue: avgRate } = useMemo(
    () => statisticUtils.responseTransformers.summaryResponseDto.toCorrectRateChartData(data),
    [data]
  );

  // 차트를 그리기 위해 Chart.js에서 요구하는 형식으로 데이터 가공
  const chartData = useMemo(
    () => ({
      labels: ["정답률"],
      datasets: [
        {
          label: "나",
          data: [myRate],
          backgroundColor: CHART_COLORS.MY.background,
        },
        {
          label: "평균",
          data: [avgRate],
          backgroundColor: CHART_COLORS.AVERAGE.background,
        },
      ],
    }),
    [myRate, avgRate]
  );

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="h6" color="primary" gutterBottom>
        정답률 비교
      </Typography>
      <Box sx={{ height: "calc(100% - 40px)" }}>
        <BarChart
          data={chartData}
          maxValue={100}
          valueFormatter={(value) => `${value}%`}
        />
      </Box>
    </Box>
  );
}
