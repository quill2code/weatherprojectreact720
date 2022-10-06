import "./App.css";
import "./Grid.css";

import Footer from "./Footer";
import Header from "./Header";
import WeatherToday from "./WeatherToday";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <WeatherToday />
        <Footer />
      </div>
    </div>
  );
}
