import ThemeSwitch from "@/components/ThemeSwitch";
import { EMOJI_CONSTRUCTION } from "@/constants";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold mb-8">home</h1>
      <ThemeSwitch />
      <h3 className="text-2xl font-bold mt-8">
        still cooking content {EMOJI_CONSTRUCTION}
      </h3>
    </main>
  );
};

export default Home;
