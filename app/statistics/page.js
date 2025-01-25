"use client";

import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import "@/styles/react-grid.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  mockSummaryStatisticsData,
  mockWeeklyStatisticsData,
  mockCategoryStatisticsData,
} from "@/constants/mockStatisticsResponseData";

import TotalSolvedChart from "@/components/statistics/summary/total-solved";
import CorrectRateChart from "@/components/statistics/summary/correct-rate";
import CorrectDistributionChart from "@/components/statistics/summary/correct-distribution";
import CategorySolvedChart from "@/components/statistics/category/category-solved";
import CategoryAccuracyChart from "@/components/statistics/category/category-accuracy";
import WeeklyTrendChart from "@/components/statistics/weekly/weekly-trend";
import { statisticUtils } from "@/utils/statisticUtils";

const ResponsiveGridLayout = WidthProvider(Responsive);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  ChartDataLabels
);

export default function StatisticsPage() {
  // 레이아웃 설정 수정
  const [layouts, setLayouts] = useState({
    lg: [
      // 요약 카드들
      { i: "summary-solved", x: 0, y: 0, w: 4, h: 3, minW: 3, minH: 3 },
      { i: "summary-accuracy", x: 4, y: 0, w: 4, h: 3, minW: 3, minH: 3 },
      { i: "summary-time", x: 8, y: 0, w: 4, h: 3, minW: 3, minH: 3 },
      // 주간 트렌드
      { i: "weekly", x: 0, y: 3, w: 12, h: 9, minW: 6, minH: 4 },
      // 카테고리와 카테고리 정확도
      { i: "category", x: 0, y: 12, w: 6, h: 9, minW: 6, minH: 4 },
      { i: "category-accuracy", x: 6, y: 12, w: 6, h: 9, minW: 6, minH: 4 },
      // 비교 차트들과 분포
      { i: "distribution", x: 0, y: 21, w: 4, h: 6, minW: 3, minH: 4 },
      { i: "correct-rate", x: 4, y: 21, w: 4, h: 6, minW: 3, minH: 4 },
      { i: "problem-solved", x: 8, y: 21, w: 4, h: 6, minW: 3, minH: 4 },
    ],
  });

  const gridItemStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    overflow: "hidden",
  };

  return (
    <Container maxWidth={false} disableGutters sx={{ p: 3, height: "100vh" }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        나의 학습 통계
      </Typography>

      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        margin={[16, 16]}
        compactType="vertical"
        preventCollision={false}
        isResizable={true}
        isDraggable={true}
        onLayoutChange={(currentLayout, allLayouts) => {
          setLayouts(allLayouts);
        }}
      >
        <div key="category" style={gridItemStyle}>
          <CategorySolvedChart data={mockCategoryStatisticsData} />
        </div>

        <div key="weekly" style={gridItemStyle}>
          <WeeklyTrendChart data={mockWeeklyStatisticsData} />
        </div>

        <div key="summary-solved" style={gridItemStyle}>
          <Typography variant="h6" color="primary" gutterBottom>
            총 해결한 문제
          </Typography>
          <Typography variant="h3">
            {mockSummaryStatisticsData.data.user.totalSolved}문제
          </Typography>
        </div>
        <div key="summary-accuracy" style={gridItemStyle}>
          <Typography variant="h6" color="primary" gutterBottom>
            나의 정답률
          </Typography>
          <Typography variant="h3">
            {mockSummaryStatisticsData.data.user.correctRate}%
          </Typography>
        </div>
        <div key="summary-time" style={gridItemStyle}>
          <Typography variant="h6" color="primary" gutterBottom>
            평균 풀이 시간
          </Typography>
          <Typography variant="h3">
            {statisticUtils.formatters.timeInSeconds(
              mockSummaryStatisticsData.data.user.timeStats.averageTime
            )}
          </Typography>
        </div>

        <div key="problem-solved" style={gridItemStyle}>
          <TotalSolvedChart data={mockSummaryStatisticsData} />
        </div>

        <div key="correct-rate" style={gridItemStyle}>
          <CorrectRateChart data={mockSummaryStatisticsData} />
        </div>

        <div key="distribution" style={gridItemStyle}>
          <CorrectDistributionChart data={mockSummaryStatisticsData} />
        </div>

        <div key="category-accuracy" style={gridItemStyle}>
          <CategoryAccuracyChart data={mockCategoryStatisticsData} />
        </div>
      </ResponsiveGridLayout>
    </Container>
  );
}
