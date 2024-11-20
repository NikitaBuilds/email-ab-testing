import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Nikita Gurbatov Project",
  description: "Email AB Testing Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <body className="bg-background">
            {" "}
            {/* Make sure this class is present */}
            {children}
          </body>
        </ThemeProvider>
      </body>
    </html>
  );
}
