import React, { useEffect, useState } from "react";
import CardM from "./utility/card_main";

const OverView = (props) => {
  const data = props.data;


  return (
      <div className="flex flex-wrap items-center justify-around max-w-7xl mt-6 sm:w-full">
        {data.map((data) => (
          <CardM data={data.attributes} key={data.id} />
        ))}
      </div>
  );
};

export default OverView;
