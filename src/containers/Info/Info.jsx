import '../../css/Info.css'

import React from 'react';
import {NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Weather from './Weather';
import Feedback from './Feedback';


export default function Info({weatherData}) {




  return (
    <section class="info col-4">
      <h2>Info</h2>
      <Router>
        <nav>
          <ul class="d-flex flex-row p-0 text-center">
            <li class="w-50">
              <NavLink tabIndex="-1" to="/weather">
                <input class="btn btn-dark w-100" type="button" value="Weather"/>
              </NavLink>
            </li>
            <li class="w-50">
              <NavLink tabIndex="-1" to="/feedback">
                <input class="btn btn-dark w-100" type="button" value="Feedback"/>
              </NavLink>
            </li>
          </ul>
      </nav>
      <Routes>
          <Route path="/weather" element={<Weather weatherData={weatherData}/>} />
          <Route path="/feedback/*" element={<Feedback/>} />
        </Routes>
      </Router>
    </section>
  );
}
