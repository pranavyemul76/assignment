import React from "react";

export const DropdownSection = ({ text, icon }) => {
  return (
    <>
      <div className="relative w-full ">
        <button className="w-full flex text-white px-4 py-2">
          <div className="flex w-full items-center justify-between mr-3">
            <div className="flex items-center justify-between mr-3">
              <div
                style={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              >
                <img src={icon} style={{ width: "28px" }} />
              </div>
              <div className="ml-4">{text}</div>
            </div>
            <div
              style={{
                borderRadius: "50%",
                backgroundColor: "orange",
                padding: "10px 16px",
                textAlign: "center",
              }}
            >
              &#8594;
            </div>
          </div>
        </button>
      </div>
    </>
  );
};
