'use client';

export type FilterSelectProps = {
  label: string;
  id: string;
  options?: {
    id: number;
    name: string;
    value: string;
    dimension_value?: string;
  }[];
};

export const FilterSelect = ({label, id, options}: FilterSelectProps) => {

  const tmpOptions = [{id: 1, name: 'Option 1', value: 'option1'}, {id: 2, name: 'Option 2', value: 'option2'}];

  return (
    <label htmlFor={id}>
      {label}
      <select id={id} onChange={(e) => { console.log('Change me', e.target.id); }}>
        {tmpOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};
export default FilterSelect;