'use client';

import { Popover } from '@typeform/embed-react';
import { type PopoverOptions } from '@typeform/embed';

export type PopOverProps = PopoverOptions & {
  id: string;
}

const PopOver = ({id, ...rest}:PopOverProps) => {
  return <Popover noHeading keepSession id={id} {...rest} />;
};

export { PopOver };
