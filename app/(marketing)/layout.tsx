const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <main className="bg-slate-100">{children}</main>
    </div>
  );
};

export default MarketingLayout;
