import React from 'react';
import { Bell, Settings } from 'lucide-react';
import ProfileSection from '@/components/mypage/profileSection';
import StudyCalendar from '@/components/mypage/study-calendar';
import QuickStats from '@/components/mypage/quock-stats';
import RecentActivity from '@/components/mypage/recent-activity';

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
                <ProfileSection />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="md:col-span-2">
                        <StudyCalendar />
                    </div>
                    <QuickStats />
                </div>
                <RecentActivity />
            </main>
        </div>
    );
};

export default Page;