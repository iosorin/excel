import { action, makeObservable, observable, toJS } from 'mobx';
import Component from '@/common/component';
import { Params, Events, Field, Values } from './types';
import { FIELDS, DEFAULT_VALUES } from './constants';

class Controls extends Component<Params, Events> {
  @observable fields: Field[] = FIELDS;
  @observable values: Values = DEFAULT_VALUES;

  constructor() {
    super();

    makeObservable(this);
  }

  @action
  onChange = (values: Partial<Values>) => {
    Object.assign(this.values, values);

    this.events.onChange?.(toJS(this.values));
  };

  @action
  onReset = () => {
    this.onChange(DEFAULT_VALUES);
  };
}

export default Controls;
