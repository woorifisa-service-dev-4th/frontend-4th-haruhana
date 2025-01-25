/**
 * GET /api/statistics/summary
 * 사용자 통계 요약 정보
 */
export const mockSummaryStatisticsData = {
  isSuccess: true,
  statusCode: 200,
  message: "사용자 통계 요약 정보 조회 성공",
  data: {
    user: {
      totalSolved: 45,
      correctRate: 78,
      incorrectRate: 22,
      timeStats: {
        averageTime: 240, // 문제당 평균 소요 시간(초)
        totalTime: 10800, // 총 학습 시간(초)
        fastestTime: 60, // 최단 소요 시간(초)
        longestTime: 600, // 최장 소요 시간(초)
        averageTimeByCategory: {
          // 카테고리별 평균 소요 시간(초)
          운영체제: 240,
          네트워크: 200,
          자료구조: 250,
          알고리즘: 300,
          DB: 150,
          보안: 150,
        },
      },
    },
    average: {
      totalSolved: 32,
      correctRate: 65,
      incorrectRate: 35,
      timeStats: {
        averageTime: 300, // 전체 사용자 평균 소요 시간(초)
        totalTime: 9600, // 전체 사용자 평균 총 학습 시간(초)
      },
    },
  },
};

/**
 * GET /api/statistics/weekly
 * 주간 문제 해결 현황
 */
export const mockWeeklyStatisticsData = {
  isSuccess: true,
  statusCode: 200,
  message: "주간 문제 해결 현황 조회 성공",
  data: {
    weeklyProgress: [
      {
        day: "월",
        date: "2024-01-22",
        solved: 4,
        categoryDetails: [
          { category: "운영체제", solved: 1 },
          { category: "네트워크", solved: 0 },
          { category: "자료구조", solved: 1 },
          { category: "알고리즘", solved: 2 },
          { category: "DB", solved: 0 },
          { category: "보안", solved: 0 },
        ],
      },
      {
        day: "화",
        date: "2024-01-23",
        solved: 6,
        categoryDetails: [
          { category: "운영체제", solved: 2 },
          { category: "네트워크", solved: 1 },
          { category: "자료구조", solved: 1 },
          { category: "알고리즘", solved: 1 },
          { category: "DB", solved: 1 },
          { category: "보안", solved: 0 },
        ],
      },
      {
        day: "수",
        date: "2024-01-24",
        solved: 3,
        categoryDetails: [
          { category: "운영체제", solved: 1 },
          { category: "네트워크", solved: 0 },
          { category: "자료구조", solved: 0 },
          { category: "알고리즘", solved: 1 },
          { category: "DB", solved: 1 },
          { category: "보안", solved: 0 },
        ],
      },
      {
        day: "목",
        date: "2024-01-25",
        solved: 7,
        categoryDetails: [
          { category: "운영체제", solved: 2 },
          { category: "네트워크", solved: 1 },
          { category: "자료구조", solved: 1 },
          { category: "알고리즘", solved: 2 },
          { category: "DB", solved: 1 },
          { category: "보안", solved: 0 },
        ],
      },
      {
        day: "금",
        date: "2024-01-26",
        solved: 5,
        categoryDetails: [
          { category: "운영체제", solved: 1 },
          { category: "네트워크", solved: 1 },
          { category: "자료구조", solved: 1 },
          { category: "알고리즘", solved: 1 },
          { category: "DB", solved: 0 },
          { category: "보안", solved: 1 },
        ],
      },
      {
        day: "토",
        date: "2024-01-27",
        solved: 8,
        categoryDetails: [
          { category: "운영체제", solved: 2 },
          { category: "네트워크", solved: 2 },
          { category: "자료구조", solved: 1 },
          { category: "알고리즘", solved: 2 },
          { category: "DB", solved: 1 },
          { category: "보안", solved: 0 },
        ],
      },
      {
        day: "일",
        date: "2024-01-28",
        solved: 4,
        categoryDetails: [
          { category: "운영체제", solved: 1 },
          { category: "네트워크", solved: 0 },
          { category: "자료구조", solved: 1 },
          { category: "알고리즘", solved: 1 },
          { category: "DB", solved: 1 },
          { category: "보안", solved: 0 },
        ],
      },
    ],
  },
};

/**
 * GET /api/statistics/category
 * 카테고리별 통계
 */
export const mockCategoryStatisticsData = {
  isSuccess: true,
  statusCode: 200,
  message: "카테고리별 통계 조회 성공",
  data: {
    categories: [
      {
        name: "운영체제",
        solvedCount: 12, // 푼 문제 수
        totalSolvedPercentage: 17.1, // 전체 문제 중 차지하는 비율
        correctCount: 14, // 맞은 문제 수
        incorrectCount: 4, // 틀린 문제 수
        totalCount: 18, // 시도한 문제 수
        accuracyRate: 78, // 정답률
        incorrectRate: 22, // 오답률
        currentStreak: 3, // 현재 연속 정답 수
        bestStreak: 5, // 최대 연속 정답 수
      },
      {
        name: "네트워크",
        solvedCount: 15,
        totalSolvedPercentage: 21.4,
        correctCount: 17,
        incorrectCount: 3,
        totalCount: 20,
        accuracyRate: 85,
        incorrectRate: 15,
        currentStreak: 4,
        bestStreak: 7,
      },
      {
        name: "자료구조",
        solvedCount: 8,
        totalSolvedPercentage: 11.4,
        correctCount: 22,
        incorrectCount: 3,
        totalCount: 25,
        accuracyRate: 88,
        incorrectRate: 12,
        currentStreak: 2,
        bestStreak: 6,
      },
      {
        name: "알고리즘",
        solvedCount: 20,
        totalSolvedPercentage: 28.6,
        correctCount: 15,
        incorrectCount: 5,
        totalCount: 20,
        accuracyRate: 75,
        incorrectRate: 25,
        currentStreak: 5,
        bestStreak: 8,
      },
      {
        name: "DB",
        solvedCount: 10,
        totalSolvedPercentage: 14.3,
        correctCount: 23,
        incorrectCount: 2,
        totalCount: 25,
        accuracyRate: 92,
        incorrectRate: 8,
        currentStreak: 6,
        bestStreak: 9,
      },
      {
        name: "보안",
        solvedCount: 5,
        totalSolvedPercentage: 7.2,
        correctCount: 9,
        incorrectCount: 2,
        totalCount: 11,
        accuracyRate: 82,
        incorrectRate: 18,
        currentStreak: 1,
        bestStreak: 3,
      },
    ],
  },
};

/**
 * API 에러 응답 예시
 */
export const errorResponse = {
  isSuccess: false,
  statusCode: 404,
  message: "데이터를 찾을 수 없습니다.",
  data: null,
};

/**
 * API 응답 상태 코드
 */
export const API_STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
