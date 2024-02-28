import "./App.css";
import Header from "./components/common/header/Header.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About.jsx";
import CourseHome from "./components/allcourses/CourseHome.jsx";
import BP from "./components/allcourses/course/Behandlungspflege/BP.jsx";
import BA from "./components/allcourses/course/Beratungsansatz/BA.jsx";
import GP from "./components/allcourses/course/Grundpflege/GP.jsx";
import VP from "./components/allcourses/course/Verhiderungspflege/VP.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Team from "./components/team/Team.jsx";
import karriere from "./components/karriere/karriere.jsx";
import PB from "./components/Pflegebedürftigkeit/PB.jsx";
import PH from "./components/Pflegehilfsmittel/pflegehilf.jsx";
import APL from "./components/ambulantePflegesachleistung/APL.jsx";
import PSG from "./components/PSG/PSG.jsx";
import Vollmacht from "./components/vollmacht/vollmacht.jsx";
import Impressum from "./components/Impressum/impressum.jsx";
import Betreung from "./components/betreungContact/betreung.jsx";
import Datenschutz from "./components/Datenschutz/datenschutz.jsx";
import ContactPage from "./components/ContactPage/ContactPage.jsx";
import Banner from "./components/common/Banner/Banner.jsx";
import Care from "./components/allcourses/course/Care/Care.jsx";

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={Team} />
          <Route path="/grundpflege" component={GP} />
          <Route exact path="/Vpflege" component={VP} />
          <Route exact path="/Care" component={Care} />
          <Route exact path="/BA" component={BA} />
          <Route exact path="/Behandlungspflege" component={BP} />
          <Route exact path="/karriere" component={karriere} />
          <Route exact path="/Pflegebe" component={PB} />
          <Route exact path="/Pflegehilf" component={PH} />
          <Route exact path="/Pflegesachleistung" component={APL} />
          <Route exact path="/Pflegestärkungsgesetze" component={PSG} />
          <Route exact path="/Vollmacht" component={Vollmacht} />
          <Route exact path="/Datenschutz" component={Datenschutz} />
          <Route exact path="/Impressum" component={Impressum} />
          <Route exact path="/Betreung" component={Betreung} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
