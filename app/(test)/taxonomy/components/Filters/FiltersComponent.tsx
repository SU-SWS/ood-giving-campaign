'use client';
import { SelectInput } from '@/components/Forms/Select';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

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
};

const FiltersComponent = ({
  themes, topics, schools, initiatives,
}: FiltersComponentProps) => {
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const changeCallback = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    const newParams = new URLSearchParams(params.toString());
    newParams.set(id, value);
    router.push(`${pathName}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <Suspense key={params.toString()}>
      <div>
        <SelectInput id='themes' opts={themes} label='Themes' onChange={changeCallback} selected={params.get('themes')} />
        <SelectInput id='topics' opts={topics} label='Topics' onChange={changeCallback} selected={params.get('topics')} />
        <SelectInput id='schools' opts={schools} label='Schools' onChange={changeCallback} selected={params.get('schools')} />
        <SelectInput id='initiatives' opts={initiatives} label='Initiatives' onChange={changeCallback} selected={params.get('initiatives')} />
      </div>
    </Suspense>
  );
};

export default FiltersComponent;