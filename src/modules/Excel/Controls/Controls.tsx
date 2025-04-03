import { ChangeEvent, FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Input, Button } from './style';
import { Params, Events, } from './types';
import Model from './model';

const instance = new Model();

type Props = Partial<{
  params: Params;
  events: Events;
}>;

const Controls: FC<Props> = ({ params, events }) => {
  useEffect(() => {
    instance.mount(params, events);

    return instance.unmount;
  }, []);

  useEffect(() => {
    instance.update(params);
  }, [params]);

  return (
    <Container>
      {instance.fields.map(field => (
        <Input
          key={field.id}
          {...field}
          value={instance.values[field.id]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            instance.onChange({ [field.id]: e.target.value })
          }
        />
      ))}

      <Button onClick={instance.onReset}>
        Reset
      </Button>
    </Container>
  );
};

export default observer(Controls); 