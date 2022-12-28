import "./App.css";
import LiquidDis from "./liqDis";
import TimeLine from "./timeline";
import TokenDis from "./tokenDis";
import TrackVisibility from "react-on-screen";
function App() {
  return (
    <div className="App">
      <div
        className="econBg"
        style={{
          backgroundImage: "url('./img/econBg_fixed_filled.png')",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
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
        <img className="movingBg" src="./img/econBg_move.png" alt="move" />
        <img className="rock" src="./img/rockBg.png" alt="rock" />
      </div>
      <h2 style={{ margin: "10rem 0 5rem 0", color: "white", fontSize: "2em" }}>
        Process
      </h2>
      <TimeLine />
      <div style={{ marginTop: "10rem" }}>
        <TrackVisibility once>
          {({ isVisible }) => isVisible && <TokenDis />}
        </TrackVisibility>
        <TrackVisibility once>
          {({ isVisible }) => isVisible && <LiquidDis />}
        </TrackVisibility>
      </div>
    </div>
  );
}

export default App;
