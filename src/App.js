import { connect } from 'react-redux';
import Button from './Button';
import store from './store';

function App() {
  return (
    <div className='App'>
      <div>
        <p>{store.getState().count ?? 0}</p>
        <Button
          label='증가'
          type='ADD'
        />
        <Button
          label='감소'
          type='MINUS'
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
