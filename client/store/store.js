import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import { logger, createLogger } from 'redux-logger';
//middleware;
//


  let superStore = compose(
      applyMiddleware(createLogger())
      )(createStore)

  export default function configureStore(initialState = {inputText:"hello App",asyncObj:{}}){
    return superStore(reducers, initialState);

  }
// let logger = (store) => (next) => (actions) => {
//   console.log(actions);
//   next();
// }
// let middleware = applyMiddleware(logger);

// export default function configureStore(initialState){
//   return createStore(reducers, initialState, middleware);
// }
