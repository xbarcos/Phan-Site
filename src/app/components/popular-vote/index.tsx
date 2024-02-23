import React from "react";
import localFont from "next/font/local";

const ExposeRegular = localFont({
  src: "../../../../public/fonts/Expose-Regular.otf",
});
const Persona5Font = localFont({
  src: "../../../../public/fonts/Persona5MenuFontPrototype-Regular.ttf",
});
const Rodfellows = localFont({
  src: "../../../../public/fonts/Rodfellows-wacky.ttf",
});

interface PopularVoteProps {
  title: string;
  percentage: number;
}

export const PopularVote: React.FC<PopularVoteProps> = ({
  title,
  percentage,
}) => {
  return (
    <div>
      <h2 className={[ExposeRegular.className, "text-5xl mb-5"].join(" ")}>
        {title}
      </h2>

      <div className="flex flex-row items-center gap-4 justify-center">
        <a
          className={[Rodfellows.className, "text-3xl  font-outline-2"].join(
            " "
          )}
        >
          YES
        </a>
        <a
          className={[Rodfellows.className, "text-8xl font-outline-4"].join(
            " "
          )}
        >
          {percentage}%
        </a>
      </div>

      <div
        className="border border-white border-8"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="mt-15 w-full h-6 border border-black border-4 border-solid relative">
          <div
            style={{ width: `${percentage}%` }}
            className="h-full bg-red-600"
          ></div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button
          className={[Persona5Font.className, "text-8xl text-white hover:text-black"].join(" ")}
        >
          Yes
        </button>
        <button
          className={[Persona5Font.className, "text-8xl text-white hover:text-black"].join(" ")}
        >
          No
        </button>
      </div>
    </div>
  );
};
export default PopularVote;
