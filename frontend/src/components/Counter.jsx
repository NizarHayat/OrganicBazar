import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counterReducer';

const Counter = () => {
    const dispatch =useDispatch()
    const {count} = useSelector((state)=>state.counter)
    const handleincrement=()=>{
        dispatch(increment())
    }
    const handledecrement = ()=>{
        dispatch(decrement())
    }
  return (
    <div className='container'>   <h2>Counter{count}</h2>
    <button onClick={handleincrement}>clic</button>
    <button onClick={handledecrement}>clic</button>
    </div>
  )
}

export default Counter

    
