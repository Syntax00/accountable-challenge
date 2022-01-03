import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";
import CircularIconButton from "../components/UIElements/CircularIconButton";
import Modal from "../components/UIElements/Modal";
import SimpleButton from "../components/UIElements/SimpleButton";
import DetailsSkeleton from "../components/UIElements/Skeletons/DetailsSkeleton";

import actions from "../store/actions";
import { getItemById } from "../utilities/helpers";

const ItemDetails = () => {
  const push = useNavigate();
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const { loading, error, list }: ListStateType = useSelector(
    (state: AppStateType) => state.listState
  );

  const remove = useCallback(
    (modalHandler) => () => {
      dispatch(actions.removeItem(id));
      push("/");

      return modalHandler(false);
    },
    [dispatch, push, id]
  );

  if (loading) return <DetailsSkeleton />;

  const item: ListItemType | undefined = getItemById(list, id);

  return (
    <main>
      <div className="mb-10 flex justify-between items-center">
        <Breadcrumbs
          links={[
            { label: "Home", url: "/", icon: "home" },
            { label: item?.title || "", url: `/details/${id}` },
          ]}
        />

        <Modal
          Triggerer={({ open }: { open: unaryFunction }) => (
            <CircularIconButton icon="trash" theme="danger" onClick={open} />
          )}
          Body={() => (
            <p>
              Are you sure you want to delete this item{" "}
              <span className="italic">({item?.title})</span>?
            </p>
          )}
          Footer={({ modalHandler }: { modalHandler: unaryFunction }) => (
            <div>
              <SimpleButton onClick={() => modalHandler(false)}>
                Close
              </SimpleButton>

              <SimpleButton theme="danger" onClick={remove(modalHandler)}>
                Delete
              </SimpleButton>
            </div>
          )}
          Header={() => <h2 className="text-xl font-bold">Delete Item</h2>}
        />
      </div>

      <div>
        <h1 className="text-4xl mb-2">{item?.title}</h1>
        <p>{item?.description}</p>
      </div>
    </main>
  );
};

export default ItemDetails;
