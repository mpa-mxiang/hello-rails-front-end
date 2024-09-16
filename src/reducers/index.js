const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_GREETING':
      console.log('New greeting:', action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
