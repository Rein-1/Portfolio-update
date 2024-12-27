import React from "react";
import { hero } from "../_constants/Constants";

export default function Hero() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1240px] w-full h-[640px] border flex">
        <div className="flex flex-col border items-center max-w-[608px] w-full gap-3 pt-5 justify-center px-5">
          <h2 className="text-3xl">Hi! I'm Mark Renier Mercado</h2>
          <h1 className="text-5xl">Programmer</h1>
          <p>
            A passionate Web Developer/Software Engineer with an established
            knowledge of HTML, Tailwind, JavaScript, MySQL, Typescript in
            NextJS, and ReactJS in creating user-friendly websites.
            Enjoying creating from scratch and maintaining existing web
            applications. Can work in a small and agile team to blend my
            creativity and technical skills.
          </p>
          <button className="rounded-full bg-white text-black px-9 py-3">Contact Me</button>
        </div>
         <div>
          <img src={hero.img} alt={hero.alt} width={519} height={640} className="object-cover h-full w-full" />
         </div>
      </div>
    </div>
  );
}
