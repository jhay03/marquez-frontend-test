import { ToastContainer } from "react-toastify";
import CalculatorArea from "./component/CalculatorArea";
import Footer from "./component/Footer";
import HeroChanges from "./component/HeroChanges";
import Navbar from "./component/Navbar";
import TopMoviesArea from "./component/TopMoviesArea";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="col-md-12">
        <HeroChanges />
        {/* <div className="straight-bar"></div> */}
        <hr />

        <TopMoviesArea />

        {/* <div className="straight-bar"></div> */}
        <hr />

        <CalculatorArea />
      </div>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
