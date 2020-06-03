import { OutputTarget } from '../Analyze.class';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    // tslint:disable-next-line: no-console
    console.log(report);
  }
}
