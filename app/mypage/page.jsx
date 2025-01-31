import React from 'react';
import {
    User, Settings, Bell, Edit, BarChart2,
    ListChecks, Calendar, CheckCircle, Heart,
    ChevronLeft, ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/bottom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const StudyCalendar = () => {
    const studiedDays = [1, 3, 5, 7, 8, 9, 10, 12, 15, 16, 20, 21, 22, 23];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const today = new Date().getDate(); // 현재 날짜에서 일자를 추출


    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-[#6DB1B2]">2025년 1월</h3>
                    <span className="text-gray-500">학습 캘린더</span>
                </div>
                <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="hover:text-[#6DB1B2] rounded-full w-8 h-8">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-[#6DB1B2] rounded-full w-8 h-8">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-7 border-b bg-gray-50">
                    {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                        <div key={day}
                             className={`
                text-sm font-medium p-3 text-center
                ${idx === 0 ? 'text-red-400' : idx === 6 ? 'text-blue-400' : 'text-gray-600'}
                ${idx !== 6 ? 'border-r' : ''}
              `}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7">
                    <div className="border-r border-b p-3"></div>
                    {days.map((day) => {
                        const isStudied = studiedDays.includes(day);
                        const isToday = day === today;

                        return (
                            <div
                                key={day.toString()}
                                className={`
                  p-3 aspect-square flex items-center justify-center relative
                  ${day % 7 !== 0 ? 'border-r' : ''} 
                  border-b
                  ${isStudied ? 'bg-[#6DB1B2]/5' : 'hover:bg-gray-50'} 
                  ${isToday ? 'ring-2 ring-inset ring-[#6DB1B2]' : ''}
                  transition-all duration-200
                `}
                            >
                <span className={`text-sm ${isStudied ? 'text-[#6DB1B2] font-medium' : 'text-gray-600'}`}>
                  {day}
                </span>
                                {isStudied && (
                                    <Heart
                                        className="w-5 h-5 absolute bottom-1 right-1 fill-[#6DB1B2] text-[#6DB1B2]"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-[#6DB1B2] text-[#6DB1B2]" />
                    <span className="text-sm text-gray-600">학습 완료</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">이번 달 학습:</span>
                    <span className="text-sm font-medium text-[#6DB1B2]">{studiedDays.length}일</span>
                </div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-[#6DB1B2] text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">마이페이지</h1>
                        <div className="flex gap-4">
                            <Bell className="w-6 h-6 cursor-pointer hover:opacity-80" />
                            <Settings className="w-6 h-6 cursor-pointer hover:opacity-80" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Profile Section */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                            <Avatar className="w-24 h-24">
                                <AvatarImage src="/api/placeholder/150/150" />
                                <AvatarFallback className="bg-[#6DB1B2]">
                                    <User className="w-12 h-12 text-white" />
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h2 className="text-xl font-bold">사용자님</h2>
                                        <p className="text-gray-600">상태 메시지를 입력해주세요</p>
                                    </div>
                                    <Button variant="outline" className="flex items-center gap-4">
                                        <Edit className="w-4 h-4" />
                                        프로필 수정
                                    </Button>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">연속 학습</p>
                                        <p className="font-bold text-[#6DB1B2]">7일</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">해결한 문제</p>
                                        <p className="font-bold text-[#6DB1B2]">42개</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">정답률</p>
                                        <p className="font-bold text-[#6DB1B2]">85%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Calendar and Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Study Calendar */}
                    <Card className="md:col-span-2">
                        <CardContent className="p-6">
                            <StudyCalendar />
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <div className="space-y-4">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
                </div>

                {/* Recent Activity */}
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">최근 활동</h3>
                            <Button variant="ghost" size="sm" className="text-gray-600">
                                전체보기
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { action: "오늘의 문제를 해결했습니다", time: "2시간 전" },
                                { action: "3일 연속 학습 달성!", time: "어제" },
                                { action: "2일 전 모든 문제을 맞췄습니다!", time: "2일 전" }
                            ].map((item, index) => (
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
            </main>
        </div>
    );
};

export default Page;