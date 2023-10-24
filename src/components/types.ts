import { FieldValues, RegisterOptions } from 'react-hook-form';

export type Validation = {
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'
      >
    | undefined;
  errorMessage?: string;
  tooltip?: string;
};

export interface Category {
  label: string;
  items: string[];
}

export interface Option {
  label: string;
  value: string | number | null;
  icon?: string;
  emoji?: string;
  subtext?: string;
}

export type CommunicationType =
  | 'info'
  | 'error'
  | 'success'
  | 'warning'
  | 'custom';
