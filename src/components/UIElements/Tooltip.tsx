const Tooltip = ({ text }: { text: string }) =>
  text ? (
    <span className="absolute opacity-0 transition duration-200 right-1/4 bg-secondary text-white text-sm py-1 px-5 rounded-full group-hover:opacity-100">
      {text}
    </span>
  ) : null;

export default Tooltip;
