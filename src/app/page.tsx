import ThemeSwitch from "@/components/ThemeSwitch";
import { EMOJI_CONSTRUCTION } from "@/constants";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="mb-8 text-4xl font-bold">home</h1>
      <ThemeSwitch />
      <h3 className="mt-8 text-2xl font-bold">
        still cooking content {EMOJI_CONSTRUCTION}
      </h3>
    </main>
  );
};

export default Home;
