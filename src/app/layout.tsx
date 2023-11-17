import { Raleway } from "next/font/google";
import clsx from 'clsx'
import "@/app/layout.scss";
import Image from "next/image";
import Logo from '@/assets/images/logo.svg'

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("layout", raleway.className)}>
      <head>
        <title>Trinca Churras</title>
      </head>

      <body className={"layout__body"}>
        <header>
          <h1 className={"layout__title"}>Agenda de Churras</h1>
        </header>
        <main>{children}</main>
        <footer className={"layout__footer"}>
          <Image src={Logo} alt="Logo trinca" />
        </footer>
      </body>
    </html>
  );
}
