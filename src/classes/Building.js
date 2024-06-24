export default class Building{

  constructor(name, price, prod, desc, count=0){
    this.multi = 1;
    this.priceIncrease = 1.15;  // maybe const
    this.count = count;

    this.name = name;
    this.price = price;
    this.prod = prod;
    this.desc = desc;
    this.img = "./assets/img/" + name + ".jpg";
  }

  buy(count){
    this.count += count;
    this.price = parseInt(this.price * this.priceIncrease * count);
  }
  getMoney(){
    return this.count * this.prod * this.multi;
  }

  static loadFromObject(obj){
    return new Building(obj.name, obj.price, obj.prod, obj.desc);
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
