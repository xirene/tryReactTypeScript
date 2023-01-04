import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom/client';
import stores from './stores';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={stores}>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router />
				<TodoForm />
				<TodoItem />
				<TodoList />
			</ThemeProvider>
		</React.StrictMode>
	</Provider>,
);
