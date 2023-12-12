'use client';
import { PopupButton } from '@typeform/embed-react';
import { type PopupOptions } from '@typeform/embed/types';

export type PopUpProps = PopupOptions & {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const PopUp = ({
  id, children, className, ...rest
}:PopUpProps) => {
  return (
    <PopupButton buttonProps={{ type: 'button' }} noHeading keepSession id={id} className={className} {...rest}>
      {children}
    </PopupButton>
  );
};

export { PopUp };
