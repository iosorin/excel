import { action, computed, makeAutoObservable, observable } from 'mobx';

type Position = {
  col: number;
  row: number;
};

class Selection {
  @observable selected: Position | null = null;
  @observable cols = 0;
  @observable rows = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get keymap() {
    return {
      ArrowLeft: () => this.move(-1, 0),
      ArrowRight: () => this.move(1, 0),
      ArrowUp: () => this.move(0, -1),
      ArrowDown: () => this.move(0, 1),
    };
  }

  @action
  select = (params: { col?: string | number; row?: string | number }) => {
    const { col, row } = params;

    if (!col || !row) return;

    if (col === '0' || row === '0') return;

    if (Number(col) > this.cols || Number(row) > this.rows) return;

    this.selected = { col: Number(col), row: Number(row) };
  };

  @action
  setSize = (cols: number, rows: number) => {
    this.cols = cols;
    this.rows = rows;

    // Сбрасываем выделение, если оно выходит за границы
    if (this.selected) {
      const { col, row } = this.selected;
      if (col > cols || row > rows) {
        this.selected = null;
      }
    }
  };

  @action
  private move = (deltaCol: number, deltaRow: number) => {
    if (!this.selected) return;

    const { col, row } = this.selected;

    const newCol = Math.max(1, Math.min(col + deltaCol, this.cols));
    const newRow = Math.max(1, Math.min(row + deltaRow, this.rows));

    this.select({ col: newCol, row: newRow });
  };
}

export default Selection;
