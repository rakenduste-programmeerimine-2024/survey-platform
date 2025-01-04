import HeaderAuth from "@/components/header-auth";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import Image from "next/image";
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
              <nav className="w-full flex justify-between items-center border-b border-b-foreground/10 h-16 px-5">
                <div className="flex items-center">
                  <Link href="/">
                    <Image
                      src="/QuestR.png" 
                      alt="Survey Platform Logo"
                      width={90}
                      height={90}
                    />
                  </Link>
                  <Link
                    href="/"
                    className="ml-3 text-lg font-bold hover:underline"
                  >
                    QuestR küsitlused
                  </Link>
                </div>

                <div className="flex items-center gap-5">
                  <Link
                    href="/meist"
                    className="text-sm font-medium hover:underline"
                  >
                    Meist
                  </Link>
                  <Link
                    href="/kontakt"
                    className="text-sm font-medium hover:underline"
                  >
                    Kontakt
                  </Link>
                  <HeaderAuth />
                </div>
              </nav>

              <div className="flex flex-col gap-10 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-10">
                <p>
                  © {new Date().getFullYear()} Survey Platform. All rights
                  reserved.
                </p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
