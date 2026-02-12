import { Navbar } from "@/components/common/navbar";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { manrope, bebasNeue } from "./fonts";
import { Toaster } from "@/components/ui/sonner";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import AnimatedGradient from "@/components/common/AnimatedGradient";

export const metadata: Metadata = {
  title: "Win Ko Ko Naing | Software Engineer",
  description:
    "Software Engineer focused on modern web and mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} ${bebasNeue.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            {children}
            <ParticlesBackground />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
