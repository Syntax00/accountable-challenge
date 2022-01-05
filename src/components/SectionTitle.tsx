const SectionTitle = ({
  children,
  ExtraControllers = () => null,
}: {
  children: React.ReactNode;
  ExtraControllers?: React.ReactNode;
}) => (
  <div className="flex justify-between items-center pb-5 mb-5 border-b border-b-gray-100 flex-col md:flex-row">
    <div className="w-full md:w-7/12 mb-7 md:mb-0">
      <h1 className="text-2xl font-semibold md:text-3xl md:font-medium">
        <span className="text-primary font-bold">#</span> {children}
      </h1>

      <div className="h-1 transition-width rounded-full mt-2 bg-gradient-to-r from-primary to-yellow-400 w-44" />
    </div>

    <div className="w-full md:w-5/12">{ExtraControllers}</div>
  </div>
);

export default SectionTitle;
