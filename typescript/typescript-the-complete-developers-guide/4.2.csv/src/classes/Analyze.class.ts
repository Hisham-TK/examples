import { MatchData } from './interfaces/MatchData.interface';
import { WinAnalyze } from './analyzers/WinAnalyze.class';
import { HtmlReport } from './reportTargets/HtmlReport.class';

export interface Analyzer {
  run(matcher: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Analyze {
  static winAnalysisWithHtmlReport(
    teamName: string,
    filePath: string[],
  ): Analyze {
    return new Analyze(new WinAnalyze(teamName), new HtmlReport(filePath));
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
