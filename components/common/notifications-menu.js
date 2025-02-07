"use client";

import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activities = [
    { action: "오늘의 문제를 해결했습니다", time: "2시간 전" },
    { action: "3일 연속 학습 달성!", time: "어제" },
    { action: "2일 전 모든 문제을 맞췄습니다!", time: "2일 전" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative hover:opacity-80 transition-opacity"
      >
        <Bell className="w-7 h-7 text-gray-600 hover:text-[#6DB1B2] transition-colors" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {isOpen && (
        <>
          {/* 배경 오버레이 - 클릭 이벤트 추가 */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-1/2 translate-x-1/2 mt-4 w-80 bg-white rounded-lg shadow-md border border-gray-200/75 z-50">
            {/* 말풍선 화살표 */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-white border-t border-l border-gray-200/75 transform rotate-45 shadow-[-2px_-2px_3px_-1px_rgba(0,0,0,0.05)]"></div>
            </div>

            {/* 내용을 감싸는 컨테이너에 overflow hidden 추가 */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">최근 활동</h3>
                  <button
                    className="text-sm text-gray-600 hover:text-[#6DB1B2]"
                    onClick={() => console.log("전체보기 클릭")}
                  >
                    전체보기
                  </button>
                </div>
                <div className="space-y-4">
                  {activities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#6DB1B2]" />
                      <div className="flex-1">
                        <p className="font-medium">{item.action}</p>
                        <p className="text-sm text-gray-600">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationsDropdown;
