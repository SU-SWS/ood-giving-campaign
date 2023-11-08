'use client';
import { PopupButton } from '@typeform/embed-react';
import { type PopupOptions } from '@typeform/embed/types';
import { cnb, type ClassValue } from 'cnbuilder';

export type PopUpProps = PopupOptions & {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
}

const PopUp = ({
  id, children, className, ...rest
}:PopUpProps) => {
  return (
    <PopupButton noHeading keepSession id={id} className={cnb(className)} {...rest}>
      {children}
    </PopupButton>
  );
};

export { PopUp };