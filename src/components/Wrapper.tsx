import { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex items-center justify-center border bg-[#0A0908] min-h-[100vh] height-on-print">
      {children}
    </main>
  );
};

export default Wrapper;
