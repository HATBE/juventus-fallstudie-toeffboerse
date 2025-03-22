export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <header className="p-4 bg-gray-100 text-xl">🌟 My App Header</header>
          <main className="p-4">{children}</main>
          <footer className="p-4 bg-gray-100 mt-10">© 2025</footer>
        </body>
      </html>
    );
  }