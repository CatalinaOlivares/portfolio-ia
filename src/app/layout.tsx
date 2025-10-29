import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "PatternAI | Catalina Olivares - AI Manager & Civil Engineer",
  description: "Professional portfolio showcasing AI/ML projects, reinforcement learning solutions, and fullstack development. Specialized in NP-hard optimization, computer vision, and modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="neural-bg" suppressHydrationWarning>
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <FloatingElements />
        {children}
      </body>
    </html>
  );
}
