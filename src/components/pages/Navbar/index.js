import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPlayLink } from '@utilities/dev';
import Pop from '@pages/prop';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className='w-full '>
        <div className='bg-nav  '>
          <div className='container-fluid pt-[30px] px-[20px]'>
            <div className=' flex justify-between'>
              <Link href='/'>
                <div className='cursor-pointer w-[50px] md:w-[158px]'>
                  <Image src='/assets/pic/logo.png' alt='logo' width={512} height={668} />
                </div>
              </Link>

              <div>
                <div className='block lg:hidden'>
                  <button
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                    className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
                  >
                    <svg
                      className={`fill-current h-5 w-5 ${isOpen ? 'hidden' : 'block'}`}
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                    <svg
                      className={`fill-current h-5 w-5 float-left ${isOpen ? 'block' : 'hidden'}`}
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
                    </svg>
                  </button>
                </div>
                <div
                  className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className='text-sm lg:flex-grow'>
                    <ul className=' text-white lg:flex-grow '>
                      <Link href='/about'>
                        <li className=' cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 sm:text-xl text-lg mx-3 hover:underline hover:underline-offset-8 hover:decoration-amber-600  hover:decoration-4'>
                          关于我们
                        </li>
                      </Link>
                      <Link href={getPlayLink()}>
                        <li className='block mt-4 cursor-pointer lg:inline-block lg:mt-0 text-white-200 mr-4 sm:text-xl text-lg mx-3 hover:underline hover:underline-offset-8 hover:decoration-amber-600  hover:decoration-4'>
                          联系客服
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex justify-center flex-col items-center text-white my-20 '>
            <Pop />
          </div>
          <div className=' relative h-[20vw] bg-none border-none'>
            <div className=' absolute bottom-0 w-full  '>
              <div className=' h-[15vw] bg-h-bar' />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
