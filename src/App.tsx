import './App.css';
import { Counter } from './components/counter';

function App() {
  return (
    <div>
      <Counter initValue={ 100 } label='Räknare'/>
    </div>
  );
}

export default App;

