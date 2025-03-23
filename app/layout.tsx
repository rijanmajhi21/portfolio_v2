import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../assets/app.css";

export const metadata = {
  title: "Portfolio",
  description: "Showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-pure-white text-gray-800 font-inter">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
