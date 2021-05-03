import "./Home.css";
import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { getPet } from "../lib/api";

export async function fetchPets() {
  let response = await getPet();
console.log(response.data)
return response.data;
 
}
fetchPets(); 
function Home(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Hi");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);

  function onSignUp(event) {
    event.preventDefault();
    const newUser = {
      FirstName: setEmail(),
      LastName: lastName,
      Email: email,
      Cell: cell,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };

    setUser(newUser);
    console.log(user);
  }

  function onLogin(event) {
    event.preventDefault();

    const findUser = {
      Email: email,
      Password: password,
    };

    getUser(findUser);
    onAddUser(findUser);
    console.log(JSON.stringify(findUser));
  }

  function onAddUser(event) {
    const newUser = user;
    console.log(newUser);
  }


  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");

 
  async function sendUser(frmData) {
    console.log(frmData);

    const response = await axios.post("http://localhost:5000/api/user/login", {
      Email: email,
      Password: password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response);
    }
    console.log(response.data);
  // history.push("/");
    const reload = window.location.reload();
  }



  async function fetchPets() {

    let response = await fetch("http://localhost:5000/api/pets", {});

    console.log(response.data);
  }

  fetchPets();



  return (
    <div id='Home' className="Home">
      <NavBar />
      <h2 style={{ color: "white" }}>Welcome to MyPet, come here often?</h2>
      {/* <img
        src={pupPic2}
        alt="Pup"
        style={{ height: "450px", borderRadius: "25px" }}
      ></img> */}
    
         </div>
  );
}
export default Home;
