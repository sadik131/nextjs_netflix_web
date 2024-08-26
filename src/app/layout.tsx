import { Inter } from 'next/font/google';
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
import SessionWrapper from '@/utils/Wrapper';
import './global.css';
import { Metadata } from 'next';
import { AuthProvider } from './components/Provider';
import ReduxProvider from './components/ReduxProvider';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import ProtectedPage from './ProtectedPage';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Application Title",
  description: "Your Application Description",
};

export default async function RootLayout({
  children,
  // params: { locale }
}: {
  children: React.ReactNode;
  // params: { locale: string };
}) {

  // const messages = await getMessages();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextIntlClientProvider messages={messages}> */}
          <AuthProvider>
            <ReduxProvider>
              <SessionWrapper>
                <ProtectedPage>
                <Notification />
                <Navbar />
                {children}
                </ProtectedPage>
              </SessionWrapper>
            </ReduxProvider>
          </AuthProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
