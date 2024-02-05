'use client';

import { useContext } from 'react';
import { TaxonomyContext, TaxonomyDispatchContext } from '@/components/Taxonomy/Context/TaxonomyProvider';

export type FilterSelectProps = {
  label: string;
  id: string;
  options: {
    id: number;
    name: string;
    value: string;
    dimension_value?: string;
  }[];
};

export const FilterSelect = ({label, id, options}: FilterSelectProps) => {
  const store = useContext(TaxonomyContext);
  const dispatch = useContext(TaxonomyDispatchContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_TAXONOMY', payload: { [e.target.id]: e.target.value } });
  };

  console.log('STORE', store);

  return (
    <label htmlFor={id}>
      {label}
      <select id={id} onChange={handleChange}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};
export default FilterSelect;
