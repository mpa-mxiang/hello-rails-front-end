import axios from 'axios';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/random_greeting');
    dispatch({ type: 'SET_GREETING', payload: response.data.greeting });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};