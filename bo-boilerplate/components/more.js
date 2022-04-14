import React from "react";

import Card from "./utility/card";

const More = (props) => {
  const data = props.data;

  return (
    <div>
      <div className="relative text-black text-6xl font-bold bg-transparent mt-6">
        MORE.
      </div>
      <div className="flex flex-wrap items-center justify-around sm:max-w-7xl sm:py-6">
        {data.map((data) => (
          <Card data={data.attributes} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default More;
