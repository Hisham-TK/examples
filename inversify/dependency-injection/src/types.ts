interface Warrior {
  fight(): string;
  sneak(): string;
}

interface Weapon {
  hit(): string;
}

interface ThrowableWeapon {
  throw(): string;
}

const TYPES = {
  Warrior: Symbol("Warrior"),
  Weapon: Symbol("Weapon"),
  ThrowableWeapon: Symbol("ThrowableWeapon"),
};

export default TYPES;
