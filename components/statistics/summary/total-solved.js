import { Box, Typography } from "@mui/material";
import BarChart from "../../chart/bar-chart";
import { CHART_COLORS } from "@/constants/chartColors";
import { statisticUtils } from "@/utils/statisticUtils";
import { useMemo } from "react";

/**
 * 총 문제 해결 수를 나와 평균을 비교하여 보여주는 컴포넌트
 * @param {Object} data - 사용자 통계 요약 데이터 (mockStatisticsResponseData.js - mockSummaryStatisticsData 참고)
 */
export default function TotalSolvedChart({ data }) {
  // 차트를 그리기 위해 나의 해결 수와 평균 해결 수 데이터 추출
  const { myValue, avgValue } = useMemo(
    () => statisticUtils.responseTransformers.summaryResponseDto.toTotalSolvedChartData(data),
    [data]
  );

  // 차트를 그리기 위해 Chart.js에서 요구하는 형식으로 데이터 가공
  const chartData = useMemo(
    () => ({
      labels: ["문제 해결 수"],
      datasets: [
        {
          label: "나",
          data: [myValue],
          backgroundColor: CHART_COLORS.MY.background,
        },
        {
          label: "평균",
          data: [avgValue],
          backgroundColor: CHART_COLORS.AVERAGE.background,
        },
      ],
    }),
    [myValue, avgValue]
  );

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="h6" color="primary" gutterBottom>
        문제 해결 수 비교
      </Typography>
      <Box sx={{ height: "calc(100% - 40px)" }}>
        <BarChart
          data={chartData}
          maxValue={Math.max(myValue, avgValue)}
          valueFormatter={(value) => `${value}문제`}
        />
      </Box>
    </Box>
  );
}
