import React from 'react';
import { PopOver } from '@/components/TypeForm/PopOver';

const TypeFormPage = () => {
  return (
    <div>
      <h1>Pop Over</h1>
      <PopOver
        id="gvU0dYvf"
        medium="demo-test"
        hidden={{ foo: 'foo value', bar: 'bar value' }}
        buttonProps={{ ariaLabel: 'Typeform Button', dataTestid: 'demo-button' }}
      />
    </div>
  );
};

export default TypeFormPage;
