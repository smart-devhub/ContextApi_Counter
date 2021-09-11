import 'fomantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import CounterView from './components/CounterView';

import CounterContextProvider from './Context/context';



function App() {
  return (
    <CounterContextProvider>
    <Container className="App">
      <h2>Context Api by Romeo </h2>
    
     <CounterView />
    </Container>
    </CounterContextProvider>
  );
}

export default App;
