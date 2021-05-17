import { buyPastas } from '../../redux';
import { connect } from 'react-redux';


const PastasContainer = (props) => {
  return (
    <div className="PastasContainer">
      <h1>Number of pastas kg : { props.pastas }</h1>
      <button>Buy pastas</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pastas: state.pastas
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPastas: () => (dispatch(buyPastas()))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PastasContainer);