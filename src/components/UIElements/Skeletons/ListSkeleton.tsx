import { Fragment } from "react";

import ItemSkeleton from "./ItemSkeleton";
import SectionTitleSkeleton from "./SectionTitleSkeleton";

const ListSkeleton = () => (
  <Fragment>
    <SectionTitleSkeleton />

    <ItemSkeleton />
    <ItemSkeleton />
    <ItemSkeleton />
    <ItemSkeleton />
    <ItemSkeleton />
    <ItemSkeleton />
  </Fragment>
);

export default ListSkeleton;
