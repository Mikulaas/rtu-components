import { cva } from 'class-variance-authority';

export const communicationVariants = cva([], {
  variants: {
    error: {
      true: [
        'border',
        'border-error',
        'hover:border-error',
        'focus:border-error',
      ],
    },
    info: {
      true: ['border', 'border-info', 'hover:border-info', 'focus:border-info'],
    },
    warning: {
      true: [
        'border',
        'border-warning',
        'hover:border-warning',
        'focus:border-warning',
      ],
    },
    success: {
      true: [
        'border',
        'border-success',
        'hover:border-success',
        'focus:border-success',
      ],
    },
    custom: {
      true: [''],
    },
  },
});
