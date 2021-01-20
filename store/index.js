
import initialState from ".././initialState";
import { createStore, applyMiddleware } from 'redux'


function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


function todos(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEMP':
      return {temperature: action.temperature, scale: 'c'}
    default:
      return state
  }
}

const store = createStore(todos, ["Use Redux"], applyMiddleware(logger))


export default store;
