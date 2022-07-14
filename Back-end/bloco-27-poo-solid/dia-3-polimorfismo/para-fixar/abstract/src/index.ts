abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('falando...')
  }

  specialMove(): void {
    console.log('movimento especial!')
  }
};

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('falando long...')
  }

  specialMove(): void {
    console.log('movimento especial! log...')
  }
};

function callCharacter (character: Character) {
  character.specialMove();
  character.talk();
}
const obj1 = new MeleeCharacter();
const obj2 = new LongRangeCharacter();

callCharacter(obj1);
callCharacter(obj2);

