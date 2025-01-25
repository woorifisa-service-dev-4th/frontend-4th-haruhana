import { Box, Typography } from "@mui/material";
import PieChart from "../../chart/pie-chart";
import { CHART_COLORS } from "@/constants/chartColors";
import { statisticUtils } from "@/utils/statisticUtils";
import { useMemo } from "react";

/**
 * 정답/오답 분포를 원형 차트로 보여주는 컴포넌트
 * @param {Object} data - 사용자 통계 요약 데이터 (mockStatisticsResponseData.js - mockSummaryStatisticsData 참고)
 */
export default function CorrectDistributionChart({ data }) {
  // 차트를 그리기 위해 정답률과 오답률 데이터 추출
  const { correctRate, incorrectRate } = useMemo(
    () => statisticUtils.responseTransformers.summaryResponseDto.toCorrectDistributionChartData(data),
    [data]
  );

  // 차트를 그리기 위해 Chart.js에서 요구하는 형식으로 데이터 가공
  const chartData = useMemo(
    () => ({
      labels: ["정답", "오답"],
      datasets: [
        {
          data: [correctRate, incorrectRate],
          backgroundColor: [
            CHART_COLORS.CORRECT.background,
            CHART_COLORS.INCORRECT.background,
          ],
        },
      ],
    }),
    [correctRate, incorrectRate]
  );

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="h6" color="primary" gutterBottom>
        정답률 분포
      </Typography>
      <Box sx={{ height: "calc(100% - 40px)" }}>
        <PieChart data={chartData} />
      </Box>
    </Box>
  );
}
