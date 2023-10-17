import Topbar from '@/components/Topbar/Topbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import GotoTop from '@/components/GotoTop/GotoTop';
import { StoreProvider } from '@/redux/StoreProvider';
import { AuthContextProvider } from '@/components/context/authContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PLANET WARE | Home',
  description: 'A PLANET WARE website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AuthContextProvider>
            <Topbar />
            {children}
            <GotoTop />
            <Footer />
          </AuthContextProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
