"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FEATURES } from "@/constants/landing/features";
import { TESTIMONIALS } from "@/constants/landing/testimonials";
import { COMPANIES } from "@/constants/landing/companies";
import Link from "next/link";
import "../globals.css";

export default function LendingPage() {
  const [currentPage, setCurrentPage] = useState(0);

  // 전체 후기 페이지 수 계산
  const totalPages = Math.ceil(TESTIMONIALS.length / 2); // 후기를 2개씩 표시하므로 2로 나눔

  useEffect(() => {
    const logos = document.querySelector(".logo-slider");
    if (logos) {
      logos.appendChild(logos.children[0].cloneNode(true));
    }

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000); // 5초마다 변경

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <>
      <div className="w-full">
        {/* Hero Section - 더 큰 높이 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative min-h-[100vh] flex items-center justify-center hero-section overflow-hidden py-32"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9CD6D7] via-[#b8e3e4] to-[#9CD6D7]/80" />

          {/* Content */}
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="text-[#2a2a2a]"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 [text-shadow:_0_1px_12px_rgb(255_255_255_/_50%)]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                하루하나로 시작하는
                <br />
                개발자로의 성장
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 1.2,
                  ease: "easeOut",
                }}
              >
                하루 하루 성장하는 개발자가 되어보세요
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
        </motion.div>

        {/* Features Section */}
        <div className="bg-white py-40">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {FEATURES.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 hover-lift border border-[#9CD6D7]/20"
                >
                  <div className="text-4xl mb-6">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-[#2a2a2a]">
                    {card.quote}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-gray-50 py-40 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl font-bold text-[#2a2a2a] mb-4">
                구독자들이 선택한 기업들
              </h2>
              <p className="text-gray-600 text-lg">
                하루하나와 함께 성장하여 다양한 기업에서 활약하고 있습니다
              </p>
            </motion.div>

            {/* Company Logos with Sliding Animation */}
            <div className="relative w-full overflow-hidden">
              <div className="flex">
                <div
                  className="logo-slider flex gap-8"
                  style={{
                    width: "fit-content",
                    paddingRight: "2rem",
                  }}
                >
                  {[...COMPANIES, ...COMPANIES, ...COMPANIES].map(
                    (company, index) => (
                      <div
                        key={`${company}-${index}`}
                        className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm min-w-[200px]"
                      >
                        <img
                          src={`/companies/${company}-logo.png`}
                          alt={company}
                          className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - 패딩 증가 */}
        <div className="bg-white py-40">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl font-bold text-[#2a2a2a] mb-4">
                실제 구독자들의 생생한 후기
              </h2>
              <p className="text-gray-600 text-lg">
                하루하나로 성장한 개발자들의 이야기를 들어보세요
              </p>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TESTIMONIALS.slice(currentPage * 2, currentPage * 2 + 2).map(
                  (testimonial, index) => (
                    <motion.div
                      key={currentPage * 2 + index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-gray-50 p-8 rounded-2xl min-h-[280px] flex flex-col"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full border-4 border-[#9CD6D7]/20"
                        />
                        <div>
                          <h3 className="font-semibold text-[#2a2a2a] text-2xl mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-base text-gray-500">
                            {testimonial.role} @{" "}
                            <span className="text-[#9CD6D7] font-medium">
                              {testimonial.company}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                        {testimonial.content}
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div className="bottom-gradient py-40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-[#2a2a2a] text-4xl font-bold mb-8 [text-shadow:_0_1px_12px_rgb(255_255_255_/_50%)]">
                당신의 페이스대로
                <br />
                원하는 지식을 마스터하는
                <br />
                맞춤형 학습 여정
              </h2>
              <div className="text-[#2a2a2a] text-xl space-y-4 [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]">
                <p>
                  네트워크, 운영체제, 알고리즘부터
                  <br />
                  React, Spring Boot까지
                </p>
                <p className="text-[#2a2a2a]/80 text-lg">
                  퀄리티 높은 문제들을
                  <br />
                  무료로, 원하는 만큼, 원하는 시간에
                </p>
              </div>
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2a2a2a] text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl mt-12 hover:shadow-2xl"
                >
                  무료로 시작하기
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
