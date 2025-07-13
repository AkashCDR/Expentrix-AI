import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expentrix",
  description: "AI-powered expense tracking that keeps things fair, fast, and frustration-free.",
    icon: [
      { url: "/logos/logo-s-new3.png", type: "image/png" },
    ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <link rel="icon" href="/logos/logo-s-new3.png" sizes="any" />
      </>
      <body className={`${inter.className} bg-[#bfd7ed]`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen bg-[#C8E6C9]">
              <Toaster richColors />

              {children}
            </main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
