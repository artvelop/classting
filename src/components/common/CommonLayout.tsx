import React from 'react';

type Props = {
  children: React.ReactChild;
};

export const CommonLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};
