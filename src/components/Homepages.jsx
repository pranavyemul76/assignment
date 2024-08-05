import React from "react";
import style from "./Homepage.module.css";
import { Sidebars } from "./Sidebar";
import { Total } from "./Total";
import { Chart } from "./Chart";
import { RecentOrders } from "./RecentOrders";
import menu from "../main-dish.png";
import gps from "../gps.png";
import burger from "../burger.png";
import { NetProfit } from "./NetProfit";
import { DropdownSection } from "./DropDownSection";
import { Review } from "./Review";
export const HomePage = () => {
  const Data = [
    { text: "Goals", icon: gps },
    { text: "popular dishes", icon: burger },
    { text: "menus", icon: menu },
  ];
  return (
    <>
      <div className={style.parent}>
        <div className={style.div1}>
          <Sidebars></Sidebars>
        </div>
        <div className={style.div2}>
          <div className="flex h-full flex-col justify-around">
            <div className="h-1/4">
              <Total></Total>
            </div>
            <div className="h-1/3 mb-3 bg-[#35383b] rounded">
              <Chart></Chart>
            </div>
            <div className="h-1/2 bg-[#35383b]">
              <RecentOrders></RecentOrders>
            </div>
          </div>
        </div>
        <div className={style.div3}>
          <div className=" flex flex-col h-full  justify-around">
            <div className="h-1/4">
              <NetProfit></NetProfit>
            </div>
            <div className="h-1/3 bg-[#35383b] flex flex-col mb-3 justify-around py-8">
              {Data.map((item) => {
                return (
                  <>
                    <DropdownSection {...item}></DropdownSection>
                  </>
                );
              })}
            </div>
            <div className="h-1/2 overflow-auto bg-[#35383b]">
              {[1, 2, 3].map((item) => {
                return <Review></Review>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
