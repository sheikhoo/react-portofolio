import Image from "next/image";
import React from "react";
import Csp from "../../public/img/CSP.png";
import Fardup from "../../public/img/FARDUP.png";
import Iccima from "../../public/img/ICCIMA.png";

export default function Experience() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 font-yekan dark:text-white">
          سابقه کاری من
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 font-yekan dark:text-gray-300">
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
          <i className="text-sm">(Jul 2021 - Present)</i>
          <p className="py-2 font-yekan">
            توسعه و تولید اپلیکیشن های مورد نیار کارخانه، مدیریت سرورها و
            دیتابیس، هر روز یه چالش جدید و یک تکنولوژی جدید
          </p>
          <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">
            تکنولوژی مورد استفاده
          </h4>
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
          <i className="text-sm">(Jul 2020 - Aug 2021)</i>
          <p className="py-2 font-yekan">
            من به عنوان توسعه دهنده SpringBoot/React در شبکه توسعه اجتماعی پروژه
            بانک قرض الحسنه رسالت کار می کردم.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">
            تکنولوژی مورد استفاده
          </h4>
          <p className="text-gray-800 py-1">SpringBoot</p>
          <p className="text-gray-800 py-1">Java</p>
          <p className="text-gray-800 py-1">Microservice/gRPC</p>
          <p className="text-gray-800 py-1">Hibernate</p>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">...</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={Iccima} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2 font-yekan">
            اتاق بازرگانی صنایع و معادن ایران
          </h3>
          <h4>SpringBoot/React Developer</h4>
          <i className="text-sm">(Nov 2020 - Jul 2021)</i>
          <p className="py-2 font-yekan">
            مشارکت در پروژه رصد، پروژه جامع جلسات و اعضای اتاق بازرگانی ایران را
            در قالب کمیته، کمیسیون و کنوانسیون مدیریت می کند.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">
            تکنولوژی مورد استفاده
          </h4>
          <p className="text-gray-800 py-1">SpringBoot</p>
          <p className="text-gray-800 py-1">JHipster</p>
          <p className="text-gray-800 py-1">Java</p>
          <p className="text-gray-800 py-1">SQL Server</p>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">...</p>
        </div>
      </div>
    </section>
  );
}
