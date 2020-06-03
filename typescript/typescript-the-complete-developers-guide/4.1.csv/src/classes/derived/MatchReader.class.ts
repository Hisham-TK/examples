import { CsvFileReader } from '../CsvFileReader.class';
import { MatchData } from '../interfaces/MatchData.interface';
import { dateStringToDate } from '../../util';

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filename: string[]) {
    super();
  }

  mapRaw(raw: string): MatchData {
    const splicedLine: any = raw.split(',');
    splicedLine[0] = dateStringToDate(splicedLine[0]);
    splicedLine[3] = parseInt(splicedLine[3]);
    splicedLine[4] = parseInt(splicedLine[4]);
    return splicedLine;
  }
}
