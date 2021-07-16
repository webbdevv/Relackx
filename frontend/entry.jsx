import React from 'react'
import ReactDOM  from 'react-dom'

import Root from './components/root'
import configureStore from './store/store'
import ActionCable from 'actioncable'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    const sockets = {} 
    // sockets.cable = ActionCable.createConsumer('wss://relackx.herokuapp.com/cable')
    if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
    ReactDOM.render(<Root store={store} />, document.getElementById('root'))
    window.store = store
})