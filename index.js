import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'

let store = createStore(todoApp)
let rootElement = document.querySelector('#root')

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	rootElement
)