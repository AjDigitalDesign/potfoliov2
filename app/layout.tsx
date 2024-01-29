import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Header/Navigation";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { client } from "@/lib/sanity";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

async function getData() {
  const query = `*[_type == 'siteMeta'][0]  {
    site_name,
      description,
    'ogImage':ogImage.asset->url,
      ogTitle,
      ogDescription,
   
  }`;

  const data = await client.fetch(query, { next: { revalidate: 10 } });
  return data;
}

export async function generateMetadata() {
  const data = await getData();
  console.log(data);

  return {
    title: {
      default: data.site_name,
    },
    description: data.description,
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: "https://nextjs.org",
      siteName: data.site_name,
      images: [
        {
          url: data.ogImage, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
