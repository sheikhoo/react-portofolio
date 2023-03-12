import Image from 'next/image';
import React from 'react';
import Csp from '../../public/img/CSP.png';
export default function Portfolio() {
  return (
    <section>
      <h3 className="text-3xl py-1 font-yekan dark:text-white">پروژه های من</h3>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <div className="bg-red-200">
            <Image src={Csp} width={100} height={100} className="mx-auto" />
          </div>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={Csp} width={100} height={100} className="mx-auto" />
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={Csp} width={100} height={100} className="mx-auto" />
        </div>
      </div>
      <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
        <section class="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-40 ">
          <article
            class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
            style={{
              backgroundImage:
                ' url(https://github.com/cherikcoders/react-portofolio/blob/main/1.png?raw=true)',
            }}
          >
            <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
              <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Loneliness Within
              </h1>
              <div class="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
              <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                beatae!
              </p>
            </div>
          </article>
        </section>
      </section>
      <section class="container mx-auto p-10 md:p-20 transform duration-500">
        <article class="shadow-lg mx-auto relative max-w-md group cursor-pointer">
          <div class="overflow-hidden">
            <img
              class="w-full h-auto transform hover:scale-110 duration-200"
              src="https://github.com/cherikcoders/react-portofolio/blob/main/2.png?raw=true"
              alt=""
            />
          </div>
          <div class="p-7 my-auto pb-12 ">
            <h1 class="text-4xl font-semibold text-gray-800 mt-4">
              Tropicalia
            </h1>
            <p class="text-2xl text-gray-400 mt-4 leading-relaxed">
              Super creative and colorful illustrations by Matheus Lopes. Check
              out more of his amazing artworks in his portfolio.
            </p>
          </div>
          <div class="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest  group-hover:text-gray-600 bg-gray-50">
            Matheus Lopes
          </div>
        </article>
      </section>
    </section>
  );
}
