'use client';

import { Sidetab } from '@typeform/embed-react';
import { type SidetabOptions } from '@typeform/embed';

export type SideTabProps = SidetabOptions & {
  id: string;
}

const SideTab = ({
  id, ...rest
}:SideTabProps) => {
  return <Sidetab noHeading keepSession id={id} {...rest} />;
};

export { SideTab };
