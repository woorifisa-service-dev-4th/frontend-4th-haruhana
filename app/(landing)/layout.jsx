import "../globals.css";

export default function RootLayout({ children }) {
  return (
      <div
        className="bg-gradient-to-b from-[#9CD6D7] to-white min-h-screen flex flex-col items-center">
        {children}
      </div>
  );
}