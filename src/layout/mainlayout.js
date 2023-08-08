import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Main } from '@components/common';
import Footer from '@components/pages/Footer';
import Navbar from '@components/pages/Navbar';
import Pop from '@pages/pop-up';

export default function MainLayout({ children }) {
  // State
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>SS1-SEM</title>
      </Head>
      <div className='w-full relative'>
        <Main.ScrollToTop scrollBtn={scrollBtn} />
        <Navbar />
        <Pop />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
