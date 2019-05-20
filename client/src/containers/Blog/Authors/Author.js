import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Author extends Component {
    render() {
        const authorNames = ["GB","Jocelyn"];
        const lists = authorNames.map((i, name) => (
            <li key={name}>
                <NavLink style={{ textDecoration: 'none', color: 'grey' }} to={"/authors/" + i}>Author - {i}</NavLink>
            </li>
        ));
        return (
            <div className="article">
                <h1>Click to view profiles</h1>
                {lists}
            </div>
        );
    }
}
