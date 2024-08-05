import "./App.css";
import { HomePage } from "./components/Homepages";
import { NavbarComponent } from "./components/Navbars";

function App() {
  return (
    <>
      <header className="App-header px-8 border !border-dashed">
        <NavbarComponent></NavbarComponent>
      </header>
      <main>
        <HomePage></HomePage>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
