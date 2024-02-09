'use client';

import { useContext } from 'react';
import { TaxonomyContext, TaxonomyDispatchContext, TaxonomyKeys } from '@/components/Taxonomy/Context/TaxonomyProvider';

export type FilterSelectProps = {
  label: string;
  id: TaxonomyKeys;
  options: {
    id: number;
    name: string;
    value: string;
    dimension_value?: string;
  }[];
};

export const FilterSelect = ({label, id, options}: FilterSelectProps) => {
  const dispatch = useContext(TaxonomyDispatchContext);
  const store = useContext(TaxonomyContext);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_TAXONOMY', payload: { [e.target.id]: e.target.value } });
  };

  return (
    <label htmlFor={id}>
      {label}
      <select id={id} onChange={handleChange} value={store[id]}>
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
