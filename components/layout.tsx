import React from 'react';
import { Navbar } from './index';

export default function Layout({
  children
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
