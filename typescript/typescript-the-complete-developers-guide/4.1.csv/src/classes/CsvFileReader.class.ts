import { readFileSync } from 'fs';
import { join } from 'path';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  abstract filename: string[];

  read(): void {
    this.data = readFileSync(join(...this.filename), {
      encoding: 'utf-8',
    })
      .split('\n')
      .map(this.mapRaw);
  }

  abstract mapRaw(raw: string): T;
}
