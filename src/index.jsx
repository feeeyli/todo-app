import React from "react";
import ReactDOM from "react-dom";
import NewTodo from "./infra/inputs/NewTodo";
import Header from "./infra/layout/Header";
import "./sass/base.scss";

ReactDOM.render(
	<>
		<Header />
		<main>
			<NewTodo />
		</main>
	</>,
	document.getElementById("root")
);
