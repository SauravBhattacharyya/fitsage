import { IMAGES } from "@/constants/images";
import ReactQueryProvider from "@/lib/reactQueryProvider";
import "@/styles/global.scss";
import { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "FitSage – Your AI Fitness Companion",
  description:
    "FitSage is an AI-powered wellness assistant that generates personalized body summaries, diet plans, and workout routines based on your input. Start your fitness journey with smart, tailored guidance.",
  icons: {
    icon: IMAGES.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} h-screen w-screen antialiased background-color`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
