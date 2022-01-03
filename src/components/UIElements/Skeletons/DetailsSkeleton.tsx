import { Fragment } from "react";

import ItemSkeleton from "./ItemSkeleton";
import SectionTitleSkeleton from "./SectionTitleSkeleton";

const DetailsSkeleton = () => (
  <Fragment>
    <SectionTitleSkeleton />
    <ItemSkeleton />
  </Fragment>
);

export default DetailsSkeleton;
