type ListItemType = {
  title: string;
  description: string;
  id?: string;
  list?: ListType;
  displayName?: string;
  question?: string;
  __id__?: string;
  __pId__?: string | null;
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
