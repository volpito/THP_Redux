import { useDispatch, useSelector } from 'react-redux';
import { buyPastas } from '../../redux/index';
import { eatPastas } from '../../redux/index';


const PastasContainerWithHook = () => {
  
  const onBuy = () => {
    dispatch(buyPastas())
  }
  const onEat = () => {
    dispatch(eatPastas())
  }

  const pastas = useSelector(state => state.pastas);
  const dispatch = useDispatch();

  return (
    <div className="PastasContainer">
      <h1>Number of pastas kg : { pastas }</h1>
      <button onClick= {onBuy}>Buy pastas</button>
      <button onClick= {onEat}>Eat pastas</button>
    </div>
  );
};

export default PastasContainerWithHook;