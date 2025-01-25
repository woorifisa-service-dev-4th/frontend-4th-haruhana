/**
 * 통계 데이터 처리를 위한 유틸리티 함수들
 * - API 응답 데이터를 차트 데이터로 변환
 * - 통계 값 포맷팅
 * - 데이터 추출 및 가공
 */
export const statisticUtils = {
  /**
   * 데이터 포맷팅 유틸리티
   * 숫자, 날짜 등의 데이터를 표시 형식에 맞게 변환
   */
  formatters: {
    /**
     * 문제 수를 'N문제' 형식으로 변환
     * @example problemCount(5) => '5문제'
     */
    problemCount: (value) => `${value}문제`,

    /**
     * 백분율을 'N%' 형식으로 변환
     * @example percentage(75.5) => '75.5%'
     */
    percentage: (value) => `${value}%`,

    /**
     * 초 단위 시간을 'N분 M초' 형식으로 변환
     * @example timeInSeconds(125) => '2분 5초'
     */
    timeInSeconds: (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}분 ${remainingSeconds}초`;
    },

    /**
     * 날짜를 'YYYY-MM-DD' 형식으로 변환
     * @example dateToYYYYMMDD('2024-01-01T00:00:00') => '2024-01-01'
     */
    dateToYYYYMMDD: (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    /**
     * 문제 수와 비율을 'N문제 (M%)' 형식으로 변환
     * @example problemCountWithPercentage(3, 10) => '3문제 (30%)'
     */
    problemCountWithPercentage: (value, total) => {
      const percentage = ((value / total) * 100).toFixed(1);
      return `${value}문제 (${percentage}%)`;
    },
  },

  /**
   * API 응답 데이터를 차트 데이터로 변환하는 유틸리티
   * 각 통계 유형별 응답 DTO를 차트 라이브러리에서 사용할 수 있는 형식으로 변환
   */
  responseTransformers: {
    /**
     * 통계 요약 데이터 변환 (mockSummaryStatisticsData)
     */
    summaryResponseDto: {
      /**
       * 총 문제 해결 수 비교를 위한 Bar Chart 데이터로 변환
       * @see TotalSolvedChart component
       * @returns {{myValue: number, avgValue: number}} Bar Chart Data
       */
      toTotalSolvedChartData: (rawData) => ({
        myValue: rawData.data.user.totalSolved,
        avgValue: rawData.data.average.totalSolved,
      }),

      /**
       * 정답률 비교를 위한 Bar Chart 데이터로 변환
       * @see CorrectRateChart component
       * @returns {{myValue: number, avgValue: number}} Bar Chart Data
       */
      toCorrectRateChartData: (rawData) => ({
        myValue: rawData.data.user.correctRate,
        avgValue: rawData.data.average.correctRate,
      }),

      /**
       * 정답/오답 분포를 위한 Pie Chart 데이터로 변환
       * @see CorrectDistributionChart component
       * @returns {{correctRate: number, incorrectRate: number}} Pie Chart Data
       */
      toCorrectDistributionChartData: (rawData) => ({
        correctRate: rawData.data.user.correctRate,
        incorrectRate: rawData.data.user.incorrectRate,
      }),
    },

    /**
     * 카테고리별 통계 데이터 변환 (mockCategoryStatisticsData)
     */
    categoryResponseDto: {
      /**
       * 카테고리별 정확도를 위한 Chart 데이터로 변환
       * @returns {{labels: string[], values: number[]}} Chart Data
       */
      toCategoryAccuracyChartData: (rawData) => ({
        labels: rawData.data.categories.map((item) => item.name),
        values: rawData.data.categories.map((item) => item.accuracyRate),
      }),

      /**
       * 카테고리별 해결 문제 수를 위한 Chart 데이터로 변환
       * @returns {{labels: string[], values: number[], maxValue: number}} Chart Data
       */
      toCategorySolvedChartData: (rawData) => ({
        labels: rawData.data.categories.map((item) => item.name),
        values: rawData.data.categories.map((item) => item.solvedCount),
        maxValue: Math.max(
          ...rawData.data.categories.map((item) => item.solvedCount)
        ),
      }),
    },

    /**
     * 주간 통계 데이터 변환 (mockWeeklyStatisticsData)
     */
    weeklyResponseDto: {
      /**
       * 주간 트렌드 차트 데이터로 변환
       * @returns {{
       *   dates: string[],
       *   totalSolved: number[],
       *   categories: Array<{label: string, data: number[]}>,
       *   maxValue: number
       * }}
       */
      toWeeklyTrendChartData: (rawData) => {
        const weeklyData = rawData.data.weeklyProgress;
        const categories = [
          ...new Set(weeklyData[0].categoryDetails.map((cat) => cat.category)),
        ];

        // 전체 문제 해결 수
        const totalSolvedData = weeklyData.map((week) => week.solved);

        // 카테고리별 문제 해결 수
        const categoryData = categories.map((category) => ({
          label: category,
          data: weeklyData.map(
            (week) =>
              week.categoryDetails.find((cat) => cat.category === category)
                ?.solved ?? 0
          ),
        }));

        return {
          dates: weeklyData.map((week) => week.date),
          totalSolved: totalSolvedData,
          categories: categoryData,
          maxValue: Math.max(...totalSolvedData),
        };
      },
    },
  },
};
