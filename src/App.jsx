import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Info } from "./components/Info/Info";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Info />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
