import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "NexBizn",
  description: "Platform for advertising and marketing businesses on NFTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#201629]">
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
