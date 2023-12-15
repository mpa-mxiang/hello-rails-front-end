// components/Greeting.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h2>Random Greeting</h2>
      {greeting === undefined ? (
        <p>Loading...</p>
      ) : (
        <p>{greeting || 'No greeting available.'}</p>
      )}
    </div>
  );
};

export default Greeting;
