import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { getPlayLink } from '@utilities/dev';

const About = () => {
  return (
    <>
      <section className=' bg-slate-50'>
        <div className='container-full pb-11'>
          <div className='flex justify-center items-center mb-9'>
            <h5 className=' text-2xl font-bold'>集团概述</h5>
          </div>
          <div>
            <p>
              铂金瀚金融集团自成立以来，已拓展逾90家分公司，遍布菲律宾、柬埔寨、泰国、迪拜、新加坡、缅甸、老挝、马来西亚、台湾和越南等地。集团员工超过500名，由具有丰富经验的专业金融团队组成，涵盖金融、博彩、娱乐、支付等多个领域。经过三年的深耕发展，各业务领域均取得显著成果，赢得业界口碑。
            </p>
            <br />
            <p>
              集团旗下拥有强大的线上线下业务体系，包括各类型实体经营、支付行业、交易所、线上娱乐以及赌场娱乐城等，覆盖整个东南亚市场。得益于雄厚的资金实力和专业团队支持，我们为客户提供全方位的安心服务
            </p>
            <br />
            <p>
              展望未来，铂金瀚集团将站在时代前沿，积极推进国际化战略，与全球市场紧密接轨，不断追求卓越，为客户创造更高价值。
            </p>
          </div>

          <div className='flex justify-center mt-11'>
            <Link href={getPlayLink()}>
              <button
                type='button'
                className='font-bold hover:bg-amber-600 hover:text-white text-amber-600 outline-none border-2 border-amber-600 py-[5px] px-[20px] rounded-full'
              >
                马上转帐
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-roop'>
        <div className='w-full bg-coroop'>
          <div className='container-full'>
            <div className=' text-white p-16'>
              <div className=' items-center text-center'>
                <h5 className=' text-2xl font-bold'>企业理念</h5>
                <p className=' text-xl mt-4 mb-8'>你我携手合作，共赢盛世未来 🤝</p>
              </div>
              <div className='flex sm:flex-row flex-col items-center'>
                <div className='ml-0 mr-10 sm:w-1/2 w-full'>
                  <Image
                    src='/assets/pic/g-up1.jpg'
                    alt='up'
                    width={600}
                    height={500}
                    className='rounded-lg '
                  />
                </div>
                <div className='flex flex-col sm:w-1/2 w-full'>
                  <div className=' my-2 flex sm:justify-start justify-center'>
                    <h5 className=' text-xl text-amber-600 font-bold'>专业团队与领域专精</h5>
                  </div>
                  <div>
                    <p>
                      铂金瀚集团支付团队以专业的金融人才为核心，集团庞大的管理团队实力不断的创新，研发新项目，培养出多批优秀的专业人员，为你提供最安心的一站式服务
                    </p>{' '}
                  </div>
                  <Link href={getPlayLink()}>
                    <div className='my-4 flex sm:justify-start justify-center'>
                      {' '}
                      <button
                        type='button'
                        className='font-bold bg-white   text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'
                      >
                        联络客服
                      </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className='flex sm:flex-row  flex-col items-center'>
                <div className='mr-0 ml-10 sm:w-1/2 w-full flex-none max-w-[478px] order-2'>
                  <Image
                    src='/assets/pic/g-up2.jpg'
                    alt='pop-up'
                    width={600}
                    height={500}
                    className='rounded-lg '
                  />
                </div>
                <div className='flex flex-col sm:w-1/2 w-full order-2 md:order-1 '>
                  <div className=' my-2 flex sm:justify-end justify-center '>
                    <h5 className=' text-xl text-amber-600 font-bold'>合作优势</h5>
                  </div>

                  <div>
                    {' '}
                    <p>
                      本集团在行业内拥有独特竞争优势，我们为客户提供一站式、全方位的服务。凭借完善的公司架构、高度可复制的产业模式、具有发展潜力的产业框架以及优秀的客户管理系统，我们致力于满足客户的各种需求，为他们带来卓越的体验。盛世未来，共创明天，我们致力于为各灰产供全方位支持与保障。让我们携手共进，挑战可能！
                    </p>{' '}
                  </div>
                  <Link href={getPlayLink()}>
                    <div className='my-4 flex sm:justify-end justify-center'>
                      {' '}
                      <button
                        type='button'
                        className='font-bold bg-white  text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'
                      >
                        联络客服
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-classic'>
        <div className=' container-full'>
          <div className=' text-center pt-10'>
            <h5 className=' text-2xl text-black font-bold '>公司的服务范畴</h5>
          </div>

          <div className='flex sm:flex-row flex-col justify-center items-center pb-20 pt-10'>
            <div className='flex text-black flex-col sm:w-1/3 w-full text-center sm:mb-1 mb-[25px]'>
              <div className='ml-0 mr-10 '>
                <Image
                  src='/assets/pic/api.jpg'
                  alt='api'
                  width={600}
                  height={600}
                  className='rounded-lg '
                />
              </div>
              <div className='flex flex-col '>
                <div className=' my-4'>
                  <h5 className=' text-center text-xl text-amber-600 font-bold'>充U代付</h5>
                </div>
                <div className=' px-4 sm:h-32 h-full'>
                  <p>
                    <span className=' font-bold'>
                      接盘口会员下发。
                      <br />
                      可选择文档，API，群贴卡多种模式。
                    </span>{' '}
                    我们还有更多的服务，如果您感兴趣可以跟我们的客服联络。
                  </p>{' '}
                </div>
                <Link href={getPlayLink()}>
                  <div className='my-4 flex justify-center'>
                    {' '}
                    <button
                      type='button'
                      className=' font-bold bg-white  text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'
                    >
                      联络客服
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className='flex text-black flex-col sm:w-1/3 w-full text-center sm:mb-1 mb-[45px]'>
              <div className='ml-0 mr-10 '>
                <Image
                  src='/assets/pic/api2.jpg'
                  alt='spp'
                  width={600}
                  height={600}
                  className='rounded-lg '
                />
              </div>
              <div className='flex flex-col '>
                <div className=' my-4'>
                  <h5 className=' text-center text-xl text-amber-600 font-bold'>
                    资金来源安全可靠，保永久司法
                  </h5>
                </div>
                <div className=' px-4 sm:h-32 h-full '>
                  <p>
                    <span className=' font-bold'>下发方式：</span>
                    <br />
                    1.备付金（第三方网关户口下发）安全高效，回调速度1-2分钟。
                    2.支付宝转卡，资金安全可靠。 3.卡转卡通道，量大价优，24小时不间断下发。
                  </p>{' '}
                </div>
                <Link href={getPlayLink()}>
                  <div className='my-4 flex justify-center'>
                    {' '}
                    <button
                      type='button'
                      className='font-bold bg-white  text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'
                    >
                      联络客服
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className='flex text-black flex-col sm:w-1/3 w-full sm:mb-1 mb-[25px]'>
              <div className='ml-0 mr-10 '>
                <Image
                  src='/assets/pic/api3.jpg'
                  alt='api4'
                  width={600}
                  height={600}
                  className='rounded-lg '
                />
              </div>
              <div className='flex flex-col '>
                <div className=' my-4'>
                  <h5 className=' text-center text-xl text-amber-600 font-bold'>
                    专属客服，竭诚服务
                  </h5>
                </div>
                <div className=' px-4 sm:h-32 h-full'>
                  <p>
                    <span className=' font-bold'>为您处理一切后顾之忧。</span>
                    我们的专属客户服务24小时全天候为您提供个性化支持，并解决您可能遇到的任何问题。
                  </p>{' '}
                </div>
                <Link href={getPlayLink()}>
                  <div className='my-2 flex justify-center'>
                    {' '}
                    <button
                      type='button'
                      className='font-bold bg-white  text-amber-600 outline-none border-2  py-[5px] px-[20px] rounded-full'
                    >
                      联络客服
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' bg-slate-50'>
        <div className=' container-full'>
          <div className=' py-16'>
            <div className='flex justify-center flex-col text-center'>
              <div className='my-10'>
                <h5 className=' font-bold text-2xl '>未来展望与定位</h5>
              </div>
              <div />
              <p>
                本集团立足于东南亚市场，致力于全球拓展，竭诚为广大客户提供卓越服务。我们汇聚全集团力量，解决客户问题，为他们打造舒适、安心的生活圈。我们的愿景是在未来为客户创造一个广泛认可的线上线下交流环境。
              </p>
              <br />
              <p>
                我们在东南亚地区拥有多元化的线下业务板块，涵盖金融、物业、酒店、度假村、赌场以及实体商业区等领域。我们期待与业界同仁交流互动，共同发展。
              </p>
            </div>
            <div className='flex justify-center items-center m-8'>
              <Image alt='box' src='/assets/pic/box-q.png' width={100} height={100} />
            </div>
            <div className=' text-center'>
              <h5 className=' font-bold text-2xl'>
                ✨铂金瀚金融集团✨承诺，我们将全心全意为每一位用户提供最卓越、诚挚的服务！
              </h5>
              <div className=' flex justify-center items-center my-4'>
                <hr className=' h-2 bg-amber-600 w-2/3 opacity-100 dark:opacity-50' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
