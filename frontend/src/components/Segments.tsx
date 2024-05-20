import { PageSegmentsDynamicZone } from "@/lib/genTypes";

import Blocks from "./Blocks";

export type SegmentsProps = {
  segments: PageSegmentsDynamicZone[];
};
const Segments = ({ segments }: SegmentsProps) => {
  return (
    <>
      {segments.map((segment) => {
        switch (segment.__typename) {
          case "ComponentSegmentsAnchor":
            return <div id={segment.anchor} />;

          case "ComponentSegmentsBlocks":
            return <Blocks content={segment.block} />;
          default:
            break;
        }
      })}
    </>
  );
};

export default Segments;
