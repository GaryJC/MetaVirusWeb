import "./App.css";
import LiquidDis from "./liqDis";
import TimeLine from "./timeline";
import TokenDis from "./tokenDis";
function App() {
  return (
    <div className="App">
      <div
        className="econBg"
        style={{
          backgroundImage:
            "url('/img/econBg_fixed.png'), url('/img/econBg_move.png')",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "inital, fixed",
          zIndex: -1,
        }}
      >
        <h1 className="animate__animated animate__heartBeat">ECONOMIC</h1>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret
          expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea
          eam.
        </p>
        {/* <img className="movingBg" src="/img/econBg_move.png" alt="move" /> */}
        <img className="rock" src="/img/rockBg.png" alt="rock" />
      </div>
      {/* <div
        style={{
          backgroundImage: "url('/img/econBg_move.png')",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundAttachment: "fixed",
          // zIndex: -1,
        }}
      ></div> */}
      {/* <div
        style={{
          backgroundImage: "url('/img/rockBg.png')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto",
          // height: "1000px",
          height: "250px",
          zIndex: 10,
          // position: "absolute",
        }}
      ></div> */}
      <h2 style={{ margin: "10rem 0 5rem 0", color: "white", fontSize: "2em" }}>
        Process
      </h2>
      <TimeLine />
      <div className="chart">
        <TokenDis />
        <LiquidDis />
      </div>
    </div>
  );
}

export default App;
