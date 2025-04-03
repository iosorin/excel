import { action, makeAutoObservable } from 'mobx';
import { Resizer } from '@/common/resizer';

class Resize {
  private resizer: Resizer;
  private widths: Record<string, number> = {};
  private heights: Record<string, number> = {};
  private defaultWidth: number = 120;
  private defaultHeight: number = 30;
  private minWidth: number = 50;
  private minHeight: number = 24;

  constructor() {
    this.resizer = new Resizer({ minSize: this.minWidth });

    makeAutoObservable(this);
  }

  @action
  setDefaults = (width: number, height: number) => {
    this.defaultWidth = width;
    this.defaultHeight = height;
  };

  @action
  setMinSizes = (width?: number, height?: number) => {
    if (width) {
      this.minWidth = width;
      this.resizer.setMinSize(width);
    }
    if (height) {
      this.minHeight = height;
    }
  };

  resizeType = (col: number, row: number) => {
    const isColResizer = col !== 0 && row === 0;
    const isRowResizer = col === 0 && row !== 0;
    return isColResizer ? 'col' : isRowResizer ? 'row' : undefined;
  };

  get state() {
    const state = this.resizer.state;
    if (!state) return null;
    return { type: state.type, style: state.style };
  }

  width = (col: number): number => {
    if (!col) return 40; // первая колонка с номерами
    return this.widths[col] || this.defaultWidth;
  };

  height = (row: number): number => {
    if (!row) return this.defaultHeight; // первая строка с буквами
    return this.heights[row] || this.defaultHeight;
  };

  @action
  onMouseDown = (event: React.MouseEvent<HTMLElement>): boolean => {
    const target = event.target as HTMLElement;
    const { col, row, resize: type } = target.dataset;

    if (!type || (!col && !row)) return false;

    const isCol = type === 'col';
    const isRow = type === 'row';

    if ((isCol && col === '0') || (isRow && row === '0')) return false;

    const id = isCol ? col : row;
    if (!id) return false;

    event.preventDefault();
    event.stopPropagation();

    const rect = target.getBoundingClientRect();
    const currentSize = isCol ? this.width(Number(col)) : this.height(Number(row));

    this.resizer.start(rect, {
      id,
      type: type as 'col' | 'row',
      currentSize,
      minSize: isCol ? this.minWidth : this.minHeight,
    });

    return true;
  };

  @action
  onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!this.state) return;
    this.resizer.move(event.clientX, event.clientY);
  };

  @action
  onMouseUp = () => {
    const result = this.resizer.end();
    if (!result) return;

    const { id, type, size } = result;
    const target = type === 'col' ? this.widths : this.heights;
    target[id] = size;
  };

  onMouseLeave = () => {
    this.resizer.reset();
  };
}

export default Resize;
