import ThemeProvider from "@/theme";
import "./globals.css";
// import {CategoryProvider} from "../context/CategoryProvider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* <CategoryProvider> */}
            {children}
          {/* </CategoryProvider> */}
            </ThemeProvider>
      </body>
    </html>
  );
}
