import { Field, Fields } from './types';

export const DEFAULT_VALUES = {
  [Fields.Name]: 'New Table',
  [Fields.Cols]: 10,
  [Fields.Rows]: 20,
};

export const FIELDS: Field[] = [
  {
    id: Fields.Name,
    label: 'Table Name',
    type: 'text',
    placeholder: 'Enter table name',
  },
  {
    id: Fields.Cols,
    label: 'Columns',
    type: 'number',
    min: 1,
    placeholder: 'Number of columns',
  },
  {
    id: Fields.Rows,
    label: 'Rows',
    type: 'number',
    min: 1,
    placeholder: 'Number of rows',
  },
];
