import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai'
import {useState} from 'react'
import Image from 'next/image'
import Me from "../public/img/me.jpg"
import Csp from "../public/img/CSP.png"
import Fardup from "../public/img/FARDUP.png"
import Iccima from "../public/img/ICCIMA.png"
import spring from "../public/img/spring.png"
import java from "../public/img/java.png"
import oracle from "../public/img/oracle.png"
import mysql from "../public/img/mysql.png"
import react from "../public/img/react.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>M.Sadegh Sheikh Zahedi</title>
        <meta name="description" content="M.Sadegh Sheikh Zahedi Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-yekan dark:text-white'>شیخم :)</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a 
                  href='https://www.linkedin.com/in/sheikhoo/' 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mr-8 font-yekan dark:from-red-600 dark:to-orange-600'
                >
                  رزومه
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl md:text-6xl py-2 text-teal-600 font-yekan dark:text-red-600'>محمد صادق شیخ زاهدی</h2>
            <div className='relative mx-auto mt-5 w-36 h-36'> 
                <Image src={Me} className="rounded-full" />
            </div>
            <h3 className='text-2xl md:text-3xl py-2 dark:text-white'>Full-Stack Developer</h3>
            <p className='text-md py-5 leading-8 font-yekan text-gray-800 max-w-xl mx-auto dark:text-white'>
              من محمد صادق شیخ زاهدی، برنامه نویس فرانت و بک
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href='https://twitter.com/sheikhoo_iran'><AiFillTwitterCircle /></a>
            <a href='https://www.linkedin.com/in/sheikhoo'><AiFillLinkedin /></a>
            <a href='https://github.com/sheikhoo'><AiFillGithub /></a>
            <a href='https://www.youtube.com/@cherikcoders'><AiFillYoutube /></a>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 font-yekan dark:text-white'>سابقه کاری من</h3>
            <p className='text-md py-2 leading-8 text-gray-800 font-yekan dark:text-gray-300'>
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
              <p className="py-2 font-yekan">
                توسعه و تولید اپلیکیشن های مورد نیار کارخانه، مدیریت سرورها و دیتابیس، هر روز یه چالش جدید و یک تکنولوژی جدید
              </p>
              <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">تکنولوژی مورد استفاده</h4>
              <p className="text-gray-800 py-1">Oracle Apex</p>
              <p className="text-gray-800 py-1">Oracle DataBase</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">MySql</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1">...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Fardup} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 font-yekan">
                شرکت دانش بنیان فرداپ
              </h3>
              <h4>SpringBoot/React Developer</h4>
              <i className='text-sm'>(Jul 2020 - Aug 2021)</i>
              <p className="py-2 font-yekan">
              من به عنوان توسعه دهنده SpringBoot/React در شبکه توسعه اجتماعی پروژه بانک قرض الحسنه رسالت کار می کردم.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">تکنولوژی مورد استفاده</h4>
              <p className="text-gray-800 py-1">SpringBoot</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Microservice/gRPC</p>
              <p className="text-gray-800 py-1">Hibernate</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Iccima} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 font-yekan">اتاق بازرگانی صنایع و معادن ایران</h3>
              <h4>SpringBoot/React Developer</h4>
              <i className='text-sm'>(Nov 2020 - Jul 2021)</i>
              <p className="py-2 font-yekan">
              مشارکت در پروژه رصد، پروژه جامع جلسات و اعضای اتاق بازرگانی ایران را در قالب کمیته، کمیسیون و کنوانسیون مدیریت می کند.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">تکنولوژی مورد استفاده</h4>
              <p className="text-gray-800 py-1">SpringBoot</p>
              <p className="text-gray-800 py-1">JHipster</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">...</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-yekan">تکنولوژی های مورد علاقه</h3>
            
          </div>
          <div className="flex gap-10 py-10 flex-row">
            <div className="basis-1/6 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={spring}
              />
            </div>
            <div className="basis-1/6 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={java}
              />
            </div>
            <div className="basis-1/6 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={oracle}
              />
            </div>
            <div className="basis-1/6 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={mysql}
              />
            </div>
            <div className="basis-1/6 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={react}
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
