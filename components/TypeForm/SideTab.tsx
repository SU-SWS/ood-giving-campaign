'use client';
import { useState, useEffect, createRef } from 'react';
import { Sidetab } from '@typeform/embed-react';
import { type SidetabOptions } from '@typeform/embed/types';

export type SideTabProps = SidetabOptions & {
  id: string;
}

const SideTab = ({
  id, ...rest
}:SideTabProps) => {

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Sidetab noHeading keepSession id={id} {...rest} />;
};

export { SideTab };