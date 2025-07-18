import React from 'react';
import './globals.css'; // ou o CSS global que você usa

export const metadata = {
  title: 'Meu App',
  description: 'Descrição do meu App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}