import * as React from "react";
import MainPhoto from "./MainPhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from "../comps/Header";
import "../scss/main.scss";

// markup
const IndexPage = () => {
  return (
    <div>
          <Header/>
          <MainPhoto />
          
    </div>
  )
}

export default IndexPage
