@injectable()
class Ninja implements Warrior {
  @inject(TYPES.Weapon) private _katana: Weapon;
  @inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon;

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}
