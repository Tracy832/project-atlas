import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-colors duration-200">
      <body className="min-h-screen antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <ThemeProvider>
          {/* We only wrap the application logic here. No Navbars or structural UI allowed! */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}