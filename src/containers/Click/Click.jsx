import React, {useState} from 'react';

export default function Click({moneyAddClick}) {

  const click = () => {
    moneyAddClick();
    // animacja czy coś
  }

  return (
  <div class="d-flex h-100">
    <input id="clickBtn" class="btn btn-outline-dark" type="button" value="klik" onClick={click}/>
  </div>
  );
}
