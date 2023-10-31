'use client';
import { useState, useEffect, createRef } from 'react';
import { Sidetab } from '@typeform/embed-react';
import { type Sidetab as SidetabType, type SidetabOptions } from '@typeform/embed/types';

type SideTabProps = SidetabOptions & {
  id: string;
}

const SideTab = ({
  id, ...rest
}:SideTabProps) => {
  const sidetabRef = createRef<SidetabType>();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Sidetab id={id} {...rest} ref={sidetabRef} />
      <p>
        <button onClick={() => sidetabRef.current?.open()} className='button'>Click here</button> to open the sidetab programmatically via ref.
      </p>
    </>
  );
};

export { SideTab };