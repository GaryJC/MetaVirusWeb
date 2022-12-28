import "./App.css";
import TimeLine from "./timeline";
function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: "url('/img/econBg.jfif')",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <TimeLine />
    </div>
  );
}

export default App;
