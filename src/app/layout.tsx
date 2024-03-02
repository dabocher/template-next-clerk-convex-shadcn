import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Providers from "../providers/clerkConvexProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import Header from "@/components/shared/Header";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Next14CleConShad",
  description:
    "Template for Next.js 14 with Tailwind CSS, TypeScript, Clerk, Convex and Shadcn-UI",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${jost.className}  min-h-svh w-full`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
