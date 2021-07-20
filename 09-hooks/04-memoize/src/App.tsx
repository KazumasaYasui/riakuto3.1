import { FC } from 'react';
import Timer from './Timer';
import Timer2 from './Timer2';
import Timer3 from './Timer3';
import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    <Timer limit={69} />
    <Timer2 limit={69} />
    <Timer3 limit={69} />
  </div>
);

export default App;
