import { MatchData } from './interfaces/MatchData.interface';
import { dateStringToDate } from './../util';
import { MatchResult } from './enums/MatchResult.enum';
import { CsvFileReader } from './CsvFileReader.class';

interface IMatchReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  static fromCsv(filename: string[]): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(private reader: IMatchReader) {
    this.load();
  }

  private load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3], 10),
          parseInt(row[4], 10),
          row[5] as MatchResult,
          row[6],
        ];
      },
    );
  }
}
