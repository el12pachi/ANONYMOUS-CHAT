import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anonymous Chat",
  description: "Chat anónimo en tiempo real. Sin registro, sin seguimiento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div>Prueba</div>
        {children}
        </body>
    </html>
  );
}
