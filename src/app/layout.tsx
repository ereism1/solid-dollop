import Head from 'next/head';
import React from 'react';
import './globals.css'; // ou o CSS global que você usa

export const metadata = {
icons: {
    icon: '/favicon.ico',
  },

  title: 'Corelog',
  description: 'no description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head><link rel="icon" href="/favicon.ico" type="image/x-icon" /></Head>
      <body>{children}</body>
    </html>
  );
}