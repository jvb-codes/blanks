import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col gap-4 m-4 w-screen justify-center items-center">
      {children}
    </section>
  );
};

export default Container;
