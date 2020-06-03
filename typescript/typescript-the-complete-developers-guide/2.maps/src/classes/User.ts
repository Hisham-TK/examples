import faker from 'faker';
import { IMappable } from './CustomMap';

export class User implements IMappable {
  constructor(
    public name: string = `${faker.name.firstName()} ${faker.name.lastName()}`,
    public location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    },
  ) {}

  markerContent(): string {
    return `<h2>User name: ${this.name}</h2>`;
  }
}
