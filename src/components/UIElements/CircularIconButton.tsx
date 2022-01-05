const themes: IObjectKeys = {
  gray: "bg-gray-50 text-secondary hover:bg-gray-100",
  white: "bg-white text-secondary hover:bg-gray-50",
  danger:
    "bg-gray-50 text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition-colors",
};

const CircularIconButton = ({
  icon,
  onClick = () => null,
  theme,
}: {
  icon: string;
  onClick?: unaryFunction;
  theme?: string;
}) =>
  icon ? (
    <button type="button" onClick={onClick}>
      <i
        className={`w-10 h-10 rounded-full fa fa-${icon} flex justify-center items-center text-2xl ${
          theme ? themes[theme] : themes.white
        }`}
      />
    </button>
  ) : null;

export default CircularIconButton;
