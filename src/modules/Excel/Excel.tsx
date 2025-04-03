import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Model from './model';

const defaultInstance = new Model();

interface Props {
  instance: Model;
}

const Excel: FC<Props> = ({ instance = defaultInstance }) => {
  return (
    <div>
      {Object.values(instance.components).map((item) => (
        <item.component key={item.id} {...item} />
      ))}
    </div>
  );
};

export default observer(Excel);
