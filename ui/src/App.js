import {Component} from 'react';
import  { Toolbar,
          MenuItem, 
          Select,
        } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import "./App.css";

const NavContainer = (props) =>{

  return(
    <div className="nav-container">
      {props.children}
    </div>
  );
}

const Item = (props) =>{
  return(
    <div className="item">
      {props.children}
    </div>
  );
}

const Container = (props) =>{
  return(
    <div className="container">
      {props.children}
    </div>
  );
}

export default class App extends Component{
  render()
  { 
    return(
      <div className="page">
        <Container>
          <NavContainer>
            <AppBar position="static">
              <Toolbar>

              </Toolbar>
            </AppBar>
          </NavContainer>
        </Container>
      </div>
    );

  }
};