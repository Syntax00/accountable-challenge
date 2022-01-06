import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Breadcrumbs from "../components/Breadcrumbs";
import CircularIconButton from "../components/UIElements/CircularIconButton";
import FeedbackMessage from "../components/UIElements/FeedbackMessage";
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
      modalHandler(false);
      push("/");

      return toast.success("Item has been successfully deleted!");
    },
    [dispatch, push, id]
  );

  if (loading) return <DetailsSkeleton />;
  if (error)
    return (
      <FeedbackMessage message={error.message || "Something went wrong!"} />
    );

  const item: ListItemType | undefined = getItemById(list, id);

  return (
    <main>
      <div className="mb-5 md:mb-10 flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-auto items-start">
          <Breadcrumbs
            links={[
              { label: "Home", url: "/", icon: "home" },
              { label: item?.title || "", url: `/details/${id}` },
            ]}
          />
        </div>

        <Modal
          Triggerer={({ open }: { open: unaryFunction }) => (
            <div className="self-end mb-4">
              <CircularIconButton icon="trash" theme="danger" onClick={open} />
            </div>
          )}
          Body={() => (
            <p>
              Are you sure you want to delete this item
              <span className="italic"> ({item?.title})</span>?
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
        <h1 className="text-3xl mb-2 md:text-4xl">{item?.title}</h1>
        <p>{item?.description}</p>

        <div className="mt-10">
          <FeedbackMessage message="Item Details Goes Here" />
        </div>
      </div>
    </main>
  );
};

export default ItemDetails;
