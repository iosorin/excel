import { action, makeObservable, observable } from 'mobx';

export type ResizeType = 'col' | 'row';

export type ResizeState = {
  id: string;
  type: ResizeType;
  startPos: number;
  startSize: number;
  style: React.CSSProperties;
};

export type ResizeOptions = {
  minSize: number;
};

export class Resizer {
  @observable state: ResizeState | null = null;

  private options: ResizeOptions;

  constructor(options: ResizeOptions) {
    makeObservable(this);
    this.options = options;
  }

  @action
  setMinSize(size: number) {
    this.options.minSize = size;
  }

  @action
  start(
    rect: DOMRect,
    params: {
      id: string;
      type: ResizeType;
      currentSize: number;
      minSize?: number;
    },
  ) {
    if (params.minSize) {
      this.setMinSize(params.minSize);
    }

    const isCol = params.type === 'col';
    const startPos = isCol ? rect.right : rect.bottom;

    this.state = {
      id: params.id,
      type: params.type,
      startPos: startPos,
      startSize: params.currentSize,
      style: {
        ...(isCol
          ? {
              height: '100%',
              left: startPos,
            }
          : {
              width: '100%',
              top: startPos,
            }),
        opacity: 1,
        transform: 'translate(0px)',
      },
    };
  }

  @action
  move(clientX: number, clientY: number) {
    if (!this.state) return;

    const isCol = this.state.type === 'col';
    const delta = (isCol ? clientX : clientY) - this.state.startPos;

    const minDelta = this.options.minSize - this.state.startSize;
    const limitedDelta = Math.max(minDelta, delta);

    this.state.style = {
      ...this.state.style,
      transform: `translate${isCol ? 'X' : 'Y'}(${limitedDelta}px)`,
    };
  }

  @action
  end(): { id: string; type: ResizeType; size: number } | null {
    if (!this.state) return null;

    const transform = this.state.style?.transform;
    if (!transform) return null;

    const match = transform.match(/translate[XY]\(([-\d.]+)px\)/);

    if (match) {
      const delta = parseFloat(match[1]);
      const size = Math.max(this.options.minSize, this.state.startSize + delta);
      const { id, type } = this.state;

      this.state = null;
      return { id, type, size };
    }

    this.state = null;
    return null;
  }

  @action
  reset() {
    this.state = null;
  }

  isResizeArea(event: React.MouseEvent<HTMLElement>, rect: DOMRect): boolean {
    return event.clientX > rect.right - 5 && event.clientX < rect.right + 5;
  }
}
