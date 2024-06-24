import React from 'react';
import BuildingItem from './BuildingItem';


export default function Buildings({buildings, buyBuilding}) {


  return (
  <div class="buildings">
    <h3>Buildings</h3>
    <ul>
      {buildings.map((b) => {
        return <BuildingItem key={"building" + b.name} b={b} buyBuilding={buyBuilding}/>;
      })}
    </ul>
    




  </div>
  );
}
