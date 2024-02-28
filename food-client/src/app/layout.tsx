import { Header } from "@/components";
import { UserProvider } from "../contex/UserProvider";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { FoodProvider } from "@/contex/FoodProvider";
import { CategoryContext, CategoryProvider } from "@/contex/CatgeoryProvider";
import {BasketProvider} from "@/contex/BasketProvider";

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
            <CategoryProvider>
              <FoodProvider>
                <BasketProvider>
                <Header />
                {children}
                <Footer />
                <ToastContainer />
                </BasketProvider>
              </FoodProvider>
            </CategoryProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
