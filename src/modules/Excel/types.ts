import {
  Params as ControlsParams,
  Events as ControlsEvents,
  Values as ControlsValues,
} from './Controls';
import { Params as ColumnsParams, Events as ColumnsEvents } from './Columns';

export type Component<P, E> = {
  id: string;
  component: React.FunctionComponent;
  params: P;
  events: E;
};

export type Components = {
  controls: Component<ControlsParams, ControlsEvents>;
  columns: Component<ColumnsParams, ColumnsEvents>;
};

export type Values = ControlsValues;
