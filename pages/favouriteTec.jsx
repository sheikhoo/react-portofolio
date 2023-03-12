import Image from "next/image";
import React from "react";
import spring from "../public/img/spring.png";
import java from "../public/img/java.png";
import oracle from "../public/img/oracle.png";
import mysql from "../public/img/mysql.png";
import react from "../public/img/react.png";
export default function FavouriteTec() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white font-yekan">
          تکنولوژی های مورد علاقه
        </h3>
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
  );
}
