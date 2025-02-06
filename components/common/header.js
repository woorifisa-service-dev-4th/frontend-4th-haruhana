"use client";

import { Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            {/* 로고 */}
            <Link
              href="/"
              className="text-[#6DB1B2] text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              하루하나
            </Link>

            {/* 네비게이션 메뉴 */}
            <nav className="hidden md:flex">
              <Link
                href="/problems"
                className={`text-gray-600 hover:text-[#6DB1B2] transition-colors ${
                  pathname === "/problems" ? "text-[#6DB1B2] font-medium" : ""
                }`}
              >
                문제 리스트
              </Link>
            </nav>
          </div>

          {/* 우측 아이콘 및 프로필 */}
          <div className="flex items-center gap-8">
            <div className="relative">
              <Bell className="w-7 h-7 text-gray-600 cursor-pointer hover:text-[#6DB1B2] transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <Link href="/mypage" className="group">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100 transition-all group-hover:ring-[#6DB1B2]">
                <Image
                  src="/avatars/user1.png"
                  alt="프로필"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
