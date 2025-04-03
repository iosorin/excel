import { action, makeObservable, observable } from 'mobx';
import Component from '@/common/component';
import Controls from './Controls';
import Columns from './Columns';
import { Components, Values } from './types';

class Excel extends Component {
  @observable values: Values = {} as Values;

  constructor() {
    super();

    makeObservable(this);
  }

  get components(): Components {
    return {
      controls: this.controls,
      columns: this.columns,
    };
  }

  get controls(): Components['controls'] {
    return {
      id: 'controls',
      component: Controls,
      params: {},
      events: {
        onChange: this.onChange,
      },
    };
  }

  get columns(): Components['columns'] {
    return {
      id: 'columns',
      component: Columns,
      params: { cols: this.values.cols || 10, rows: this.values.rows || 10 },
      events: {},
    };
  }

  @action
  onChange = (values: Values) => {
    this.values = values;
  };
}

export default Excel;
