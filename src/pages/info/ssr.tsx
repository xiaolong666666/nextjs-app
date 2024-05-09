import React, { FC } from "react";
import { GetServerSideProps } from "next";

export type InfoProps = {
  name: string;
  sex: string;
  age: number;
};

type Props = {
  info: InfoProps;
};

const SSR: FC<Props> = ({ info }) => {
  return (
    <div>
      <h3>SSR</h3>
      <pre className="w-60 bg-orange-400">{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

// SSR 关键（Node 中间层执行）
export const getServerSideProps: GetServerSideProps = async (context) => {
  const resp = await fetch("http://localhost:3000/api/info");
  const info = await resp.json();

  return {
    props: { info },
  };
};

export default SSR;
