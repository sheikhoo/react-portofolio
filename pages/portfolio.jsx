import Image from "next/image";
import React from "react";
import Csp from "../public/img/CSP.png";
export default function Portfolio() {
  return (
    <section>
      <h3 className="text-3xl py-1 font-yekan dark:text-white">پروژه های من</h3>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={Csp} width={100} height={100} className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
