import React, {useState} from 'react';

export default function BuildingItem({b, buyBuilding}) {

  const [displayInfo, setDisplayInfo] = useState(false);
  
  return (
  <li>
    <button class="item btn btn-dark" onClick={() =>{buyBuilding(b.name, 1)}} onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => setDisplayInfo(false)} onFocus={() => setDisplayInfo(true)} onBlur={() => setDisplayInfo(false)}>
      <span class="name">{b.name} </span>
      <span class="owned">owned: {b.count}</span>
      <span class="price">{b.price} moni</span>
    </button>
    {displayInfo ? 
    <div class="itemInfoBox">
      <p>
        {/* <img src={b.img} /> */}
        {b.desc}<br/>
        One produces: {b.prod}<br/>
        Whole production: {b.getMoney()}<br/>
      </p>
    </div>
    : ""}
  </li>
  );
}
