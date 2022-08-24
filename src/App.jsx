// import logo from "./logo.svg"
import "./App.css"
const profpic = require("./Galdohr Starag_single.png")

function App() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="navitem">
            <div className="item1">
              <a href="#home">HOME</a>
            </div>
            <div className="item2">
              <a href="#download CV" style={{ float: "right" }}>
                Download CV{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="opening">
        <h1 style={{ color: "var(--textMain)" }}>HELLO!</h1>
        <p>I'm a newbie Fullstack Developer</p>
      </div>
      <div className="mainContent">
        <div className="content1">
          <img src={profpic} />
          <div className="content1Add">
            <div className="content1Add1">
              <h2>AWARDS WON</h2>
              <h1 style={{ color: "var(--textMain)" }}>0</h1>
            </div>
            <div className="content1Add2">
              <h2>XP YEARS</h2>
              <h1 style={{ color: "var(--textMain)" }}>0+</h1>
            </div>
            <div className="content1Add3">
              <h2>CLIENTS</h2>
              <h1 style={{ color: "var(--textMain)" }}>0</h1>
            </div>
            <div className="content1Add4">
              <h2>PROJECTS</h2>
              <h1 style={{ color: "var(--textMain)" }}>1</h1>
            </div>
          </div>
          <div className="CVButton">
            <a href="#download CV">Download CV</a>
          </div>
        </div>
        <div className="content2">
          <h2>NAME</h2>
          <h1>Fidel H. Bukhara</h1>
          <br />
          <h2>BIRTHDAY</h2>
          <h1>08. 02. 19XX</h1>
          <br />
          <h2>ROLE</h2>
          <h1>Fullstack Developer</h1>
          <br />
          <h2>EMAIL</h2>
          <h1>fidelhxxxxx@gmail.com</h1>
          <br />
          <h2>PHONE</h2>
          <h1>(+62) 812-XXXX-XXXX</h1>
          <br />
          <h2>WEBSITE</h2>
          <h1>www.fidelh.com</h1>
          <br />
          <h2>LOCATION</h2>
          <h1>Batam, Indonesia</h1>
          <br />
          <h2>INTEREST</h2>
          <h1>Coding, TTRPG, D&amp;D, Games</h1>
        </div>
      </div>
    </>
  )
}

export default App
