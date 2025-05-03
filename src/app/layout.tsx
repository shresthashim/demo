import './globals.css';

export const metadata = {
  title: 'Ashim Shrestha | Portfolio',
  description: 'Computer Engineering student portfolio of Ashim Shrestha',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
