import { useDispatch, useSelector } from 'react-redux'
import { set_number, addition } from './actions/actions-type'

const App = () => {
  const { message, number1, number2, result } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    dispatch(set_number({ value, name }));
    dispatch(addition())
  }

  return (
    <div className="App">
      <p>{message}</p>
      <input type="text" value={number1} name="number1" onChange={handleChange}></input>
      <input type="text" value={number2} name="number2" onChange={handleChange}></input>

      <p>{number1} + {number2} = {result}</p>

    </div>
  );
}

export default App;
