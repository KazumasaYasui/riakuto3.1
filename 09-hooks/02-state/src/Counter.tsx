import { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './Counter.css';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const otherIncrement = () => setCount(count + 1);
  const reset = () => setCount(0);
  const plusThreeDirectly = () => [0, 1, 2].forEach((_) => setCount(count + 1));
  const plusThreeWithFunction = () =>
    [0, 1, 2].forEach((_) => setCount((c) => c + 1));

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui three buttons">
          <Button color="red" onClick={reset}>
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
          <Button color="blue" onClick={otherIncrement}>
            +1(other)
          </Button>
        </div>
      </Card.Content>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="yellow" onClick={plusThreeDirectly}>
            +3(dummy)
          </Button>
          <Button color="pink" onClick={plusThreeWithFunction}>
            +3
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
