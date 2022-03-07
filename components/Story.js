import React from "react";

function Story({ img, username }) {
  return (
    <div className="">
      <img src={img} className="rounded-full w-14 h-14 p-[1.5px] border-red-500 border-2 object-contain cursor-pointer transition transform hover:scale-110 duration-200 ease-out" />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
