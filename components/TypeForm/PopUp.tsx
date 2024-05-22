'use client';
import { useRef } from 'react';
import { PopupButton } from '@typeform/embed-react';
import { type PopupOptions } from '@typeform/embed';

export type PopUpProps = PopupOptions & {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const PopUp = ({
  id, children, className, ...rest
}:PopUpProps) => {

  const handleClose = () => {
    document.getElementById(id)?.focus();
  };

  return (
    <PopupButton
      onClose={handleClose}
      buttonProps={{ type: 'button', className: className }}
      noHeading
      keepSession
      id={id}
      {...rest}
    >
      {children}
    </PopupButton>
  );
};

export { PopUp };
