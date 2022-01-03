const SectionTitle = ({
  children,
  ExtraControllers = () => null,
}: {
  children: React.ReactNode;
  ExtraControllers?: React.ReactNode;
}) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl">
        <span className="text-primary font-bold">#</span> {children}
      </h1>

      <div className="h-1 transition-width rounded-full mt-2 bg-gradient-to-r from-primary to-yellow-400 w-44" />
    </div>

    <div>{ExtraControllers}</div>
  </div>
);

export default SectionTitle;
