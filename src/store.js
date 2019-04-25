import {createStore,compose} from 'redux';
import rootReducer from './reducers';

export default (initialState)=>{
    const enhancers = compose(
        window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
      );
    return createStore(rootReducer,initialState,enhancers);
}