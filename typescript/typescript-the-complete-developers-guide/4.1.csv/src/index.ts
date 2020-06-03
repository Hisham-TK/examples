import { CsvFileReader } from './classes/CsvFileReader.class';
import { MatchResult } from './classes/enums/MatchResult.enum';
import { MatchData } from './classes/interfaces/MatchData.interface';
import { MatchReader } from './classes/derived/MatchReader.class';

const reader = new MatchReader(['.', 'football.csv']);
reader.read();
console.log(reader.data);

let manUnitedWin = 0;
for (const match of reader.data) {
  if (
    (match[1] == 'Man United' && match[5] == MatchResult.HomeWin) ||
    (match[2] == 'Man United' && match[5] == MatchResult.AwayWin)
  ) {
    manUnitedWin++;
  }
}
console.log(`"Man United" team won ${manUnitedWin} games`);
// console.log({ file });
