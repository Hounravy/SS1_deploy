import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';
import Image from 'next/image';
import { getPlayLink } from '@utilities/dev';

const Pop = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <div className='d-flex justify-center mt-5 '>
        <Modal className='d-flex justify-center items-center' show={show} onHide={handleClose}>
          <div className='bg-pop sm:h-[35vw] sm:w-[30vw] w-[45vw] h-[60vw] '>
            <div className=' flex justify-end m-2 sm:m-3'>
              <button
                type='button'
                className=' text-white w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border-4 rounded-full '
                onClick={handleClose}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='sm:w-8 w-5 h-5  sm:h-8'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            <Link href={getPlayLink()}>
              <div className='bottom-5 absolute cursor-pointer w-[130px] md:w-[100px] md:h-[25px] h-[30px] lg:w-[230px] lg:h-[60px] bg-slate-50 left-[10vw] rounded-full '>
                <Image src='/assets/pic/bg-bu.png' alt='pop' width={230} height={60} />
              </div>
            </Link>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Pop;
