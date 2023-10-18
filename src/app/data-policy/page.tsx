import Header from "@/components/Header";
import { EMOJI_PRIVACY_POLICY, lorem, loremLong } from "@/constants";

const DataPolicy = () => {
  return (
    <>
      <Header title={`data policy ${EMOJI_PRIVACY_POLICY}`} />
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
      <h3 className="text-xl font-bold">end.</h3>
    </>
  );
};

export default DataPolicy;
