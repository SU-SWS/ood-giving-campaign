import { type SbBlokData } from '@storyblok/react/rsc';

type ComponentNotFoundProps = {
  component: {
    blok: SbBlokData;
  };
};

export const ComponentNotFound = ({ component: { blok } }: ComponentNotFoundProps) => (
  <div className="rs-p-4 bg-digital-red">
    <h2 className="text-white type-2">{blok.component} component is missing from the Momentum codebase.</h2>
    <p className="text-white type-1">You are currently using a <strong>Momentum</strong> preview URL.</p>
    <p className="text-white">Source blok UID: {blok._uid}</p>
  </div>
);
