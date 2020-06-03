import { MatchReader } from './classes/MatchReader.class';
import { Analyze } from './classes/Analyze.class';

const matchReader = MatchReader.fromCsv(['.', 'football.csv']);
const analyze = Analyze.winAnalysisWithHtmlReport('Man United', [
  '.',
  're.html',
]);
analyze.buildAndPrintReport(matchReader.matches);
