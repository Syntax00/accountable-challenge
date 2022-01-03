const themes: IObjectKeys = {
  danger: "bg-red-500 text-white hover:bg-red-400",
  white: "bg-white text-secondary",
};

const SimpleButton = ({
  children,
  onClick,
  theme,
}: {
  children: React.ReactNode;
  onClick: unaryFunction;
  theme?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-1 px-5 rounded-full ${theme ? themes[theme] : themes.white}`}
  >
    {children}
  </button>
);

export default SimpleButton;
