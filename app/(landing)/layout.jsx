import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className="bg-gradient-to-b from-[#9CD6D7] to-white min-h-screen flex flex-col items-center"
        >
        {children}
        </body>
        </html>
    );
}