export default class Upgrade{

  constructor(name, price, type, target, value, desc){
    this.owned = false;
    this.name = name;
    this.price = price;
    this.target = target;
    this.type = type;   // 3 types (flat) value, multi, click , (click multi ?)
    this.value = value;
    this.desc = desc;
    this.img = "./assets/img/" + name + ".jpg";

    // this.unlocked
    // this.unlockCount

  }

  buy(){
    this.owned = true;
  }

  static loadFromObject(obj){
    return new Upgrade(obj.name, obj.price, obj.type, obj.target, obj.value, obj.desc);
  }

  static loadFromJSON(){
    let res = [];
    fetch('http://localhost:5173/src/assets/json/buildings.json')
      .then((res) =>{
        if (!res.ok) {
          throw new Error
            (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log("unparsowanie")
        for(let i = 0; i < json.length; i++){
          res[i] = this.loadFromObject(json[i]);  
        }      
      })
      .catch((error) => { 
        console.error("Unable to fetch data:", error)});

    return res;
  }

}
