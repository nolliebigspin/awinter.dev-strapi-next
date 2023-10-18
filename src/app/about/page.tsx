import Header from "@/components/Header";
import { EMOJI_MYSELF, lorem, loremLong } from "@/constants";

const About = () => {
  return (
    <>
      <Header title={`about ${EMOJI_MYSELF}`} />
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
    </>
  );
};

export default About;
