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
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="static/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
