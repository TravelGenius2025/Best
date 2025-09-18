export const metadata = {
  title: 'TravelGenius',
  description: 'Simple affiliate-ready travel site'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo">Travel<span>Genius</span></div>
          <nav><a href="/">Home</a> | <a href="/book">Book</a></nav>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">© {new Date().getFullYear()} TravelGenius</footer>
      </body>
    </html>
  );
}
