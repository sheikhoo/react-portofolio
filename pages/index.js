import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from 'react-icons/ai';
import { useState } from 'react';
import AboutMe from '../components/home/AboutMe';
import Experience from '../components/home/Experience';
import FavouriteTec from '../components/home/FavouriteTec';
import Portfolio from '../components/home/Portfolio';
import Header from '../components/Header';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const links = (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <a href="https://twitter.com/sheikhoo_iran">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.linkedin.com/in/sheikhoo">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/sheikhoo">
        <AiFillGithub />
      </a>
      <a href="https://www.youtube.com/@cherikcoders">
        <AiFillYoutube />
      </a>
    </div>
  );
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>M.Sadegh Sheikh Zahedi</title>
        <meta name="description" content="M.Sadegh Sheikh Zahedi Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Header */}
          <Header />
          {/* AboutMe */}
          <AboutMe />
          {/* links */}
          {links}
        </section>
        <Portfolio />
        {/* experince */}
        <Experience />
        {/* FavouriteTec */}
        <FavouriteTec />
      </main>
    </div>
  );
}
