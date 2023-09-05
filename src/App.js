import './App.css';
import CountryContainer from "./containers/CountryContainer";
import VisitedCountryContainer from "./containers/VisitedCountryContainer";


function App() {
  return (
    <div className="App">
        <div className="country">
            <CountryContainer/>
        </div>
    </div>
  );
}

export default App;
