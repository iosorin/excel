export class Cell {
  id = '';
  col = 0;
  row = 0;

  static id(col: number, row: number): string {
    return `${row}:${col}`;
  }
}

export type Column = { id: string; label: string; cells: Cell[] };
export type Values = Map<string, string>;

export type Params = {
  cols: number;
  rows: number;
  minWidth?: number;
  minHeight?: number;
};

export type Events = { onChange?: (values: Values) => void };

export const REFS = { MAX_COLS: 26, MAX_ROWS: 100 } as const;
