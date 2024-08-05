import React from "react";
import star from "../star.png";
export const Review = () => {
  return (
    <>
      <div class="flex flex-col gap-3 border-b-2 text-white">
        <div class="flex flex-col gap-4 p-4">
          <div class="flex justify justify-between">
            <div class="flex gap-2">
              <div class="w-7 h-7 text-center rounded-full bg-red-500">J</div>
              <span>Jess Hopkins</span>
            </div>
            <div class="flex p-1 gap-1 text-orange-300">
              <img src={star} style={{ width: "17px" }} />
              <img src={star} style={{ width: "17px" }} />
              <img src={star} style={{ width: "17px" }} />
              <img src={star} style={{ width: "17px" }} />
              <img src={star} style={{ width: "17px" }} />
            </div>
          </div>

          <div>
            Gorgeous design! Even more responsive than the previous version. A
            pleasure to use!
          </div>

          <div class="flex justify-between">
            <span>Feb 13, 2021</span>
            <button class="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60"></button>
          </div>
        </div>
      </div>
    </>
  );
};
