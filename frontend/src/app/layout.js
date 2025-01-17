import { ApolloWrapper } from "./ApolloWrapper";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProgressBar from "@/components/progressBar";
import Distressed from "@/components/distressed";
import "./globals.css";

export const metadata = {
  title: "VSSL Brand Guide",
  description:
    "This guide makes sure that the way we look and sound feels consistent across all of our communications. Keep diving to learn more about the VSSL brand.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="bg-ink">
      <body>
        <ApolloWrapper>        
          <Navigation />
          <Distressed />
          <main>{children}</main>
          <ProgressBar />
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}