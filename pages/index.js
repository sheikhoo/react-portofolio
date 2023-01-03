import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import Me from "../public/img/me.jpg"
import Csp from "../public/img/CSP.png"
import Fardup from "../public/img/FARDUP.png"
import Iccima from "../public/img/ICCIMA.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>M.Sadegh Sheikh Zahedi</title>
        <meta name="description" content="M.Sadegh Sheikh Zahedi Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-yekan'>شیخم :)</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a 
                  href='#' 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mr-8 font-yekan'
                >
                  رزومه
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-yekan'>محمد صادق شیخ زاهدی</h2>
            <div className='relative mx-auto mt-5 w-36 h-36'> 
                <Image src={Me} className="rounded-full" />
            </div>
            <h3 className='text-2xl py-2'>Full-Stack Developer</h3>
            <p className='text-md py-5 leading-8 font-yekan text-gray-800'>
              من محمد صادق شیخ زاهدی، برنامه نویس فرانت و بک
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillYoutube />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 font-yekan'>سابقه کاری من</h3>
            <p className='text-md py-2 leading-8 text-gray-800 font-yekan'>
              من همیشه به دنبال کسب تجربه جدید و تکنولوژی ها ی متفاوت هستم :)
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={Csp} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 font-yekan">
                شرکت صنایع مس شهید باهنر
              </h3>
              <h4>Oracle Developer</h4>
              <i className='text-sm'>(Jul 2021 - Present)</i>
              <p className="py-2">
                توسعه و تولید اپلیکیشن های مورد نیار کارخانه، مدیریت سرورها و دیتابیس، هر روز یه چالش جدید و یک تکنولوژی جدید
              </p>
              <h4 className="py-4 text-teal-600">تکنولوژی مورد استفاده</h4>
              <p className="text-gray-800 py-1">Oracle Apex</p>
              <p className="text-gray-800 py-1">Oracle DataBase</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">MySql</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1">...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Fardup} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                شرکت دانش بنیان فرداپ
              </h3>
              <h4>SpringBoot/React Developer</h4>
              <i className='text-sm'>(Jul 2020 - Aug 2021)</i>
              <p className="py-2">
              من به عنوان توسعه دهنده SpringBoot/React در شبکه توسعه اجتماعی پروژه بانک قرض الحسنه رسالت کار می کردم.
              </p>
              <h4 className="py-4 text-teal-600">تکنولوژی مورد استفاده</h4>
              <p className="text-gray-800 py-1">SpringBoot</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Microservice/gRPC</p>
              <p className="text-gray-800 py-1">Hibernate</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Iccima} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">اتاق بازرگانی صنایع و معادن ایران</h3>
              <h4>SpringBoot/React Developer</h4>
              <i className='text-sm'>(Nov 2020 - Jul 2021)</i>
              <p className="py-2">
              مشارکت در پروژه رصد، پروژه جامع جلسات و اعضای اتاق بازرگانی ایران را در قالب کمیته، کمیسیون و کنوانسیون مدیریت می کند.
              </p>
              <h4 className="py-4 text-teal-600">تکنولوژی مورد استفاده</h4>
              <p className="text-gray-800 py-1">SpringBoot</p>
              <p className="text-gray-800 py-1">JHipster</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">...</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
