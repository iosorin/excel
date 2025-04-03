export enum Fields {
  Name = 'name',
  Cols = 'cols',
  Rows = 'rows',
  // DefaultWidth = 'defaultWidth',
  // DefaultHeight = 'defaultHeight',
}

export type Values = {
  [Fields.Name]: string;
  [Fields.Cols]: number;
  [Fields.Rows]: number;
  // [Fields.DefaultWidth]: number;
  // [Fields.DefaultHeight]: number;
};

export type Field = {
  id: Fields;
  type: 'text' | 'number';
  label: string;
  min?: number;
  placeholder?: string;
};

export type Params = {};

export type Events = {
  onChange?: (values: Values) => void;
};
