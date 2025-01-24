export default function PromotionText() {
  return (
    <div>
      <p
        className="text-white text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]"
        style={{
          WebkitTextStroke: "0.2px gray",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
        비전공자도, 준비 시간이 부족한 직장인도, <br />
        효율적으로 기술면접을 정복할 수 있는 <br />
        완벽한 솔루션!
      </p>
      <p
        className="text-white text-4xl mt-16 font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]"
        style={{
          WebkitTextStroke: "0.2px gray",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
        <span className="text-[#9CD6D9]">하루 10분만 투자</span>하면 맞춤형 문제와 <br />
        퀴즈로 실력을 쌓아가는 당신만의 비밀 무기! <br />
        <span className="text-[#9CD6D9] font-bold">지금 시작하세요!</span>
      </p>
    </div>
  );
}