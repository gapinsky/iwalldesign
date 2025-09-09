import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";

type Props = {
  title: string;
  description: string;
};

const StatCard = ({ title, description }: Props) => {
  return (
    <div className="border-black/10 border-2 border-dashed p-2 flex flex-col items-center justify-start text-center rounded-sm xl:py-4">
      <span className="text-2xl font-bold">
        <ShinyWord>{title}</ShinyWord>
      </span>
      <span className="text-sm text-black/60 px-4">{description}</span>
    </div>
  );
};

export default StatCard;
