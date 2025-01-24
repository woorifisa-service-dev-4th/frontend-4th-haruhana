import Title from "@/components/lending/Title";
import ProblemSolutionCard from "@/components/lending/ProblemSolutionCard";
import TextAndButtonCallToStart from "@/components/lending/TextAndButtonCallToStart";
import "../globals.css";

export default function LendingPage() {
  return (
    <div className="flex flex-col items-center pt-32 px-4 pb-32 max-w-4xl text-center">
      <Title />

      {/* Cards Section */}
      <div className="grid grid-cols-1 pt-32 pb-32 md:grid-cols-3 gap-20 relative">
        <ProblemSolutionCard
          imgSrc="/img2.png"
          quote='"매일 면접 준비를 하고 싶은데 의지력이 부족해요."'
          description="간편한 구독 신청 한 번으로 매일 원하는 시간에 원하는 개수만큼 기술 면접에 필요한 지식을 쌓을 수 있어요!"
        />

        <ProblemSolutionCard
          imgSrc="/img1.png"
          quote='"비전공자라 전공 지식이 전공자들에 비해 부족해요."'
          description="하루 10분 투자로 비전공자도 쉽게 전공 지식을 쌓아갈 수 있어요!"
        />

        <ProblemSolutionCard
          imgSrc="/img3.png"
          quote='"여러 프로젝트를 병행하며 효율적으로 취업 준비를 하고 싶어요."'
          description="매일 맞춤형 문제와 퀴즈로 빠르고 간편하게 실력을 쌓을 수 있는 솔루션을 제공합니다!"
        />
      </div>

      <TextAndButtonCallToStart />
    </div>
  );
}
