import React, { Component } from "react";

let homeimgurl = "./img/home.jpg";

export default class Homes extends Component {
    render() {
        return (
            <div className="article">
                <h1><b>View Finder of Daily Life</b></h1>
                <div class="imgblock">
                    <img alt="home" src={homeimgurl} style={{width:'100%',}}/>
                </div>
                <p>小說家與巫覡，或許在本質上是相同的。與你存在同一代的那些人，
                令你感同身受的那些痛苦，不得不轉換壓縮為符號，
                尋找盛裝容器──李維菁的痛苦，不只因為她對歪斜異常敏感，
                也有她長年對自身創作渴望的漠視。她形容多年來看著為數眾多的徐錦文，
                直直朝那藝術的光，因為受到吸引身不由己，卻可能因為害怕，或自卑或怯懦，
                止步在那光前。「很多有創作渴望的人來這圈子，他們會格外受苦。
                創作欲望比起其他欲望更難受。只有當自己是那樣的人時，才知道有多麼難受。」
                   </p>
            </div>
        );
    }
}
