let Race = document.querySelector('#Race')
let Faction = document.querySelector('#Faction')
let Follower = document.querySelector('#Follower')
let Playstyle = document.querySelector('#Playstyle')
const button = document.querySelector('.button')

try {
function rand(num = 10) {
    const newNum = Math.floor(Math.random() * num);
    console.log(newNum);
    return newNum;
}
} catch {console.log('error in dice roll')}

try{
function roleRoll(e, g) {
    const roll = rand()
switch (roll) { //the 'num's are represnting the text from the game. cba to write
        case 0: appendRoll('0', e, g)
        break
        case 1: appendRoll('1', e, g)
        break
        case 2: appendRoll('2', e, g)
        break
        case 3: appendRoll('3', e, g)
        break
        case 4: appendRoll('4', e, g)
        break
        case 5: appendRoll('5', e, g)
        break
        case 6: appendRoll('6', e, g)
        break
        case 7: appendRoll('7', e, g)
        break
        case 8: appendRoll('8', e, g)
        break
        case 9: appendRoll('9', e, g)
        break
        default: console.log('error in raceRoll switch')
    }
}
} catch {console.log('error in raceRoll()')}

const raceObj = { //matching
    0: 'Breton',
    1: 'Bosmer',
    2: 'Redguard',
    3: 'Argonian',
    4: 'orc',
    5: 'Altmer',
    6: 'Khakit',
    7: 'Imperial',
    8: 'Nord',
    9: 'Dunmer'
};
const factionObj = { //matching
    0: 'The companions',
    1: "Mage's college",
    2: 'Dark Brotherhood',
    3: 'Thieves Guild',
    4: 'Dawnguard',
    5: 'Vampire',
    6: 'Blade',
    7: 'Imperial Army',
    8: 'Stormcloak',
    9: 'Bards COllege'
};
const followerObj = {//matching
    0: 'Same class as you',
    1: 'Wizard',
    2: 'Knight',
    3: 'Ranger',
    4: 'Barbarian',
    5: 'Spellsword',
    6: 'Same race as you',
    7: 'Argonian',
    8: 'Khajit',
    9: 'Lydia'
};
const playstyleObj = {
    0: "Wizard: Destruction, Resoration, and Alteration. Can't use armor. Enchanting focus.",
    1: "Knight: Heavy Armor, One-Handed and Blocking or Two-Handed and Archery. Can't use magic. Smithing focus.",
    2: "Ranger: Light Armor, One-Handed, and Archery. Can't use heavy armor. Alchemy focus.",
    3: "Barbarian: Two-Handed or Dual Wielding, Light Armor, and Archery. Can't use magic or heavy armor. Alchemy focus. ",
    4: "Spellsword: Conjuration, One-Handed or Two-Handed, and Destruction. Can't use non- conjured weapons. Enchanting focus.",
    5: "Shama: Restoration, One-Handed, and Destruction. Can't use heavy armor. Alchemy focus.",
    6: "Necromancer/Warlock: Conjuration, Destruction, and Alteration. Can't use restoration. Alchemy focus.",
    7: "Assassin: Sneak, Illusion, and One-Handed or Archery. Can't use heavy armor. Enchanting focus.",
    8: "Paladin: Heavy Armor, Restoration, and One-Handed or Two Handed. Can't use magic other than Restoration. Smithing focus. Bard Illusion, Restoration, and One- Handed, Can't use destruction magic. Enchanting focus.",
    9: "Bard: Illusion, Restoration, and One- Handed, Can't use destruction magic. Enchanting focus."
};
try{
function appendRoll(e, f, g) { 
    //e = text from the switch, conent to be displayed. f = where it should be attached.
    let newDiv = document.createElement("div");
    newDiv.innerText = g[e]
    f.appendChild(newDiv)
}
} catch {console.log('error in appendRoll')}


button.addEventListener('click', () => {
    roll()
})
let clear = () => {
Race.innerHTML = ''
Faction.innerHTML = ''
Follower.innerHTML = ''
Playstyle.innerHTML = ''
}

function roll() {
clear()
roleRoll(Race, raceObj)
roleRoll(Faction, factionObj)
roleRoll(Follower, followerObj)
roleRoll(Playstyle, playstyleObj)
}

