import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Parse from 'parse/react-native';
import { composeWithDevTools } from 'redux-devtools-extension';

//
//  Initial State
//

const initialState = {
  authenticated: 'false',
  favoriteAnimal: 'goat',
  userData: { }
};

//
//  Reducer
//

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITE_ANIMAL':
      return { ...state, favoriteAnimal: action.value };

    case 'SET_USER_DATA':
      return { ...state, userData: action.value };
    default:
      return state;
  }
};

//
//  Store
//

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

store.subscribe(() => console.log("current store: ", JSON.stringify(store.getState(), null, 4)))


export { store };

//
// Action Creators
//

const setFavoriteAnimal = favoriteAnimal => {
  return {
    type: 'SET_FAVORITE_ANIMAL',
    value: favoriteAnimal
  };
};

const setUserData = (userData) => {
  return {
    type: 'SET_USER_DATA',
    value: userData
  };
};

const watchUserData = () => {
  return (dispatch) => {
    var currentUser = Parse.User.currentAsync().then(user => {
      if (user) {
        var userData = user.attributes;
        console.log(typeof userData, 'watcing');
        dispatch(setUserData(userData));
        console.log('dispatched', dispatch(setUserData(userData)));
      }
    });
  };
};

export { setFavoriteAnimal, setUserData, watchUserData };
