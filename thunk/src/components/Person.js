import React from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../actions';

const Person = (props) => {

  if (props.error) {
    return <h2>We got an error: {props.error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {props.person.name.first} {props.person.name.last}</h2>
        <img src={props.person.picture.large}/>
      </div>
      <button onClick={()=> props.getPerson()}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getPerson})(Person);