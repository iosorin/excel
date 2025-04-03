import { action, makeAutoObservable, observable } from 'mobx';

class Values {
  @observable data: Record<string, string> = {};

  constructor() {
    makeAutoObservable(this);
  }

  @action
  value = (col: number, row: number): string => {
    if (!col) return row ? String(row) : '';
    if (!row) return String.fromCharCode(64 + col);

    return this.data[Values.id(col, row)] || '';
  };

  @action
  setValue = (col: number, row: number, value: string) => {
    if (!col || !row) return;

    this.data[Values.id(col, row)] = value;
  };

  @action
  onChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    if (event.type !== 'blur') return;

    const { col, row } = event.target.dataset;

    const value = event.target.textContent || '';

    this.setValue(Number(col), Number(row), value);
  };

  static id(col: number, row: number): string {
    return `${col}:${row}`;
  }
}

export default Values;
