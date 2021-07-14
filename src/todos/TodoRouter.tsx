import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from "../Header";
import { TodoDetail } from "./TodoDetail";
import { TodoList } from "./TodoList";

export const TodoRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/todos/:id" component={TodoDetail} />
                <Route path="/" component={TodoList}/>
            </Switch>
        </Router>
    )
}