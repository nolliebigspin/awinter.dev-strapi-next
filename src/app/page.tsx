import ThemeSwitch from "@/components/ThemeSwitch";
import { EMOJI_CONSTRUCTION } from "@/constants";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-4">
      <ThemeSwitch />
      <h1 className="text-dark dark:text-light text-2xl font-bold">
        still cooking {EMOJI_CONSTRUCTION}
      </h1>
    </main>
  );
};

export default Home;
