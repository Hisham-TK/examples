import { sortBy } from "lodash";

const outputs: number[][] = [];
const k = 3;
const dropPoint = 300;

// eslint-disable-next-line no-unused-vars
function onScoreUpdate(
  dropPosition: number,
  bounciness: number,
  size: number,
  bucketLabel: number
) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  console.log(outputs.length);
}

// eslint-disable-next-line no-unused-vars
function runAnalysis() {
  // Write code here to analyze stuff
  console.log(
    _.chain(outputs)
      .map((row) => [distance(row[0]), row[3]])
      .sortBy((row) => row[0])
      
      .value()
  );
}

/* Helpers */
function distance(point: number /* , dropPoint: number  = dropPoint */) {
  return point - dropPoint;
}
