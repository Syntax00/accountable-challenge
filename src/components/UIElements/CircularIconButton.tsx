const CircularIconButton = ({
  icon,
  onClick = () => null,
  className,
}: {
  icon: string;
  onClick?: unaryFunction;
  className?: string;
}) => (
  <button type="button" onClick={onClick}>
    <i
      className={`w-10 h-10 rounded-full bg-white fa fa-${icon} flex justify-center items-center text-2xl ${className}`}
    />
  </button>
);

export default CircularIconButton;
