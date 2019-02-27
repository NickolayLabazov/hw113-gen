export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Лучник', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 20,
      },
      {
        name: 'Мечник', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10, damage: 25,
      },
      {
        name: 'Безсмертный', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40, damage: 20,
      },
      {
        name: 'Маг', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25, damage: 30,
      },
    ];
  }


  * gener() {
    const compare = (persA, persB) => {
      const abilitiesA = persA.attack + persA.damage;
      const abilitiesB = persB.attack + persB.damage;
      return abilitiesB - abilitiesA;
    };
    const hero = this.hero.sort(compare);
    for (let i = 0; i < hero.length; i += 1) {
      yield hero[i];
    }
  }
}
