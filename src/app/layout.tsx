import './globals.scss';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Content from "@/components/layout/Content";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="pt" className={`h-full font-inter ${inter.className}`}>
      <GoogleAnalytics gaMeasurementId={process.env.GA_MEASUREMENT_ID ?? ''}/>

      <body className="flex flex-col h-full">
        <Header />

        <Content>
          {children}
        </Content>

        <Footer />
      </body>
    </html>
  );
}
