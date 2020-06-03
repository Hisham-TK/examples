import faker from 'faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
  constructor(
    public name: string = faker.company.companyName(),
    public catchPhrase: string = faker.company.catchPhrase(),
    public location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    },
  ) {}
  markerContent(): string {
    return `<h2>Company name:${this.name}</h2><h3>Catch phrase: ${this.catchPhrase}</h3>`;
  }
}
