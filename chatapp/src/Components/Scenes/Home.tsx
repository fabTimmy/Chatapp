import Nav from "./Nav";
import About from "../Sections/About";
import Main from "../Sections/Main";
import Join from "../Sections/Join";
import Share from "../Sections/Share";
import Footer from "../Sections/Footer";

const Home = () => {
  return (
    <div id="home">
      <Nav />
      {/* main */}
      <Main />
      {/* section-1 */}
      <About />
      {/* section-2 */}
      <Join />
      {/* section-3 */}
      <Share />
      <Footer />
    </div>
  );
};

export default Home;
