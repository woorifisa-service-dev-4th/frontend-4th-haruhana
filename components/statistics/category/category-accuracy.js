import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";
import BarChart from "../../chart/bar-chart";
import RadarChart from "../../chart/radar-chart";
import { useState, useMemo } from "react";
import { CATEGORY_COLORS } from "@/constants/chartColors";
import { statisticUtils } from "@/utils/statisticUtils";

/**
 * 카테고리별 정답률을 보여주는 컴포넌트
 * @param {Object} data - 카테고리별 통계 데이터 (mockStatisticsResponseData.js - mockCategoryStatisticsData 참고)
 */
export default function CategoryAccuracyChart({ data }) {
  const [chartType, setChartType] = useState("bar");

  // 차트를 그리기 위해 label, value 데이터를 추출
  const { labels, values } = useMemo(
    () =>
      statisticUtils.responseTransformers.categoryResponseDto.toCategoryAccuracyChartData(
        data
      ),
    [data]
  );

  // 차트를 그리기 위해 Chart.js에서 요구하는 형식으로 데이터 가공
  const processedData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: labels.map(
            (label) => CATEGORY_COLORS[label].background
          ),
        },
      ],
    }),
    [labels, values]
  );

  const renderChart = () => {
    if (chartType === "radar") {
      return <RadarChart data={processedData} maxValue={100} />;
    }
    return (
      <BarChart
        data={processedData}
        maxValue={100}
        valueFormatter={statisticUtils.formatters.percentage}
        showLegend={false}
        orientation="horizontal"
      />
    );
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" color="primary">
          카테고리별 정답률
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={chartType}
            variant="outlined"
            onChange={(e) => setChartType(e.target.value)}
            sx={{ height: 32 }}
          >
            <MenuItem value="bar">막대 그래프</MenuItem>
            <MenuItem value="radar">레이더 그래프</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ height: "calc(100% - 80px)" }}>{renderChart()}</Box>
    </Box>
  );
}
