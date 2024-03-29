"use client";
import React from "react";
import Image from "next/image";

export default function BookDescription() {
  return (
    <div className="flex flex-row gap-10 items-center">
      <Image
        src="/images/book.png"
        alt="book-image"
        className="rounded-lg w-[290px] h-[470px]"
        width={290}
        height={470}
      />
      <div className="flex flex-col gap-3">
        <p className="text-h1 text-primary-black font-h1">Roman</p>
        <p className="text-h4 text-primary-black font-link">Olivia Olsan</p>
        <p className="text-h4 font-h4 text-black">Brief Summary</p>
        <p className="text-p text-black text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum ante eget libero facilisis, vel mattis nunc convallis.
          Maecenas eget sagittis ligula. Proin malesuada sapien vitae justo
          tincidunt, at pulvinar arcu cursus. Nullam sodales tortor ac justo
          vestibulum, at ultricies nunc sagittis. Sed consectetur diam id purus
          consectetur, nec sodales tortor suscipit.
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            {Array.from({ length: 5 }).map((_, index: number) => (
              <Image
                src="/icons/rating-icon.svg"
                width={15}
                height={15}
                key={index}
                alt="rating icon"
              />
            ))}
            <p className="text-primary-black text-p capitalize">
              4.5(1245 Ratings)
            </p>
          </div>
          <p className="text-p text-primary-black font-link">Rs. 200</p>
        </div>
      </div>
    </div>
  );
}
