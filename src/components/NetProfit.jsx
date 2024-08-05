import React from "react";
import CircularProgressBar from "./CircularProgressBar";

export const NetProfit = () => {
  return (
    <div class=" dark:bg-gray-800 text-white flex justify-center items-center">
      <section class="grid gap-6 md:grid-cols-1 py-4 md:py-8 max-w-5xl mx-auto w-full  ">
        <div class=" text-white p-6 rounded-lg shadow-lg flex items-center bg-[#35383b] pb-10 justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">Net Profit</h2>
            <p className="text-4xl font-bold mb-2">$ 6759.25</p>
            <p className="text-green-500">▲ 3%</p>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgressBar value={40} size={85} strokeWidth={10} />
          </div>
        </div>
      </section>
    </div>
  );
};
