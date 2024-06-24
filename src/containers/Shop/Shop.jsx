import '../../css/Shop.css'
import React from 'react';
import {NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Upgrades from '../Shop/Upgrades';
import Buildings from '../Shop/Buildings';

export default function Shop({buildings, buyBuilding, upgrades, buyUpgrade}) {



  // let i = 0;


  return (
  <section class="shop col-4">
    <h2>Shop</h2>
    <Router>
      <nav>
        <ul class="d-flex flex-row p-0 text-center">
          <li class="w-50">
            <NavLink tabIndex="-1" to="/buildings">
              <input class="btn btn-dark w-100" type="button" value="Buildings"/>
            </NavLink>
          </li>
          <li class="w-50">
            <NavLink tabIndex="-1" to="/upgrades">
              <input class="btn btn-dark w-100" type="button" value="Upgrades"/>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/buildings" element={<Buildings buildings={buildings} buyBuilding={buyBuilding}/>} />
          <Route path="/upgrades" element={<Upgrades upgrades={upgrades} buyUpgrade={buyUpgrade}/>} />
        </Routes>
    </Router>
  </section>
  );
}
