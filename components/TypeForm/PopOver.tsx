'use client';
import { useState, useEffect } from 'react';
import { Popover } from '@typeform/embed-react';
import { type PopoverOptions } from '@typeform/embed';

export type PopOverProps = PopoverOptions & {
  id: string;
}

const PopOver = ({id, ...rest}:PopOverProps) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Popover noHeading keepSession id={id} {...rest} />;
};

export { PopOver };