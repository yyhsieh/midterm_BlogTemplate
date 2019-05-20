import React from "react";

export default ({ name }) => {
    return (
        <div className="article">
            <h1>Author - {name}</h1>
            <p>This is the {name}'s profile</p>
        </div>
    );
};
