import { ReactNode, useCallback } from 'react';
import { useController } from 'react-hook-form';
import {
  Category,
  BaseSelect,
  Field,
  Option,
  Validation,
  useSelect,
  BaseSelectProps,
  FieldProps,
} from '@/components';
import { useFormError } from '@/utils';

type SelectProps = Omit<
  BaseSelectProps,
  'value' | 'onChange' | 'setQuery' | 'clear'
> &
  FieldProps & {
    name: string;
    isLoading?: boolean;
    options: Option[];
    categories?: Category[];
    fieldClassName?: string;
    containerClassName?: string;
    inputClassName?: string;
    tooltip?: string | null;
    initialQuery?: string;
    valueAs?: 'string' | 'number';
    validation?: Validation;
    defaultValue?: string[] | string | number | null;
    onChange?: (value: string) => void;
    async?: boolean;
    LoadingIcon?: ReactNode;
    ClearIcon?: ReactNode;
    DefaultIcon?: ReactNode;
  };

export const Select = ({
  name,
  isLoading,
  disabled,
  options,
  categories,
  placeholder = 'Select',
  fieldClassName,
  containerClassName,
  inputClassName,
  initialQuery,
  tooltip,
  valueAs = 'string',
  validation,
  defaultValue,
  label,
  onChange,
  async,
  ...rest
}: SelectProps) => {
  const rules = validation?.rules;
  const errorMessage = validation?.errorMessage;
  const error = useFormError(name, errorMessage);
  const { field } = useController({ name, rules, defaultValue });
  const { filteredOptions, setQuery, clear } = useSelect(
    name,
    initialQuery,
    options,
    categories,
    onChange,
    async,
  );

  const handleOnChange = useCallback(
    (value: string) => {
      if (valueAs === 'number') {
        field.onChange(parseInt(value, 10));
      } else {
        field.onChange(value);
      }
    },
    [field, valueAs],
  );

  return (
    <Field
      name={name}
      label={label}
      error={error}
      tooltip={tooltip}
      className={fieldClassName}
    >
      <BaseSelect
        ref={field.ref}
        name={name}
        error={error}
        options={filteredOptions}
        value={!field.value ? '' : String(field.value)}
        onChange={handleOnChange}
        setQuery={setQuery}
        clear={clear}
        {...rest}
      />
    </Field>
  );
};
