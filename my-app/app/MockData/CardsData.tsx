import React from "react";
import Image from "next/image";
import man1 from "../assets/man1.svg";
import man2 from "../assets/man2.svg";
import man3 from "../assets/man3.svg";
import star from '../assets/stars.svg';

interface Tdata {
  desc: string;
  name: string;
  position: string;
  img: any;
  star :any;
}

const data: Tdata[] = [
  {
    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
    name: "Serhiy Hipskyy",
    position: "CEO Universal",
    img: man1,
    star
    
  },
  {
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    name: "Justus Menke",
    position: "CEO Eronaman",
    img: man2,
    star
  },
  {
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    name: "Britain Eriksen",
    position: "CEO Universal",
    img: man3,
    star
  },
];

const CardsData = () => {
  return (
    <div className="flex justify-center">
      <div className="sm:grid sm:grid-cols-1 sm:place-content-center sm:gap-8 md:grid md:grid-cols-1 md:place-content-center md:gap-8 lg:grid lg:grid-cols-3 place-items-center  w-9/12 flex justify-between  mt-16">
        {data.map(({star, img, desc, name, position }) => {
          return (
            <div className="flex flex-col justify-center items-center shadow-lg p-5 border w-80 h-80 text-stone-700 font-semibold ">
                <div className="mb-5"><Image src={star} alt="stars"></Image></div>
              <div className="h-32 text-stone-600">{desc}</div>
              <div className=" flex pt-10">
                <div className="mr-5"><Image src={img} alt="img"></Image></div>
                <div>
                  <div>{name}</div>
                  <div className="font-normal">{position}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsData;
