import { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex justify-center items-center initial-height height-on-print">
      {children}
    </main>
  );
};

export default Wrapper;
