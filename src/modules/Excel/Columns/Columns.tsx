import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useKeyboard } from '@/common/hooks';
import { Container, Column, Cell, Resizer } from './style';
import { Params, Events } from './types';
import Model from './model';

const instance = new Model();

type Props = {
  params?: Params;
  events?: Events;
};

const Columns: FC<Props> = observer(({ params, events }) => {
  useEffect(() => {
    instance.mount(params, events);

    return () => instance.unmount();
  }, [params, events]);

  useEffect(() => {
    instance.update(params);
  }, [params]);

  useKeyboard(instance.keymap);

  useEffect(() => {
    const { col, row } = instance.selected || {};

    const selector = col && row && `[data-col="${col}"][data-row="${row}"]`;
    const element = selector && document.querySelector(selector) as HTMLElement;

    if (!element) return;

    element.focus();
  }, [instance.selected]);

  if (!instance.mounted) return null;
  if (!instance.initialized) return 'Initializing...';

  return (
    <Container
      disabled={!!instance.resize}
      onMouseMove={instance.onMouseMove}
      onMouseUp={instance.onMouseUp}
      onMouseLeave={instance.onMouseLeave}
      onMouseDown={instance.onMouseDown}
      onBlur={instance.onChangeEvent}
    >
      {instance.columns.map((rows, colId) => (
        <Column key={colId} width={instance.width(colId)}>
          {rows.map((_, rowId) => {
            const cell = instance.getCell(colId, rowId);

            return (
              <Cell
                key={cell.id}
                data-col={colId}
                data-row={rowId}
                data-resize={cell.resizeType}
                height={cell.height}
                contentEditable={cell.isEditable}
                suppressContentEditableWarning
                tabIndex={cell.tabIndex}
              >
                {cell.value}
              </Cell>
            );
          })}
        </Column>
      ))}

      {instance.resize && (
        <Resizer
          style={instance.resize.style}
          data-resize={instance.resize.type}
        />
      )}
    </Container>
  );
});

export default Columns;
