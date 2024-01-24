import type { SelectHTMLAttributes } from 'react';

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  opts: {
    key: string,
    value: number | string,
    name?: string
  }[];
};

const SelectInput = ({opts, label, ...props}: SelectInputProps) => {
  return (
    <label>
      <strong>{label}</strong>
      <select {...props}>
        {opts.map(({key, value, name}) => {
          return (
            <option key={key} value={value}>{name ?? key}</option>
          );
        })}
      </select>
    </label>
  );
};

export default SelectInput;