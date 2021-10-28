// import logo from "./logo.svg";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// Css file is master file basic design
import "./landingPage/SpaceOptimiser.css";
import Footer from "./landingPage/Footer";
import Header from "./landingPage/Header";
// import Section1 from "./landingPage/Section1";
import Menu from "./landingPage/Menu";
import Androidapp from "./headerPage/Androidapp";
import Iosapps from "./headerPage/Iosapps";
import Websites from "./headerPage/Websites";
import About from "./footerPage/About";
import Contact from "./footerPage/Contact";
import Privacy from "./footerPage/Privacy";
import Termsofuse from "./footerPage/Termsofuse";
// import Home from "./landingPage/Home";
// import Category from "./landingPage/Category";
// import CategoryCollection from "./landingPage/CategoryCollection";
// import PU from "./dashboard/PU";
// import PUPortfolio from "./dashboard/PUPortfolio";
// import Platform from "./dashboard/Platform";
// import Profile from "./dashboard/Profile";
import Asp from "./tools/Asp";
import Tools from "./tools/Tools";
// import logo from "./socialImage/logo.svg";

// var _baseData;

function App() {
  // useEffect(() => {
  //   if (_baseData == null) {
  //     FBfirestore.collection("user")
  //       .doc("uid")
  //       .collection("private")
  //       .doc("likedID")
  //       .get()
  //       .then((ds) => {
  //         _baseData = ds.data();
  //         console.log(_baseData);
  //       });
  //   }
  // });

  const [Test, setTest] = useState(false);
  console.log(Test);
  console.log("----------------------");
  const isBLockVisible = () => {
    setTest(!Test);
    console.log("++++++++++++++++++++++++++++++++++++");
    console.log(Test);
    return Test;
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and Save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* For Header */}
      <Header menuController={() => isBLockVisible()} />
      <Menu value={Test} menuController={() => isBLockVisible()} />

      {/* For Body Section */}
      <div>
        <Switch>
          {/* HomePage */}
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/">
            <Tools />
          </Route>

          {/* Header Navigation */}
          <Route exact path="/en/androidapps">
            <Androidapp />
          </Route>
          <Route exact path="/en/iosapps">
            <Iosapps />
          </Route>
          <Route exact path="/en/websites">
            <Websites />
          </Route>
          <Route exact path="/en/tools">
            <Tools />
          </Route>
          {/* End Header Navigation */}

          {/* Public : User Public view */}
          {/* <Route exact path="/:id">
            <Section1 />
          </Route> */}
          {/* User Public view End */}

          {/* Public : Group of user by category */}
          {/* <Route exact path="/en/category/:id">
            <CategoryCollection />
          </Route> */}
          {/* Group of user by category */}

          {/* MainPage */}
          {/* <Route exact path="/en/category">
            <Category />
          </Route>
          <Route exact path="/en/platform">
            <Platform />
          </Route>
          <Route exact path="/en/profile">
            <Profile />
          </Route>
          <Route exact path="/en/profile/:id">
            <PU />
          </Route>
          <Route exact path="/en/profile/pu-portfolio/:id">
            <PUPortfolio />
          </Route> */}

          {/* Tools Section */}
          <Route exact path="/en/asp">
            <Asp />
          </Route>
          {/* End Tools Section */}

          {/* Footer Navigation*/}
          <Route exact path="/en/about">
            <About />
          </Route>
          <Route exact path="/en/contact">
            <Contact />
          </Route>
          <Route exact path="/en/privacy">
            <Privacy />
          </Route>
          <Route exact path="/en/termsofuse">
            <Termsofuse />
          </Route>
          {/* Footer Navigation Over */}

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>

      {/* <div
      // style={{
      //   width: "100%",
      //   height: "calc(100%)",
      //   backgroundColor: "ligthblue",
      // }}
      >
        <img
          className="logo"
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "red",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "calc(10%)",
            borderRadius: "125px",
          }}
          alt="Icy India"
          // src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          src={logo}
        />
        <center>
          <p
            style={{
              marginTop: "50px",
              fontFamily: "Segoe UI",
              fontSize: "30px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            " COMING SOON "
          </p>
        </center>
      </div> */}

      {/* For Footer Section */}
      <Footer />
      {/* temp Footer */}
      {/* <div
        style={{
          display: "block",
          position: "fixed",
          bottom: "0px",
          width: "100%",
        }}
      >
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
