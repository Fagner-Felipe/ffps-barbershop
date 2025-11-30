export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 md:w-5xl mx-auto">{children}</div>;
};

export const PageSectiontitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-xs font-semibold text-foreground uppercase">
      {children}
    </h2>
  );
};

export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4 md:w-5xl mx-auto">{children}</div>;
};

export const PageSectionScroller = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden md:w-5xl mx-auto">
      {children}
    </div>
  );
};
