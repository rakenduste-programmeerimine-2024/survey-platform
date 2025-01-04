import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Survey Platform",
  description: "Discover, create, and manage surveys effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-10 items-center">
              {/* Navigation */}
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Survey Platform</Link>
                    <Link href={"/about"} className="hover:underline">
                      About
                    </Link>
                    <Link href={"/contact"} className="hover:underline">
                      Contact
                    </Link>
                  </div>
                  <HeaderAuth />
                </div>
              </nav>

              {/* Main Content */}
              <div className="flex flex-col gap-10 max-w-5xl p-5">
                {children}
              </div>

              {/* Footer */}
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-10">
                <p>
                  © {new Date().getFullYear()} Survey Platform. All rights
                  reserved.
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
