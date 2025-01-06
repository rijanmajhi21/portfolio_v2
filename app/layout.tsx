import { ReactNode } from "react";
import '../assets/app.css';

export const metadata = {
  title: "Portfolio",
  description: "Showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-pure-white text-gray-800 font-inter">
        {children}
      </body>
    </html>
  );
}
