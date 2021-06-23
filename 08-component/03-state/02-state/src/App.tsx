import { Component, ReactElement, SyntheticEvent } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './App.css';

type State = { count: number };

class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  reset = (): void => {
    this.setState({ count: 0 });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  increment = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState((state) => ({ count: state.count + 1 }));
  };

  decrement(): void {
    this.setState((state) => ({ count: state.count - 1 }));
  }

  render(): ReactElement {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui three buttons">
              <Button color="blue" onClick={() => this.decrement()}>
                -1
              </Button>
              <Button color="red" onClick={this.reset}>
                Reset
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
