export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-5 space-y-6">{children}</div>;
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
  return <section className="space-y-4">{children}</section>;
};

export const PageSectionScroller = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden ">
      {children}
    </div>
  );
};
