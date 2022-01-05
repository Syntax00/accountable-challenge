const FeedbackMessage = ({ message = "" }: { message: string }) => (
  <div className="bg-gray-50 py-24 px-5 text-center rounded-lg">
    <h1 className="text-gray-300 font-semibold text-xl md:text-2xl">
      {message}
    </h1>
  </div>
);

export default FeedbackMessage;
