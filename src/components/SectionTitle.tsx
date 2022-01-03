const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="group">
    <h1 className="text-3xl font-light">
      <span className="text-primary font-bold">#</span> {children}
    </h1>

    <div className="h-1 transition-width rounded-full mt-2 bg-gradient-to-r from-primary to-yellow-400 w-44" />
  </div>
);

export default SectionTitle;
