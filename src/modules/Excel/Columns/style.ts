import styled from 'styled-components';

const theme = {
  column: {
    background: '#ffffff',
    width: '120px',
    minWidth: '50px',
    border: '1px solid #e2e3e3',
  },
  row: {
    height: '30px',
    minHeight: '24px',
  },
  resizer: {
    size: '2px',
    color: '#2196f3',
    cursor: {
      col: 'col-resize',
      row: 'row-resize',
    },
    zIndex: 10,
  },
  cell: {
    height: '30px',
    padding: '0 6px',
    border: {
      regular: '0.5px solid #e2e3e3',
      focus: '1.5px solid #2196f3',
    },
  },
  num: {
    width: '40px',
    background: '#f8f9fa',
  },
};

export const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: scroll;

  ${(props) =>
    props.disabled &&
    `
    user-select: none !important;
    cursor: default !important;

    [data-resize]:after {
      display: none !important;
    }
  `}
`;

export const Column = styled.div<{ width?: number | string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: ${theme.column.minWidth};
  width: ${(props) => (props.width ? props.width + 'px' : theme.column.width)};
  background: ${theme.column.background};
  border: ${theme.column.border};
  border-left: none;
  height: 100%;
  line-height: ${theme.cell.height};
  flex-shrink: 0;
  user-select: none;

  &[data-col='0'] {
    width: ${theme.num.width};
    min-width: auto;
    user-select: none;
  }
`;

export const Cell = styled.div<{ resizable?: boolean; height?: number }>`
  position: relative;
  padding: ${theme.cell.padding};
  height: ${(props) => (props.height ? props.height + 'px' : theme.row.height)};
  min-height: ${theme.row.minHeight};
  outline: ${theme.cell.border.regular};
  overflow: hidden;
  white-space: nowrap;
  user-select: none;

  &:focus {
    outline: ${theme.cell.border.focus};
    z-index: 2;
    user-select: text;
  }

  &[contenteditable='false'] {
    min-width: ${theme.num.width};
    text-align: center;
    line-height: ${theme.cell.height};
    background-color: ${theme.num.background};
  }

  &[data-resize='col'] {
    cursor: ${theme.resizer.cursor.col};

    &:hover {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: ${theme.resizer.size};
        height: 100%;
        background: ${theme.resizer.color};
        z-index: ${theme.resizer.zIndex};
      }
    }
  }

  &[data-resize='row'] {
    cursor: ${theme.resizer.cursor.row};

    &:hover {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${theme.resizer.size};
        background: ${theme.resizer.color};
        z-index: ${theme.resizer.zIndex};
      }
    }
  }
`;

export const Resizer = styled.div.attrs<{ style?: React.CSSProperties }>((props) => ({
  style: props.style,
}))`
  position: absolute;
  background: ${theme.resizer.color};
  z-index: ${theme.resizer.zIndex};

  &[data-resize='col'] {
    top: 0;
    width: ${theme.resizer.size};
    height: 100%;
    cursor: ${theme.resizer.cursor.col};
  }

  &[data-resize='row'] {
    left: 0;
    width: 100%;
    height: ${theme.resizer.size};
    cursor: ${theme.resizer.cursor.row};
  }
`;
