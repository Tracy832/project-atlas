import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/common/Navbar"; // import navbar

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-colors duration-200">
      <body className="min-h-screen antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ThemeProvider>

          {/* Navbar appears globally */}
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}