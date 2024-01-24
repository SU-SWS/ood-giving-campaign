import type { SelectHTMLAttributes } from 'react';

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  selected?: string;
  opts: {
    key: string,
    value: number | string,
    name?: string
  }[];
};

const SelectInput = ({
opts, label, selected, ...props
}: SelectInputProps) => {
  return (
    <label>
      <strong>{label}</strong>
      <select {...props} defaultValue={selected}>
        <option value=''>- Choose an option -</option>
        {opts.map(({value, name}) => {
          return (
            <option key={value} value={value}>{name ?? value}</option>
          );
        })}
      </select>
    </label>
  );
};

export default SelectInput;