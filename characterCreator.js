// Welcome to my Character Creator. Step into the world of Azeroth.

class Character {
    constructor (name, race, heroClass, totalLevel, healthPoints, inventory, weapon, attackLevel) {
      this.name = name;
      this.race = race;
      this.heroClass = heroClass;
      this.totalLevel = totalLevel;
      this.healthPoints = healthPoints;
      this.inventory = inventory;
      this.weapon = weapon;
      this.attackLevel = attackLevel;
    }
    greeting(){
      console.log(`Good day to you, my name is ${this.name}. Huzzah!`)
    }
    examine(){
      console.log(`Name: ${this.name}, Race: ${this.race}, Hero Class: ${this.heroClass}, Level: ${this.totalLevel}, Health: ${this.healthPoints}, Inventory: ${this.inventory}, Equipped Weapon: ${this.weapon}, Attack Level: ${this.attackLevel}`)
      }
    
    levelUp(num){
      this.totalLevel += num; {
        console.log(`${this.name} has leveled up! ${this.name}'s total level is now ${this.totalLevel}`)
      }
    }
    addNewItem(newItem){
      let newInv = [];
      newInv.push(this.inventory)
      newInv.push(newItem);
      this.inventory = newInv
    }
  
    checkInventory(){
      console.log(`${this.name}'s backpack contains ${this.inventory}.`)
    }
    equipItem(equippedItem){
      console.log(`${this.name} has equipped ${equippedItem}.`)
    }
    // I want to add to the above function to only be able to equip things in the inventory. At some point when I build a weapons class I want to be able to equip items which are built in that class so they already have certain attributes. 
    // Also, if a weapon is equipped, I want to reassign the current weapon in the descriptor. 
  
    takeDamage(num){
      this.healthPoints -= num; {
        console.log(`${this.name} has taken ${num} damage. ${this.name}'s health is now ${this.healthPoints}`)
      }
  
    }
    attack(){
      console.log (`${this.name} attacked and dealt ${this.attackLevel} damage!`)
      this.attackLevel += 50 
        console.log(`${this.name}'s attack level has increased to ${this.attackLevel}`)
      }
    }
  
  
  // class Weapon {
  // will start building this in the future. 
  // }
  
  let grimand = new Character (`Grimand Elmore`, `Dwarf`, `Warrior`, 99, 2000, [`(1) Hammer`, ` (1) Glass of mead`, ` (2) Flask`], `Two-Handed Axe`, 100) 
  
  let grayson = new Character (`Grayson Shadowbreaker`, `Human`, `Paladin`, 110, 2500, [` (1) Letter of Utmost Importance`, ` (2) Roses`, ` (1) health potion`, ` (2) mana potion`], `Two-Handed Mace`, 200)
  
  let marion = new Character (`Marion Call`, `Blood Elf`, `Rogue`, 80, 1500, [` (1) bloody head`, ` (2) bandanas`, ` (1) flask`, ` (3)vials of poison`], `Dagger`, 99)
  
  let shandris = new Character (`Shandris Feathermoon`, `Night Elf`, `Hunter`, 25, 50, [` (1) mana potion`, ` (1) call of the wild`, ` (100) iron-tipped arrows`, ` (4) chunk of bread`], `Studded Crossbow`, 125)
  
  function handshake (character1, character2) {
    console.log(`${character1.name} shakes ${character2.name}'s hand`)
  }
  
  function battle (character1, character2) {
    console.log(`${character1.name} and ${character2.name} have entered into a duel.`)
    while (character1.healthPoints > 0 && character2.healthPoints > 0){
    character1.attack(character1.attackLevel);
    character2.takeDamage(character1.attackLevel);
    character2.attack(character2.attackLevel);
    character1.takeDamage(character2.attackLevel)}
    if (character1.healthPoints <= 0){
      console.log(`${character1.name} has died.`)
    } else if (character2.healthPoints <= 0){
      console.log (`${character2.name} has died.`)
    }
  }
  
  // handshake(grayson, marion)
  // battle(grimand, grayson)
  
  // Command Tests //
//   grimand.greeting()
//   grayson.greeting()
  // Grimand.examine()
  // Grimand.attack()
  // Grimand.takeDamage(50)
  // Grimand.checkInventory()
  // Grimand.equipItem(`chainmail boots`)
  // Grimand.levelUp(1)
  // Grimand.addNewItem(` (1) Gold-plated helm`)
  // Grimand.checkInventory()
  
  //CODE BELOW WAS MESSING AROUND WITH OBJECTS. SAVED FOR REFERENCE
  // let backpack = {
  //   color:'purple',
  //   name:'Neatherweave bag',
  //   slots: '16',
  //   contains: ['(1) hearthstone', `(40) iron ore`, `(15) linen cloth`]
  // }; 
  
  // console.log(backpack.name)
  
  // function checkInventory () {
  // console.log("Backpack contains" + " " + backpack.contains)
  // }
  
  // function addInventory (newItem) {
  //   backpack.contains.push(newItem)  
  //   }
  
  // function equipItem (useItem) {
  //   console.log(`You have equipped ${useItem}`)
  //   backpack.contains.pop(useItem)
  // }
  //CODE ABOVE WAS MESSING AROUND WITH OBJECTS, IGNORE. SAVED FOR REFERENCE