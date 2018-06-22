import {ADD_ARTICLE} from '../constants/action-types';

/**
 * A reducer is just a Javascript function. 
 * A reducer takes two parameters: the current state and an action (more about actions soon).
 */

const initialState = {
    articles: []
};

// The third principle of Redux says that the state is immutable and cannot change in place.
// But how does a reducer know when to produce the next state?

// The second principle of Redux says the only way to change the state is by 
// sending a signal to the store. This signal is an action. "Dispatching an action" is the process of sending out a signal.


// Redux actions are nothing more than Javascript objects.
/* Example
{
  type: 'ADD_ARTICLE',
  payload: { name: 'React Redux Tutorial', id: 1 }
}
*/

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            // state.articles.push(action.payload);
            // above (line) reducer breaks the main Redux principle: immutability.
            // Making our reducer compliant is easy. 
            // Using Array.prototype.concat in place of Array.prototype.push is enough to keep the initial array immutable:
            // so instead of return state; use 
            // return {...state, articles: state.articles.concat(action.payload)}
            /*
                There are two key points for avoiding mutations in Redux:
                    Using concat(), slice(), and …spread for arrays
                    Using Object.assign() and …spread for objects
            */
           console.log(" IN Add Article (rootReducer) under ./reducer/index");
            return {
                ...state,
                articles : [...state.articles, action.payload]
            };
        default:
            console.log(" IN default (rootReducer) under ./reducer/index");
            return state;
    }
};

export default rootReducer;




