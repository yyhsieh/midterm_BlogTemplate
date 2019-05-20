import React from "react";

export default ({ id, date, title, content, photourl}) => {
    return (
        <div className="article">
            <h1>Post #{id} -- {title}</h1>
            <h3>Date: {date}</h3>
            <div class="imgblock">
                <img alt="pic" src={photourl} style={{height:'500px'}}/>
            </div>
            <p>{content}</p>
        </div>
    );
};
