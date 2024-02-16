import { Header } from "@/components";
import { UserProvider } from "../contex/UserProvider";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
