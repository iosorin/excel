import Component from '@/common/component';
import { Events, Params, REFS } from './types';
import { action, computed, makeObservable, observable } from 'mobx';
import Values from './service/values';
import Resize from './service/resize';
import Selection from './service/selection';

class Columns extends Component<Params, Events> {
  @observable values: Values;
  @observable resizer: Resize;
  @observable selection: Selection;

  constructor() {
    super();

    this.values = new Values();
    this.resizer = new Resize();
    this.selection = new Selection();

    makeObservable(this);
  }

  @computed
  get cols(): number {
    return Math.min(this.params.cols, REFS.MAX_COLS);
  }

  @computed
  get rows(): number {
    return Math.min(this.params.rows, REFS.MAX_ROWS);
  }

  @computed
  get columns(): string[][] {
    return Array.from({ length: this.cols + 1 }, (_, col) =>
      Array.from({ length: this.rows + 1 }, (_, row) => Values.id(col, row)),
    );
  }

  @computed
  get selected() {
    return this.selection.selected;
  }

  @computed
  get keymap() {
    return this.selection.keymap;
  }

  @action
  getCell = (col: number, row: number) => {
    return {
      id: Values.id(col, row),
      value: this.values.value(col, row),
      height: this.resizer.height(row),
      resizeType: this.resizer.resizeType(col, row),
      isEditable: !!(col && row),
      tabIndex: col && row ? 0 : undefined,
    };
  };

  get width() {
    return this.resizer.width;
  }

  get resize() {
    return this.resizer.state;
  }

  get onMouseMove() {
    return this.resizer.onMouseMove;
  }

  get onMouseUp() {
    return this.resizer.onMouseUp;
  }

  get onMouseLeave() {
    return this.resizer.onMouseLeave;
  }

  get onChangeEvent() {
    return this.values.onChange;
  }

  @action
  onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const { col, row } = target.dataset;

    if (this.resizer.onMouseDown(event)) return;

    this.selection.select({ col, row });
  };

  update = action((params?: Params) => {
    if (!params) return;

    const cols = Math.min(params.cols, REFS.MAX_COLS);
    const rows = Math.min(params.rows, REFS.MAX_ROWS);

    this.params = { cols, rows };

    if (params.minWidth || params.minHeight) {
      this.resizer.setMinSizes(params.minWidth, params.minHeight);
    }

    this.selection.setSize?.(cols, rows);
  });
}

export default Columns;
