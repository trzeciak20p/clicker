import React, {useState} from 'react';

export default function UpgradeItem({u, buyUpgrade}) {

  const [displayInfo, setDisplayInfo] = useState(false);


  return (
  <li>    
    <button class="item btn btn-dark " onClick={() =>{buyUpgrade(u.name)}}  onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => setDisplayInfo(false)} onFocus={() => setDisplayInfo(true)} onBlur={() => setDisplayInfo(false)} >
      <span class="name">{u.name}</span>
      <span class="price">{!u.owned ? u.price + " moni" : "owned"}</span>
    </button>
    {displayInfo ? 
      <div class="itemInfoBox">
        <p>
          {u.desc}
        </p>
      </div>
      : ""}
  </li>

  );
}
