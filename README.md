# Blog Template  

## Project Title  
我的期中project是Blog Template，是一個可以發表文章並且修改／刪除文章的平台。  

## How to build
`npm install` in `backend`  
`npm install` in `client`  
`npm install` in main folder  
and `npm start` in main folder  
開啟網頁：http://localhost:3000 

## 使用/操作方式
右邊的欄位可以發表新文章（到左方欄位的下方），  
在文章底下按下`EDIT THE POST`可修改文章，  
按下`DELETE THE POST`可以刪除文章。  
另外上方的Navigation Bar是固定的連結，有做URL routing。  

## References

[1] Blog版型(css)  
https://www.w3schools.com/howto/howto_css_blog_layout.asp  

[2] node.js + react.js 基本架構建置  
https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274

[3] 各種 CSS formating參考  
https://codepen.io/manifestinteractive/pen/viaAK  
https://codepen.io/colloque/pen/bDgmx

## Contributions

[1] 大幅改動原先css的版型並以react.js的方式render出頁面(Client-side programs in React.js)  
[2] 利用node.js做server端並將一些固定頁面做routing(Server-side programs in Node.js)  
[3] 新增文章的內容會直接上傳到MongoDB，並且可以針對文章作修改或刪除(Database to store persistent data)  

## 心得

藉由這樣的project能夠整合一些前面學過的東西，雖然做出的東西還不是很厲害，  
但對前端到後端的連結已經有建立初步的概念。  
原本想要deploy到Heroku上面，但在routing部份的問題一直解決不了，  
可能之後再研究看看要怎麼使用。  


