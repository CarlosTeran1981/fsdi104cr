class Character{
    constructor(name,lifePoints,attackPoints){
    this.name=name;
    this.lifePoints=lifePoints;
    this.attackPoints=attackPoints;
    }
    
    attack=function(opponent,items){
      let
      newLifePoints=opponent.lifePoints-items.attackPointsItem;
      opponent.lifePoints=newLifePoints;

    if(opponent.lifePoints<=0){
        update();
        document.getElementById('console').innerHTML=`<p> IS ALL OVER..... <BR> ${this.name} WINS!!!!!!!!`;
        
        }

    else{
        
        document.getElementById('console').innerHTML=`<p>${this.name} Attacking with ${items.img}.... `;
        
        update();
    }
    }
      
    print=function(){
        document.getElementById(this.name).innerHTML=`<h3>Name: ${this.name} <br> Life Points: ${this.lifePoints} <br> Attack Points: ${this.attackPoints} <br> </h3>`
    }
}


const jerry=new Character('Jerry',100,20);
const tom=new Character('Tom',100,20);

function update(){
    jerry.print();
    tom.print();
}

update();

function Item(name,attackPointsItem,img){
    this.name=name;
    this.attackPointsItem=attackPointsItem;
    this.img=img;
}

const item1=new Item('DeadPool',25,'<img src="img/dp.png" class="item">');
const item2=new Item('Bomb',20,'<img src="img/bomb.png" class="item">');
const item3=new Item('Katana',10,'<img src="img/katana.png" class="item">');
const item4=new Item('Gun',15,'<img src="img/gun.png" class="item">');
const item5=new Item('Punch',5,'<img src="img/punch.png" class="item">');

const items = [item1,item2,item3,item4,item5];

function selectItem(){
    let x=Math.floor(Math.random()*items.length);
    return items[x];
}



/* let points = jerry.attack(tom.lifePoints);
tom.lifePoints = points;
 */