import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions-index';
import './App.css';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch);

const App = (props) => {
  console.log(props)
  return (
    <>
    <h1>Welcome to redux saga playground</h1>
    <div>
      <div className="section-pane" onClick={props.requestFetchLatest}>
        <button>Fetch Latest</button>
        <ul>
          {
            props.latest.data.map(d => <li>{d}</li>)
          }
        </ul>
      </div>
      <div className="section-pane"onClick={props.requestFetchEvery}>
        <button>Fetch Every</button>
        <ul>
          {
            props.every.data.map(d => <li>{d}</li>)
          }
        </ul>
      </div>
    </div>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
