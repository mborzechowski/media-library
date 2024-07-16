import '@/app/globals.css';
import NavBar from '../components/NavBar';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
  title: 'Media Library | Catalogue All Your Media',
  description: 'Catalogue All Your Media',
  keywords: 'books, games, movies, comics, catalogue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='pl'>
        <body className='flex flex-row min-h-screen'>
          <NavBar />
          <main className='flex-grow w-full max-w-7xl mx-auto px-4'>
            {children}
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
