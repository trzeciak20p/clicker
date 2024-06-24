import './css/App.css'
import { useEffect, useState } from 'react'
import Header from './containers/Header/Header'
import Click from './containers/Click/Click';
import Shop from './containers/Shop/Shop';
import Info from './containers/Info/Info';
import Building from './classes/Building'
import Upgrade from './classes/Upgrade'


function App() {

  // const [buildings, setBuildings] = useState([new Building("ae", 15, 0.2, "ea",), new Building("a2", 15, 1, "ea",)])
  const [buildings, setBuildings] = useState(() => Building.loadFromJSON())   // fix so it shows on start
  const [upgrades, setUpgrades] = useState([new Upgrade("double click", 1000, "click", "", 1, "klikać wićej"),
  new Upgrade("moni maker+", 100, "value", "moni maker", 0.1, "budynek robić więcej"), 
  new Upgrade("moni maker v2+", 1000, "value", "moni maker v2", 1, "budynek robić więcej"),
  new Upgrade("moni maker++", 500, "value", "moni maker", 0.1, "budynek robić więcej"), 
  new Upgrade("moni maker v2++", 3000, "value", "moni maker v2", 1, "budynek robić więcej")],
  new Upgrade("moni maker multi", 5000, "multi", "moni maker", 1, "budynek robić więcej"), 
   new Upgrade("moni maker v2 multi", 10000, "multi", "moni maker v2", 1, "budynek robić więcej"))
  // const [upgrades, setUpgrades] = useState([new Upgrade("double click", 1000, "click", "", 1, "Click more"), new Upgrade("ae more value", 20, "value", "ae", 1, "budynek robić więcej"), new Upgrade("ae more multi", 20, "multi", "ae", 1, "budynek robić więcej")])

  const [money, setMoney] = useState(0);
  const [moneyIncrementVal, setMoneyIncrementVal] = useState(0);
  const [moneyClickVal, setMoneyClickVal] = useState(1);

  // MONEY

  const moneyAdd = (value) => {
    setMoney((prevState) => { return prevState + value });
  }
  const moneyAddClick = () => {
    moneyAdd(moneyClickVal);
  }
  const moneyClickValUpdate = () => {
    let res = 1;
    upgrades.map((u) => {
      if (u.owned && u.type == "click") {
        res += u.value;
      }
    })
    setMoneyClickVal(res);
  }

  const moneyIncrementValUpdate = () => {
    let res = 0;
    buildings.map((b) => {
      res += b.getMoney();
    })
    setMoneyIncrementVal(res);
  }


  const moneyIncrement = () => {
    moneyAdd(moneyIncrementVal);
  }


  // BUYING

  let buyCount = 1;   // make select in shop

  const buyBuilding = (name) => {
    // zmienić kolejność
    setBuildings((prevState) => {
      return prevState.map((b) => {
        if (b.name == name && money >= (b.price * buyCount)) {
          moneyAdd(-(b.price * buyCount));
          b.buy(buyCount);
        }
        return b;
      })
    })

  }

  const buyUpgrade = (name) => {
    setUpgrades((prevState) => {
      return prevState.map((u) => {
        if (u.name == name && money >= u.price && !u.owned) {
          moneyAdd(-u.price);
          u.buy();
          if (u.type == "click") {
            moneyClickValUpdate();
          } else {
            updateBuilding(u);
          }
        }
        return u;
      })
    })
  }
  const updateBuilding = (upgrade) => {
    setBuildings((prevState) => {
      return prevState.map((b) => {
        if (b.name == upgrade.target) {
          if (upgrade.type == "value") {
            b.prod += upgrade.value;
          } else if (upgrade.type == "multi") {
            b.multi += upgrade.value;
          }
        }
        return b;
      })
    })
  }

  const [weatherData, setWeatherData] = useState(null)

  const getWeatherData = () => {

    const request = new Request("https://api.open-meteo.com/v1/forecast?latitude=52.237049&longitude=21.017532&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=Europe%2FBerlin&forecast_days=1")
    


    fetch(request)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on weather API server!");
      }
    })
    .then((response) => {
      setWeatherData(response.current);
      return 
    })
    .catch((error) => {
      console.error(error);
    });
  }


  const loadSave = () => {
    // read from local storage
    moneyClickValUpdate();
    moneyIncrementValUpdate();

  }



  useEffect(() => {

    if(weatherData == null){
      // too much requests :C
      // getWeatherData();
    }

    
    loadSave();


    const interval = setInterval(moneyIncrement, 1000);

    return () => clearInterval(interval);
  }, [moneyIncrementVal, buildings, moneyClickVal, weatherData])


  return (
    <>
      <Header/>
      <div class="d-flex flex-row h-100">
        <Info weatherData={weatherData}/>
        <div class="separator px-lg-2"></div>
        <main class="flex-fill">
          <p class="counter w-100 text-center mt-2">
            moni: <span>{money.toFixed(0)}</span>
            <br />
            moni/s : <span>{Math.round(moneyIncrementVal*10)/10}</span>
          </p>
          <Click moneyAddClick={moneyAddClick} />
        </main>
        <div class="separator px-lg-2"></div>
        <Shop upgrades={upgrades} buyUpgrade={buyUpgrade} buildings={buildings} buyBuilding={buyBuilding} />
      </div>
    </>
  )
}

export default App
