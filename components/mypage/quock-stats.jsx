"use client";

import React from "react";
import { BarChart2, ListChecks, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickStats = ({ user }) => {
  const handleCardClick = (path) => {
    console.log(`Navigating to ${path}`);
    window.location.href = path;
  };

  return (
    <div className="space-y-4">
      <Card
        className="hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => handleCardClick("/statistics")}
      >
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#6DB1B2]/10">
            <BarChart2 className="w-6 h-6 text-[#6DB1B2]" />
          </div>
          <div>
            <h3 className="font-medium">차트 통계</h3>
            <p className="text-sm text-gray-600">학습 진행도 확인</p>
          </div>
        </CardContent>
      </Card>

      <Card
        className="hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => handleCardClick("/problems")}
      >
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#6DB1B2]/10">
            <ListChecks className="w-6 h-6 text-[#6DB1B2]" />
          </div>
          <div>
            <h3 className="font-medium">문제 리스트</h3>
            <p className="text-sm text-gray-600">전체 문제 보기</p>
          </div>
        </CardContent>
      </Card>

      <Card
        className="hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => handleCardClick("/questions")}
      >
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#6DB1B2]/10">
            <Calendar className="w-6 h-6 text-[#6DB1B2]" />
          </div>
          <div>
            <h3 className="font-medium">오늘의 문제</h3>
            <p className="text-sm text-gray-600">일일 학습하기</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-[#6DB1B2]/10">
            <CheckCircle className="w-6 h-6 text-[#6DB1B2]" />
          </div>
          <div>
            <h3 className="font-medium">오늘의 문제 정답</h3>
            <p className="text-sm text-gray-600">정답 확인하기</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickStats;
