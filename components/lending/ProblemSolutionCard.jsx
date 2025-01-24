import ArrowIcon from "./ArrowIcon";

export default function ProblemSolutionCard({ imgSrc, quote, description }) {
  return (
    <div className="relative flex flex-col items-center">
      <img src={imgSrc} className="absolute top-[-40px] w-21 h-21" />
      <div
        className="flex items-center justify-center flex-shrink-0 rounded-lg shadow-lg text-center relative z-10"
        style={{
          width: "230px",
          height: "110px",
          padding: "10px",
          border: "3px solid #6DB1B2",
          borderRadius: "10px",
          background: "#FFFFFF",
          marginTop: "137px",
        }}
      >
        <p className="font-medium text-gray-700 text-center">{quote}</p>
      </div>
      <div className="py-6">
        <ArrowIcon />
      </div>
      <div
        className="flex items-center justify-center flex-shrink-0 rounded-lg shadow-lg text-center relative z-10"
        style={{
          width: "230px",
          height: "150px",
          padding: "10px",
          border: "3px solid #6DB1B2",
          borderRadius: "10px",
          background: "#FFFFFF",
        }}
      >
        <p className="text-m text-gray-700 max-w-[200px]">{description}</p>
      </div>
    </div>
  );
}
