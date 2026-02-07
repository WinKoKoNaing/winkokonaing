import { Navbar } from "@/components/common/navbar";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { manrope, bebasNeue } from "./fonts";
import { Toaster } from "@/components/ui/sonner";

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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
