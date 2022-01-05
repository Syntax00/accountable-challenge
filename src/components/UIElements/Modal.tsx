import { useState } from "react";

const Modal = ({
  Body,
  Triggerer,
  Header,
  Footer,
}: {
  Body: any;
  Triggerer: any;
  Header: any;
  Footer: any;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Triggerer open={() => setShowModal(true)} />

      {showModal ? (
        <>
          <div className="justify-center items-center px-7 md:px-0 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 md:p-7 py-4 md:py-6 border-b border-solid border-gray-50 rounded-t">
                  <Header modalHandler={setShowModal} />
                </div>

                <div className="relative p-5 md:p-7 py-4 md:py-6 flex-auto">
                  <Body modalHandler={setShowModal} />
                </div>

                <div className="flex items-center justify-end p-5 md:p-7 py-4 md:py-6 border-t border-solid border-gray-50 rounded-b">
                  <Footer modalHandler={setShowModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
