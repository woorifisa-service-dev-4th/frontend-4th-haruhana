import { Box, Typography } from "@mui/material";
import StackLineChart from "@/components/chart/stack-line-chart";
import { statisticUtils } from "@/utils/statisticUtils";
import { useMemo } from "react";
import { CATEGORY_COLORS, CHART_COLORS } from "@/constants/chartColors";

/**
 * 주간 문제 해결 트렌드를 보여주는 컴포넌트
 * - 스택형 바 차트로 카테고리별 문제 해결 수를 표시
 * - 라인 차트로 전체 문제 해결 수를 표시
 *
 * @param {Object} data - 주간 통계 데이터 (mockStatisticsResponseData.js - mockWeeklyStatisticsData 참고)
 */
export default function WeeklyTrendChart({ data }) {
  // 차트 데이터 추출 및 변환
  const { dates, totalSolved, categories, maxValue } = useMemo(
    () => statisticUtils.responseTransformers.weeklyResponseDto.toWeeklyTrendChartData(data, CATEGORY_COLORS),
    [data]
  );

  // Chart.js 데이터셋 구성
  const chartData = useMemo(
    () => ({
      // X축 레이블: 날짜
      labels: dates.map(statisticUtils.formatters.dateToYYYYMMDD),
      datasets: [
        // 전체 문제 수 (라인 차트)
        {
          label: "전체 문제",
          data: totalSolved,
          type: "line",
          yAxisID: "y1",
          backgroundColor: CHART_COLORS.TOTAL.background,
          borderColor: CHART_COLORS.TOTAL.border,
        },
        // 카테고리별 문제 수 (스택형 바 차트)
        ...categories.map((category) => ({
          label: category.label,
          data: category.data,
          backgroundColor: CATEGORY_COLORS[category.label].background,
          stack: "category",
          yAxisID: "y",
          type: "bar",
        })),
      ],
    }),
    [dates, totalSolved, categories]
  );

  // 축 설정
  const axisConfig = {
    left: {
      title: "전체 문제 수",
      id: "y",
    },
    right: {
      title: "전체 문제 수",
      id: "y1",
      display: true,
    },
  };

  // 툴팁 설정
  const tooltipConfig = {
    stackFormatter: (label, value, total) =>
      `${label}: ${statisticUtils.formatters.problemCountWithPercentage(value, total)}`,
    lineFormatter: (label, value) => `${label}: ${value}문제`,
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Typography variant="h6" color="primary" gutterBottom>
        주간 문제 해결 트렌드
      </Typography>
      <Box sx={{ height: "calc(100% - 40px)" }}>
        <StackLineChart
          data={chartData}
          maxValue={maxValue}
          valueFormatter={statisticUtils.formatters.problemCount}
          axisConfig={axisConfig}
          tooltipConfig={tooltipConfig}
        />
      </Box>
    </Box>
  );
}
