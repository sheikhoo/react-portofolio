import Image from "next/image";
import React from "react";
import Csp from "../public/img/CSP.png";
import Mresalat from "../public/img/mresalat.png";
import Mbazar from "../public/img/mbazar.png";
import Mhesam from "../public/img/mhesam.png";
import MbazarMini from "../public/img/mbazarMini.png";
import MhesamMini from "../public/img/mhesamMini.png";
import MresalatMini from "../public/img/mresalatMini.png";
export default function Portfolio() {
  return (
    <section>
      <h3 className="text-3xl py-1 font-yekan dark:text-white">پروژه های من</h3>
      <div className="grid grid-cols-3 gap-10">
        <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
          <section>
            <article
              class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${Mhesam.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  همیاری اجتماعی
                </h1>
                <div class="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  سامانه همیاری اجتماعی سامانه ای است برای متقاضیان عضویت در
                  نهاد مردمی رسالت که با احراز هویت غیرحضوری روند ثبت نام اعضا
                  را تسهیل بخشیده است.
                </p>
              </div>
            </article>
          </section>
        </section>
        <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
          <section class=" ">
            <article
              class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${Mbazar.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  ام بازار
                </h1>
                <div class="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  سامانه ای برای عرضه و تقاضا منصفانه و اعتمادساز برای اعضا و
                  هسته های کارآفرینی اجتماعی و زمینه سازی برای تامین کالا جهت
                  فعالیت های تولیدی و خدماتی هسته های کارآفرینی اجتماعی
                </p>
              </div>
            </article>
          </section>
        </section>
        <section class="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
          <section class=" ">
            <article
              class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${Mresalat.src})`,
                width: "100%",
                height: "100%",
              }}
            >
              <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  ام حسام
                </h1>
                <div class="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  سامانه ای است برای پیگیری و رصد و تسهیل ارتباطات و مراودات
                  مالی اعضا با یکدیگر.
                </p>
              </div>
            </article>
          </section>
        </section>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <section class="container mx-auto transform duration-500">
          <article class="shadow-lg mx-auto relative max-w-md group cursor-pointer">
            <div class="overflow-hidden">
              <Image
                src={MresalatMini}
                width={100}
                height={100}
                className="mx-auto w-full h-auto transform hover:scale-110 duration-200"
              />
            </div>
            <div class="p-7 my-auto pb-12 ">
              <h1 class="text-4xl font-semibold text-gray-800 mt-4">
                همیاری اجتماعی
              </h1>
              <p class="text-2xl text-gray-400 mt-4 leading-relaxed">
                سامانه همیاری اجتماعی سامانه ای است برای متقاضیان عضویت در نهاد
                مردمی رسالت که با احراز هویت غیرحضوری روند ثبت نام اعضا را تسهیل
                بخشیده است.
              </p>
            </div>
            <div class="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest  group-hover:text-gray-600 bg-gray-50">
              بیشتر
            </div>
          </article>
        </section>
        <section class="container mx-auto transform duration-500">
          <article class="shadow-lg mx-auto relative max-w-md group cursor-pointer">
            <div class="overflow-hidden">
              <Image
                src={MbazarMini}
                width={100}
                height={100}
                className="mx-auto w-full h-auto transform hover:scale-110 duration-200"
              />
            </div>
            <div class="p-7 my-auto pb-12 ">
              <h1 class="text-4xl font-semibold text-gray-800 mt-4">
                ام بازار
              </h1>
              <p class="text-2xl text-gray-400 mt-4 leading-relaxed">
                سامانه ای برای عرضه و تقاضا منصفانه و اعتمادساز برای اعضا و هسته
                های کارآفرینی اجتماعی و زمینه سازی برای تامین کالا جهت فعالیت
                های تولیدی و خدماتی هسته های کارآفرینی اجتماعی
              </p>
            </div>
            <div class="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest  group-hover:text-gray-600 bg-gray-50">
              بیشتر
            </div>
          </article>
        </section>
        <section class="container mx-auto transform duration-500">
          <article class="shadow-lg mx-auto relative max-w-md group cursor-pointer">
            <div class="overflow-hidden">
              <Image
                src={MhesamMini}
                width={100}
                height={100}
                className="mx-auto w-full h-auto transform hover:scale-110 duration-200"
              />
            </div>
            <div class="p-7 my-auto pb-12 ">
              <h1 class="text-4xl font-semibold text-gray-800 mt-4">ام حسام</h1>
              <p class="text-2xl text-gray-400 mt-4 leading-relaxed">
                سامانه ای است برای پیگیری و رصد و تسهیل ارتباطات و مراودات مالی
                اعضا با یکدیگر.
              </p>
            </div>
            <div class="border-t pt-8 pb-8 text-center text-base text-gray-400 uppercase tracking-widest  group-hover:text-gray-600 bg-gray-50">
              بیشتر
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
