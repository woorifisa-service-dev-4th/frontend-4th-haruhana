import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '../ui/button';

const StudyCalendar = () => {
    const studiedDays = [1, 3, 5, 7, 8, 9, 10, 12, 15, 16, 20, 21, 22, 23];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const today = new Date().getDate(); // 현재 날짜에서 일자를 추출

    const year = 2025;
    const month = 0; // 1월은 0
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 2025년 1월 1일의 요일 (0: 일요일, 1: 월요일, ...)

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
                    {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="border-r border-b p-3"></div>
                    ))}
                    {days.map((day) => {
                        const isStudied = studiedDays.includes(day);
                        const isToday = day === today;

                        return (
                            <div
                                key={day.toString()}
                                className={`
                  p-3 aspect-square flex items-center justify-center relative
                  ${(firstDayOfMonth + day - 1) % 7 !== 6 ? 'border-r' : ''} 
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

export default StudyCalendar;