import "@/styles/global.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitSage – Your AI Fitness Companion",
  description:
    "FitSage is an AI-powered wellness assistant that generates personalized body summaries, diet plans, and workout routines based on your input. Start your fitness journey with smart, tailored guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
