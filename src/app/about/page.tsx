import { EMOJI_CONSTRUCTION, lorem, loremLong, loremShort } from "@/constants";

const About = () => {
  return (
    <main className="md:max-w-3/4 flex min-h-screen w-full flex-col items-center space-y-4 p-6 text-justify md:mx-auto md:w-3/4">
      <h1 className="mb-8 text-4xl font-bold">about {EMOJI_CONSTRUCTION}</h1>
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
