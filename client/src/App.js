// /client/App.js
import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Homes from "./containers/Blog/Posts/Homes";
import Posts from "./containers/Blog/Posts/Posts";
import PostRender from "./containers/Blog/Posts/PostRender";
import AuthorRender from "./containers/Blog/Authors/AuthorRender";
import Author from "./containers/Blog/Authors/Author";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


let headerUrl = './img/banner2.jpg'
let footerUrl = './img/footer.jpg'


class App extends Component {
  // initialize our state 
  state = {
    data: [],
    id: 0,
    message: null,
    title: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    updateToApply: null,
    objectToUpdate: null,
    modalShow: false,
    mod_ID: null,
    mod_TITLE: null,
    mod_TEXT: null
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleShow = (id, title, text) => {
    this.setState({ 
        modalShow: true,
        mod_ID: id,
        mod_TITLE: title,
        mod_TEXT: text
       
     });
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 500);
      this.setState({ intervalIsSet: interval });
    }
  };

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  };


  putDataToDB = (message, title) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      message: message,
      title: title
    });
  };

  deleteFromDB = ID => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === ID) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };


  updateDB = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      this.state.data.forEach(dat => {
        if (dat.id === idToUpdate) {
          objIdToUpdate = dat._id;
        }
      });
  
      axios.post("http://localhost:3001/api/updateData", {
        id: objIdToUpdate,
        update: { message: updateToApply }
      });
    };


  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };


  render() {
    const { data } = this.state;
    return (
        <BrowserRouter>
            <Modal show={this.state.modalShow} onHide={this.handleClose}>
                <div className="Modalrow">
                    <form className="DEL"> 
                      <Modal.Header closeButton>
                      <h2><Modal.Title>Edit The Post : {this.state.mod_TITLE} </Modal.Title></h2>
                      </Modal.Header>
                    </form>
                    <Modal.Body>
                      <form className="niceform">
                          <textarea className="js-mirror"
                              type="text"
                              onChange={e => this.setState({ 
                                  updateToApply: e.target.value, 
                                  idToUpdate: this.state.mod_ID })}
                              placeholder= {this.state.mod_TEXT} >
                           </textarea>
                          <form className="DEL" style={{width: '96%'}}>
                              <button onClick={() =>
                                  this.updateDB(this.state.idToUpdate, this.state.updateToApply)}>
                                  UPDATE
                              </button>
                          </form>
                      </form>
                    </Modal.Body>
                </div>
            </Modal>
            <div className="NavBar">
                <div className="navlink">
                    <NavLink style={{ textDecoration: 'none', color: "grey"}} to="/home">
                        <div className="effect-underline">Homepage</div>
                    </NavLink>
                </div>
                <div className="navlink">
                    <NavLink style={{ textDecoration: 'none', color: "grey"}} to="/posts">
                        <div className="effect-underline">Archieve</div>
                    </NavLink>
                </div>
                <div className="navlink">
                    <NavLink style={{ textDecoration: 'none', color: "grey"}} to="/authors">
                        <div className="effect-underline">All Authors</div>
                    </NavLink>
                </div>
            </div>
            <div className="header" style={{backgroundImage: 'url(' + headerUrl + ')'}}>
                <h3 style={{'paddingTop': '115px', 'fontFamily': 'Baloo Chettan', 'textShadow': '0.1em 0.1em #fff'}}>
                    <NavLink style={{ textDecoration: 'none', color: 'black'}} to="/home">
                        <p className="headertitle">Drift in Taiwan</p>
                    </NavLink>
                </h3>
            </div>
            <div className="row">
                <div className="leftcolumn">
                    <Switch>
                        <Route exact path="/posts" component={Posts} />
                        <Route path="/posts/:id?" component={PostRender} />
                        <Redirect from="/home" to="/" component={Homes} />
                        <Route exact path="/" component={Homes} />
                        <Route exact path="/authors" component={Author} />
                        <Route path="/authors/:name?" component={AuthorRender} />
                    </Switch>
                    {data.length <= 0
                      ? 
                      <div className="article">
                        <h1>There is no post yet :(</h1>
                      </div>
                        : data.map(dat => (
                            <div className={(dat.id%2) === 0 ? "article2": "article"} >
                                <h1 key={data.message}> {dat.title} </h1>
                                  <p> {dat.postimg} </p>
                                  <p> {dat.message} </p>
                                  <form className="DEL">
                                    <button onClick={() => this.deleteFromDB(dat.id)}>
                                        DELETE THIS POST
                                    </button><text>      </text>   
                                    <Button variant="primary"
                                        onClick={() => this.handleShow(dat.id, dat.title, dat.message)}>
                                        EDIT THE POST
                                    </Button>
                                  </form>
                            </div>
                    ))}
                    <br/> <br/>
                </div>
                <div className="rightcolumn">
                    <div className="sidebar">
                        <h1>About Me</h1>
                        <div className="imgblock" style={{width: '90%'}}>
                            <img alt="profile" src={"./img/profile.jpg"} style={{height:'280px', 'borderRadius': '200px',}}/>
                        </div>
                        <p style={{fontSize: '1.1em'}}>Yi-Yen Hsieh, based in Taipei currently.</p>
                    </div>
                    <div className="sidebar" style={{backgroundColor: '#dfe5ec'}}>
                        <div style={{ padding: "10px" }}>
                            <h2>Add a New Post</h2>
                            <form className="niceform">
                                <input type="text"
                                    onChange={e => this.setState({ title: e.target.value })}
                                    placeholder="Title"/>
                                <textarea className="js-mirror"
                                    onChange={e => this.setState({ message: e.target.value})}
                                    placeholder="Say something..."/>
                                <button onClick={() => this.putDataToDB(
                                    this.state.message,
                                    this.state.title)}>
                                  POST </button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar">
                        <h2>Contact Me</h2>
                        <p>E-Mail: D06943001@ntu.edu.tw</p>
                    </div>
                    <br/><br/>
                </div>
            </div>
            <div className="footer" style={{backgroundImage: 'url(' + footerUrl + ')'}}>
            </div>
        </ BrowserRouter>
    );
  }
}

export default App;