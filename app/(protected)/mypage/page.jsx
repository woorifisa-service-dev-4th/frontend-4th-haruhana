import ProfileSection from "@/components/mypage/profileSection";
import StudyCalendar from "@/components/mypage/study-calendar";
import QuickStats from "@/components/mypage/quock-stats";
import RecentActivity from "@/components/mypage/recent-activity";

export default function MyPage() {
  return (
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
  );
}
