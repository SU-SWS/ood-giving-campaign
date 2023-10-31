'use client';
import { PopupButton } from '@typeform/embed-react';
import { PopupOptions } from '@typeform/embed/types';
import { dcnb, type ClassValue } from 'cnbuilder';

type PopUpProps = PopupOptions & {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
}

const PopUp = ({
  id, children, className, ...rest
}:PopUpProps) => {
  return (
    <PopupButton id={id} className={dcnb(className)} {...rest}>
      {children}
    </PopupButton>
  );
};

export { PopUp };