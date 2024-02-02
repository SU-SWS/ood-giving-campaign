'use client';

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

  return (
    <label htmlFor={id}>
      {label}
      <select id={id} onChange={(e) => { console.log('Change me', e.target.id); }}>
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