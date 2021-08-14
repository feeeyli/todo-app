import React from 'react';
import NewTodo from "./infra/inputs/NewTodo";
import Header from "./infra/layout/Header";

const App = () => {
    return (
        <>
		<Header />
		<main>
			<NewTodo />
		</main>
	</>
    );
}

export default App