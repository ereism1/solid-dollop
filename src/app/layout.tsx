import React from 'react';
import './globals.css'; // ou o CSS global que você usa

export const metadata = {
icons: {
    icon: '/favicon.png',
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
      <head><link rel="icon" href="/favicon.png" type="image/png" /></head>
      <body>{children}</body>
    </html>
  );
}