const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="group">
    <h1 className="text-2xl font-light">
      <span className="text-primary font-bold">#</span> {children}
    </h1>

    <div className="w-0 h-0.5 transition-width rounded-full mt-2 bg-primary group-hover:w-40" />
  </div>
);

export default SectionTitle;
