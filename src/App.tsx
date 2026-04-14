import React, { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu/MainMenu";
import Comingsoon from "./Components/ComingSoon/ComingSoon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapRoute from "./Components/Route/MapRoute";
import Footer from "./Components/Footer/Footer";
import Rules from "./Components/Rules/Rules";
import PastEditions from "./Components/PastEdtions/PastEdtions";
import Brevet from "./Components/Brevet/Brevet";
import NextEdition from "./Components/NextEdition/NextEdition";
import BrevetGravelSeries from "./Components/BrevetGravelSeries/BrevetGravelSeries";
import Fecha2 from "./Components/BrevetGravelSeries/Fecha2/Fecha2";
import Ltdf2025 from "./Components/Ltdf2025";
import Ltdf2026 from "./Components/Ltdf2026/Ltdf2026";
import BrevetNovember from "./Components/Brevet2025/Brevet2025";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";



function App() {
  const [switchLang, setSwitchLang] = useState(false);

  return (
    <div className="App-header">
      <BrowserRouter>
        <MainMenu />

        <Routes>
          <Route path="/" element={<Comingsoon />} />
          <Route path="/MapRoute" element={<MapRoute />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/ltdf-2023" element={<PastEditions />} />
          <Route path="/brevet" element={<Brevet />} />
          <Route path="/brevet-2025" element={<BrevetNovember />} />
          <Route path="/ltdf-2024" element={<NextEdition />} />
          <Route path="/brevet-gravel-series" element={<BrevetGravelSeries />} />
          <Route path="/fecha-3" element={<Fecha2 />} />
          <Route path="/ltdf-2025" element={<Ltdf2025/>}></Route>
          <Route path="/ltdf-2026" element={<Ltdf2026/>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
