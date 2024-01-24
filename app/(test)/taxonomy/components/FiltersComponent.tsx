'use client';
import { SelectInput } from '@/components/Forms/Select';
import { useRouter } from 'next/router';

export type FiltersComponentProps = {
  themes: {
    key: string;
    value: string;
    name?: string;
  }[];
  topics: {
    key: string;
    value: string;
    name?: string;
  }[];
  schools: {
    key: string;
    value: string;
    name?: string;
  }[];
  initiatives: {
    key: string;
    value: string;
    name?: string;
  }[];
  selected?: {
    themes?: string;
    topics?: string;
    schools?: string;
    initiatives?: string;
  };
};

const FiltersComponent = ({
  themes, topics, schools, initiatives, selected,
}: FiltersComponentProps) => {
  const router = useRouter();

  const changeCallback = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set(id, value);
    router.push(`${url.origin}${url.pathname}?${searchParams.toString()}`);
  };

  return (
    <div>
      <SelectInput id='themes' opts={themes} label='Themes' onChange={changeCallback} selected={selected?.themes} />
      <SelectInput id='topics' opts={topics} label='Topics' onChange={changeCallback} selected={selected?.topics} />
      <SelectInput id='schools' opts={schools} label='Schools' onChange={changeCallback} selected={selected?.schools} />
      <SelectInput id='initiatives' opts={initiatives} label='Initiatives' onChange={changeCallback} selected={selected?.initiatives} />
    </div>
  );
};

export default FiltersComponent;