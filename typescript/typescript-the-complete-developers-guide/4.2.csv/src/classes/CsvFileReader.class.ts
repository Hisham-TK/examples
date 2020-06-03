import { readFileSync } from 'fs';
import { join } from 'path';

export class CsvFileReader {
  data: string[][] = [];
  constructor(private filename: string[]) {}

  read(): void {
    this.data = readFileSync(join(...this.filename), {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((raw: string): string[] => raw.split(','));
  }
}
