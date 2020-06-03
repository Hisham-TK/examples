import { OutputTarget } from '../Analyze.class';
import { readFileSync, fstat, writeFileSync } from 'fs';
import { join } from 'path';

export class HtmlReport implements OutputTarget {
  constructor(private htmlFilePath: string[]) {}

  print(report: string): void {
    const html = `
    <div>
        <h1>Analysis Report</h1>
        <div>${report}</div>
    </div>
    `;

    writeFileSync(join(...this.htmlFilePath), html);
  }
}
