const CircularIconButton = ({
  icon,
  onClick = () => null,
}: {
  icon: string;
  onClick?: unaryFunction;
}) => (
  <button type="button" onClick={onClick}>
    <i
      className={`w-10 h-10 rounded-full absolute right-10 bg-white fa fa-angle-${icon} flex justify-center items-center text-2xl`}
    />
  </button>
);

export default CircularIconButton;
