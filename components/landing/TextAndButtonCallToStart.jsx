import PromotionText from "./PromotionText";
import StartButton from "./StartButton";

export default function TextAndButtonCallToStart() {
  return (
    <div className="mt-20 text-center leading-relaxed">
      <PromotionText />
      <StartButton />
    </div>
  );
}
