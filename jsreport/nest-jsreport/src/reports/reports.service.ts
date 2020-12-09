import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { writeFileSync } from 'fs';
// import * as jsReport from 'jsreport';
// import {Configuration} from 'jsreport';
import * as JsReport from 'jsreport-core';
import { Configuration } from 'jsreport-core';
import * as path from 'path';
const config: Partial<Configuration> = {
  // templatingEngines: { allowedModules: '*' },
};
// const reporter = JsReport(config);
// console.log('reporter', reporter);
const jsreport = JsReport(config);

import { exec } from 'child_process';

function openPdfFileInBrowser() {
  return exec(
    `cd ${path.join(__dirname, '..', '..')} && start report.pdf`,
    (err, stdout, stderr) => {
      console.log({ err, stdout, stderr });
    },
  );
}
@Injectable()
export class ReportsService implements OnApplicationBootstrap {
  async onApplicationBootstrap(): Promise<any> {
    // await reporter.init();
    // jsreport
    //   .init()
    //   .then(() => {
    //     return jsreport
    //       .render({
    //         template: {
    //           content: '<h1>Hello {{foo}}</h1>',
    //           engine: 'handlebars',
    //           recipe: 'chrome-pdf',
    //         },
    //         data: {
    //           foo: 'world',
    //         },
    //       })
    //       .then(resp => {
    //         // prints pdf with headline Hello world
    //         // console.log();
    //         writeFileSync(
    //           path.join(__dirname, '..', '..', 'report.pdf'),
    //           resp.content.toString(),
    //         );
    //         openPdfFileInBrowser();
    //         console.log('file saved!');
    //       });
    //   })
    //   .catch(e => {
    //     console.error(e);
    //   });
  }

  async generateTempReport(): Promise<any> {
    const res = await jsreport.render(
      /* {
      template: {
        content: '<h1>Hello {{foo}}</h1>',
        helpers: {
          foo: () => {
            return 'world';
          },
        },
        engine: 'handlebars',
        recipe: 'chrome-pdf',
      },
    } */
      {
        template: {
          content: '<h1 style="color: red;">Hello {{foo}}</h1>',
          engine: 'handlebars',
          recipe: 'chrome-pdf',
        },
        data: {
          foo: 'world',
        },
      },
    );
    return res.content.toString();
    // console.log({ render, toString: render.content.toString() });
    // writeFileSync(path.join(__dirname, '..', '..', 'report.pdf'), render);
    // console.log('ReportsService -> render', render);
    // console.log('ReportsService -> file saved');
  }
}

const data = [
  { id: 1, name: 'Auuzyo' },
  { id: 2, name: 'Pznjse' },
  { id: 3, name: 'Vstiid' },
  { id: 4, name: 'Przurt' },
  { id: 5, name: 'Gvqhy' },
  { id: 6, name: 'Cujgq' },
  { id: 7, name: 'Cgcvp' },
  { id: 8, name: 'Ubpczu' },
  { id: 9, name: 'Ckzjl' },
  { id: 10, name: 'Msprey' },
  { id: 11, name: 'Bqhfimc' },
  { id: 12, name: 'Ogdlyt' },
  { id: 13, name: 'Kxibuom' },
  { id: 14, name: 'Sdmjun' },
  { id: 15, name: 'Khmuph' },
  { id: 16, name: 'Iepvy' },
  { id: 17, name: 'Rwfrdpb' },
  { id: 18, name: 'Gpojlk' },
  { id: 19, name: 'Mvgyuxl' },
  { id: 20, name: 'Ysuvv' },
  { id: 21, name: 'Beinst' },
  { id: 22, name: 'Lelxf' },
  { id: 23, name: 'Nmjvd' },
  { id: 24, name: 'Gspxce' },
  { id: 25, name: 'Jdjrg' },
  { id: 26, name: 'Cvct' },
  { id: 27, name: 'Fqkp' },
  { id: 28, name: 'Bypsyj' },
  { id: 29, name: 'Dipssfo' },
  { id: 30, name: 'Gisg' },
  { id: 31, name: 'Xjsispn' },
  { id: 32, name: 'Sklp' },
  { id: 33, name: 'Ukxoe' },
  { id: 34, name: 'Oyre' },
  { id: 35, name: 'Mmew' },
  { id: 36, name: 'Llxm' },
  { id: 37, name: 'Rthfeg' },
  { id: 38, name: 'Udyumx' },
  { id: 39, name: 'Bgscsd' },
  { id: 40, name: 'Pvqmyno' },
  { id: 41, name: 'Rorkf' },
  { id: 42, name: 'Hfufwf' },
  { id: 43, name: 'Vvnufg' },
  { id: 44, name: 'Nujxnlv' },
  { id: 45, name: 'Wvjxis' },
  { id: 46, name: 'Isfukp' },
  { id: 47, name: 'Ppvai' },
  { id: 48, name: 'Ktznkb' },
  { id: 49, name: 'Ypms' },
  { id: 50, name: 'Obthiw' },
  { id: 51, name: 'Pifgysi' },
  { id: 52, name: 'Flfauz' },
  { id: 53, name: 'Ogxvd' },
  { id: 54, name: 'Bsbkatp' },
  { id: 55, name: 'Bndm' },
  { id: 56, name: 'Vavef' },
  { id: 57, name: 'Wxryq' },
  { id: 58, name: 'Bhug' },
  { id: 59, name: 'Lshcm' },
  { id: 60, name: 'Nyhvt' },
  { id: 61, name: 'Psvlhtn' },
  { id: 62, name: 'Uljvrqc' },
  { id: 63, name: 'Iblan' },
  { id: 64, name: 'Lwoaxn' },
  { id: 65, name: 'Kgjqrr' },
  { id: 66, name: 'Vumufp' },
  { id: 67, name: 'Yahlka' },
  { id: 68, name: 'Bshvij' },
  { id: 69, name: 'Wmfwc' },
  { id: 70, name: 'Hhzgnxx' },
  { id: 71, name: 'Kyxvw' },
  { id: 72, name: 'Ywge' },
  { id: 73, name: 'Qxziryl' },
  { id: 74, name: 'Jbocxle' },
  { id: 75, name: 'Lnpvce' },
  { id: 76, name: 'Dxlsg' },
  { id: 77, name: 'Bqowrp' },
  { id: 78, name: 'Xqvdo' },
  { id: 79, name: 'Keotebg' },
  { id: 80, name: 'Chajtu' },
  { id: 81, name: 'Dfsf' },
  { id: 82, name: 'Touae' },
  { id: 83, name: 'Npqfh' },
  { id: 84, name: 'Iotcuj' },
  { id: 85, name: 'Xsyk' },
  { id: 86, name: 'Vcoj' },
  { id: 87, name: 'Vfwlr' },
  { id: 88, name: 'Ogzctb' },
  { id: 89, name: 'Xdufek' },
  { id: 90, name: 'Ghyup' },
  { id: 91, name: 'Oezfrnm' },
  { id: 92, name: 'Tkgtux' },
  { id: 93, name: 'Xwpdu' },
  { id: 94, name: 'Fcudjen' },
  { id: 95, name: 'Gltxt' },
  { id: 96, name: 'Qhbiev' },
  { id: 97, name: 'Gytvq' },
  { id: 98, name: 'Dkkcmy' },
  { id: 99, name: 'Nvwqwco' },
  { id: 100, name: 'Sdujt' },
];
