import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';

const RecentActivity = () => {
    const activities = [
        { action: "오늘의 문제를 해결했습니다", time: "2시간 전" },
        { action: "3일 연속 학습 달성!", time: "어제" },
        { action: "2일 전 모든 문제을 맞췄습니다!", time: "2일 전" }
    ];

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">최근 활동</h3>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                        전체보기
                    </Button>
                </div>
                <div className="space-y-4">
                    {activities.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50">
                            <div className="w-2 h-2 rounded-full bg-[#6DB1B2]" />
                            <div className="flex-1">
                                <p className="font-medium">{item.action}</p>
                                <p className="text-sm text-gray-600">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RecentActivity;