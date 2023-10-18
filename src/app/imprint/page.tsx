import Header from "@/components/Header";
import { EMOJI_IMPRINT, lorem, loremLong } from "@/constants";

const Imprint = () => {
  return (
    <>
      <Header title={`imprint ${EMOJI_IMPRINT}`} />
      <p>
        {lorem}
        {lorem}
      </p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>
        {loremLong}
        {loremLong}
      </p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>{loremLong}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
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

export default Imprint;
