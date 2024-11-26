import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navbar/Navbar";
import RootStyleRegistry from "./emotion-cache";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "MedAI",
  description: "A Work in Progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <RootStyleRegistry>
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
