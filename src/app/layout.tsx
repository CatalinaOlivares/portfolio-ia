import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "Portafolio de IA | Ingeniera en Inteligencia Artificial",
  description: "Portafolio profesional de ingeniería en inteligencia artificial, machine learning y deep learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
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
