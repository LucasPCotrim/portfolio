import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lucas Cotrim</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Lucas Cotrim's Portfolio" />
        <link rel="icon" href="static/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
