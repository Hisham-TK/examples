import { Sorter } from '../Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tempCharacters = this.data.split('');
    tempCharacters[leftIndex] = tempCharacters[rightIndex];
    tempCharacters[rightIndex] = this.data[leftIndex];
    this.data = tempCharacters.join('');
  }
}
