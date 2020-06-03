import { Analyzer } from './../Analyze.class';
import { MatchData } from '../interfaces/MatchData.interface';
import { MatchResult } from '../enums/MatchResult.enum';

export class WinAnalyze implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let win = 0;
    for (const match of matches) {
      if (
        (match[1] === this.teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
      ) {
        win++;
      }
    }
    return `Team "${this.teamName}" won ${win} games.`;
  }
}
