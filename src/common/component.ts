import { observable, action, toJS, IReactionDisposer, makeObservable } from 'mobx';

type Snapshot<Params, Events> = {
  mounted: boolean;
  initialized: boolean;
  params: Params;
  events: Events;
  error: unknown | null;
};

abstract class Component<Params = unknown, Events = unknown> {
  @observable params: Params = {} as Params;
  @observable events: Events = {} as Events;

  @observable mounted = false;
  @observable initialized = false;
  @observable error: unknown | null = null;

  protected _snapshot: Snapshot<Params, Events>;
  protected _reactions: IReactionDisposer[] = [];

  constructor() {
    this._snapshot = toJS(this);

    makeObservable(this);
  }

  reactions?(): IReactionDisposer[];

  apply = action((snapshot: Snapshot<Params, Events>): void => {
    Object.assign(this, toJS(snapshot));
  });

  mount = action((params?: Params, events?: Events): void => {
    if (this.mounted) return;

    if (events) this.events = events;

    this.update(params);

    this.mounted = true;

    if (this.reactions) this._reactions = this.reactions();

    this.init();
  });

  init = action(() => {
    this.initialized = true;
  });

  update = action((params?: Params): void => {
    if (params) this.params = params;
  });

  unmount = action(() => {
    this.apply(this._snapshot);

    this._reactions.forEach((dispose) => dispose());
    this._reactions = [];
  });
}

export default Component;
