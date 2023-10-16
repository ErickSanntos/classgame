// making a char for my rpg game
// first ill need an object that creates mulltiple chars 
// give them properties 
// use factory or constructor object CLASSS
// my character will have 
class MakeChar{
    constructor(charName,charHealth,charAttack,charHaste,charFocus,charStamina,charXp ){   
        this.name = charName  
        this.health = charHealth
        this.attack = charAttack
        this.haste = charHaste
        this.focus1 = charFocus
        this.stamina = charStamina
        this.xp = charXp 
    }

// Attacker  monster 
attacks(target) {
    if (this.health > 0) {
      const damage = this.attack;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can/'t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .attack} as attack and ${this.xp} XP points`;
  }
}

const hunter = new MakeChar('HuntMaster',100,25,15,120,100,0)
//const mage = new MakeChar('SuperMage',100,50,50,150,100,0)
console.log('walking down the forest')
document.querySelector('#charName1').innerText = `${hunter.name}`
document.querySelector('#charHealth1').innerText = `${hunter.health}`
document.querySelector('#charAttack1').innerText = `${hunter.attack}`
document.querySelector('#charHaste1').innerText = `${hunter.haste}`
document.querySelector('#charFocus12').innerText = `${hunter.focus1}`
document.querySelector('#charHealth1').innerText = `${hunter.health}`
//console.log(hunter.describe())
document.querySelector('h1').innerText = `${hunter.name} sees a dragon `
console.log(`${hunter.describe()} sees a dragon `)
// intro dragon 
const dragon = new MakeChar('drago',100,25,15,100,100,0)
document.querySelector('#charName2').innerText = `${dragon.name}`
document.querySelector('#charHealth2').innerText = `${dragon.health}`
document.querySelector('#charAttack2').innerText = `${dragon.attack}`
document.querySelector('#charHaste2').innerText = `${dragon.haste}`
document.querySelector('#charFocus2').innerText = `${dragon.focus1}`
document.querySelector('#charHealth2').innerText = `${dragon.health}`
console.log(dragon.describe())
// call attack method  
console.log(`attack`)
hunter.attacks(dragon);
dragon.attacks(hunter);
console.log(hunter.describe())







// hits and gains  
// hunter is harmed by ice lance 
//hunter.health -= 20
// hunter takes a posion gains 20 staminas
//hunter.stamina += 20
// console.log(mage.discribe()) // call the object like this  

// 
    // specialMove(){
    //     alert(`increase ${this.focus1} and ${this.crit}`)
    // }