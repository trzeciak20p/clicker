import React from 'react';
import UpgradeItem from './UpgradeItem';


export default function Upgrades({upgrades, buyUpgrade}) {


  return (
  <div>
    <h3>Upgrades</h3>
    <ul>
      {upgrades.map((u) => {
        if(!u.owned)
          return <UpgradeItem key={"building" + u.name} u={u} buyUpgrade={buyUpgrade}/>;
      })}
    </ul>
    <ul>
      {upgrades.map((u) => {
        if(u.owned)
          return <UpgradeItem key={"building" + u.name} u={u} buyUpgrade={buyUpgrade}/>;
      })}
    </ul>
    




  </div>
  );
}
