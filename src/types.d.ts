type ListItemType = {
  title: string;
  description: string;
  id?: string;
  list?: ListType;
  displayName?: string;
  question?: string;
  __id__?: string;
  __pId__?: string | null;
  searchableText: string;
};

type ListStateType = {
  loading: boolean;
  error: string | null;
  list: ListItemType[];
};

type AppStateType = {
  listState: ListStateType;
};

type ListType = ListItemType[];

type Primitive = string | boolean | number | null | undefined;

type NonPrimitive = object;

type unaryFunction = (
  x: Primitive | NonPrimitive
) => Primitive | NonPrimitive | void;

type binaryFunction = (
  x: Primitive | NonPrimitive,
  y: Primitive | NonPrimitive
) => Primitive | NonPrimitive | void;

interface IObjectKeys {
  [key: string]: Primitive | NonPrimitive;
}

type BreadcrumbLinkType = {
  label: string;
  url: string;
  icon?: string;
};
