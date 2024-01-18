import React from "react";
import ReactDOM from "react-dom/client";
import Starwars from "./Starwars.jsx";
import LightSidePage from "./pages/LightSidePage.jsx";
import DarkSidePage from "./pages/DarkSidePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Hawkeye from "./pages/Hawkeye.jsx";
import Hulk from "./pages/Hulk.jsx";
import IronMan from "./pages/IronMan.jsx";
import CaptainAmerica from "./pages/CaptainAmerica.jsx";
import BlackWidow from "./pages/BlackWidow.jsx";
import AntMan from "./pages/AntMan.jsx";
import Heros from "./pages/Heros.jsx";
import Thor from "./pages/Thor.jsx";
import SpiderMan from "./pages/SpiderMan.jsx";
import XMen2 from "./pages/XMen2.jsx";
import Mutants2 from "./pages/Mutants2.jsx";
import History2 from "./pages/History2.jsx";
import BlackWidowComicPage from "./pages/BlackWidowComicPage";
import IronManComicPage from "./pages/IronManComicPage";
import CaptainAmericaComicPage from "./pages/CaptainAmericaComicPage";
import HawkeyeComicPage from "./pages/HawkeyeComicPage";
import ThorComicPage from "./pages/ThorComicPage";
import SpiderManComicPage from "./pages/SpiderManComicPage";
import HulkComicPage from "./pages/HulkComicPage";
import BlackPantherComicPage from "./pages/BlackPantherComicPage";
import ScarletWitchComicPage from "./pages/ScarletWitchComicPage";
import VisionComicPage from "./pages/VisionComicPage";
import AntManComicPage from "./pages/AntManComicPage";
import JeanGreyComicPage from "./pages/JeanGreyComicPage";
import RogueComicPage from "./pages/RogueComicPage";
import ProfessorXComics from "./pages/ProfessorXComicPage";
import StormComicPage from "./pages/StormComicPage";
import MystiqueComicPage from "./pages/MystiqueComicPage";
import NightcrawlerComicPage from "./pages/NightcrawlerComicPage";
import CyclopsComicPage from "./pages/CyclopsComicPage";
import MagnetoComicPage from "./pages/MagnetoComicPage";
import WolverineComicPage from "./pages/WolverineComicPage";
import JuggernautComicPage from "./pages/JuggernautComicPage";
import ComicCharactersPage from "./pages/ComicCharactersPage.jsx";
import EternalsSeriesPage from "./pages/EternalSeriesPage.jsx";
import AsgardiansOfTheGalaxySeriesPage from "./pages/AsgardiansOfTheGalaxySeriesPage.jsx";
import TheAmazingSpiderManSeriesPage from "./pages/AmazingSpiderManSeriesPage.jsx";
import BlackWidowSeriesPage from "./pages/BlackWidowSeriesPage.jsx";
import InfinityGauntletSeriesPage from "./pages/InfinityGauntletSeriesPage.jsx";
import AgeOfUltronSeriesPage from "./pages/AgeOfUltronSeriesPage.jsx";
import MoonKnightSeriesPage from "./pages/MoonKnightSeriesPage.jsx";
import MsMarvelSeriesPage from "./pages/MsMarvelSeriesPage.jsx";
import CarnageSeriesPage from "./pages/CarnageSeriesPage.jsx";
import VisionSeriesPage from "./pages/VisionSeriesPage.jsx";
import ComicSeriesPage from "./pages/ComicSeriesPage.jsx";

import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExcaliburSeriesPage from "./pages/ExcaliburSeriesPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/LightSidePage" element={<LightSidePage />} />
        <Route path="/pages/DarkSidePage" element={<DarkSidePage />} />
        <Route
          path="/Starwars"
          element={
            <div>
              <Starwars />
            </div>
          }
        />
        <Route path="/Hawkeye" element={<Hawkeye />} />
        <Route path="/Hulk" element={<Hulk />} />
        <Route path="/iron-man" element={<IronMan />} />
        <Route path="/Captain" element={<CaptainAmerica />} />
        <Route path="/BlackWidow" element={<BlackWidow />} />
        <Route path="/AntMan" element={<AntMan />} />
        <Route path="/Thor" element={<Thor />} />
        <Route path="/AntMan" element={<AntMan />} />
        <Route path="/SpiderMan" element={<SpiderMan />} />
        <Route path="/MCU" element={<Heros />} />
        <Route path="/XMen" element={<XMen2 />} />
        <Route path="/Mutants" element={<Mutants2 />} />
        <Route path="/History" element={<History2 />} />
        <Route path="/blackwidowcomics" element={<BlackWidowComicPage />} />
        <Route
          path="/captainamericacomics"
          element={<CaptainAmericaComicPage />}
        />
        <Route path="/hawkeyecomics" element={<HawkeyeComicPage />} />
        <Route path="/thorcomics" element={<ThorComicPage />} />
        <Route path="/spidermancomics" element={<SpiderManComicPage />} />
        <Route path="/ironmancomics" element={<IronManComicPage />} />
        <Route path="/hulkcomics" element={<HulkComicPage />} />
        <Route path="/blackpanthercomics" element={<BlackPantherComicPage />} />
        <Route path="/scarletwitchcomics" element={<ScarletWitchComicPage />} />
        <Route path="/visioncomics" element={<VisionComicPage />} />
        <Route path="/antmancomics" element={<AntManComicPage />} />
        <Route path="/jeangreycomics" element={<JeanGreyComicPage />} />
        <Route path="/roguecomics" element={<RogueComicPage />} />
        <Route path="/professorxcomics" element={<ProfessorXComics />} />
        <Route path="/stormcomics" element={<StormComicPage />} />
        <Route path="/mystiquecomics" element={<MystiqueComicPage />} />
        <Route path="/nightcrawlercomics" element={<NightcrawlerComicPage />} />
        <Route path="/cyclopscomics" element={<CyclopsComicPage />} />
        <Route path="/magnetocomics" element={<MagnetoComicPage />} />
        <Route path="/wolverinecomics" element={<WolverineComicPage />} />
        <Route path="/juggernautcomics" element={<JuggernautComicPage />} />
        <Route path="/comiccharacterspage" element={<ComicCharactersPage />} />
        <Route path="/comicseriespage" element={<ComicSeriesPage />} />
        <Route path="/eternalsseries" element={<EternalsSeriesPage />} />
        <Route path="/excaliburseries" element={<ExcaliburSeriesPage />} />
        <Route
          path="/asgardiansofthegalaxyseries"
          element={<AsgardiansOfTheGalaxySeriesPage />}
        />
        
        <Route
          path="/theamazingspidermanseries"
          element={<TheAmazingSpiderManSeriesPage />}
        />
        <Route path="/blackwidowseries" element={<BlackWidowSeriesPage />} />
        <Route
          path="/infinitygauntletseries"
          element={<InfinityGauntletSeriesPage />}
        />
        <Route path="/ageofultronseries" element={<AgeOfUltronSeriesPage />} />
        <Route path="/moonknightseries" element={<MoonKnightSeriesPage />} />
        <Route path="/msmarvelseries" element={<MsMarvelSeriesPage />} />
        <Route path="/carnageseries" element={<CarnageSeriesPage />} />
        <Route path="/visionseries" element={<VisionSeriesPage />} />
        <Route path="/comiccharacterspage" element={<ComicCharactersPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);