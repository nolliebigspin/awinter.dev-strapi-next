import { EMOJI_CONSTRUCTION, lorem, loremLong, loremShort } from "@/constants";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 w-full md:w-3/4 space-y-4 text-justify md:mx-auto md:max-w-3/4">
      <h1 className="text-4xl font-bold mb-8">about {EMOJI_CONSTRUCTION}</h1>
      <em className="text-sm">{loremShort}</em>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>
        {lorem}
        {lorem}
      </p>
      <p>{loremLong}</p>

      <p>
        {loremLong}
        {loremLong}
      </p>
      <p>{loremLong}</p>
      <p>
        {loremLong}
        {loremLong}
        {loremLong}
      </p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>
        {lorem}
        {loremLong}
      </p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>
        {loremLong}
        {loremLong}
      </p>
      <p>{loremLong}</p>
      <p>
        {loremLong}
        {loremLong}
        {loremLong}
      </p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>
        {lorem}
        {loremLong}
      </p>
      <h3 className="text-xl font-bold">end.</h3>
    </main>
  );
};

export default About;
