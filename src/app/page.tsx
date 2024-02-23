import Image from "next/image";
import localFont from "next/font/local";
import PopularVote from "./components/popular-vote";

export const ExposeRegular = localFont({
  src: "../../public/fonts/Expose-Regular.otf",
});
export const Persona5Font = localFont({
  src: "../../public/fonts/Persona5MenuFontPrototype-Regular.ttf",
});
export const Rodfellows = localFont({
  src: "../../public/fonts/Rodfellows-wacky.ttf",
});

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        src="/images/tyh.png"
        alt="Phantom Thieves Logo"
        width={600}
        height={600}
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginTop: "-150px" }}
      />
      <PopularVote
        title="Do you believe in Phantom Thieves?"
        percentage={getRandomNumber()}
      />
      <footer>
        <Image
          className="mt-24"
          src="/images/Phantom-Thieves-of-Hearts-Logo-PNG1.png"
          alt="Phantom Thieves Logo"
          width={500}
          height={500}
        />
      </footer>
    </main>
  );
}
