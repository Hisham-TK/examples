export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i1 = 0; i1 < length; i1++) {
      for (let i2 = 0; i2 < length - i1 - 1; i2++) {
        if (this.compare(i2, i2 + 1)) {
          this.swap(i2, i2 + 1);
        }
      }
    }
  }
}
