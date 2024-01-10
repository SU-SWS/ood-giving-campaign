'use client';
import { useState, useEffect } from 'react';
import { Sidetab } from '@typeform/embed-react';
import { type SidetabOptions } from '@typeform/embed';

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