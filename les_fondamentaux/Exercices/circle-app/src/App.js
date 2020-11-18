import React from 'react';
import { reducer, initialState } from './reducers/circle'
import Button from './Styles/Button'
import Circle from './Styles/Circle'



function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>
        <Button onClick={() => dispatch({ type: 'ADD' })}>Add Circle</Button>
        <Button onClick={() => dispatch({ type: 'SHUFFLE' })}>Shuffle</Button>
        <Button onClick={() => dispatch({ type: 'STOP_ODD' })}>Stop Odd</Button>
        <Button onClick={() => dispatch({ type: 'START_ODD' })}>Start Odd</Button>
        <Button onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>

      </div>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {
          state.circles.map((c, i) =>
            <div style={{ width: 60, height: 60 }} key={i}>
              <Circle {...c} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
