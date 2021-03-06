import React from "react";
import App from "../App";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Petlist from "./Petlist";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getProduct, getBreed } from "../lib/api";
import { Row, Button } from "reactstrap";
import Axios from "axios";
import './MyPet.css'
import ShoppingList from './ShoppingList.jsx'
import AddProduct from './AddProduct'
let products = [];

function MyPet(props) {
  const [productData, setProductData] = useState([]);

  async function fetchProducts() {
    let response = await getProduct();
    setProductData(response.data);
  }




  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productData);

  const { _id, title, price, desc, image } = productData;
  return (
    
    <div id="bg" className='bg'>
    <div >
        <NavBar />
      </div>
      <div class="container" id="myPetContainer">
      <AddProduct></AddProduct>
      <div class='row' style={{width:'1600px'}}>
        {productData.map((product) => (
          <Petlist
            productTitle={product.Title}
            productPrice={product.Price}
            productDesc={product.Desc}
            key={product._id}
            productImage={product.Image}
          /> 
          ))}
      </div>
    </div>
    </div>
   
  );
  
}
export default MyPet;
