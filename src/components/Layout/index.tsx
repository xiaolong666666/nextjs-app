import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="shrink text-center bg-slate-200">header</header>
      <main className="grow">{children}</main>
      <footer className="shrink text-center bg-slate-200">footer</footer>
    </div>
  );
};

export default Layout;
