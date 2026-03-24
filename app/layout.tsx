'use client'



import type { Metadata } from "next";
import "./globals.css";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import '@/css/navbar.css'


const metadata: Metadata = {
  title: "Said Maharramli",
  description: "Portfolio site of Said Maharramli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
