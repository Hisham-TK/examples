import { LinkedList, Node } from './classes/types/LinkedList';
import { CharactersCollection } from './classes/types/CharactersCollection';
import { NumbersCollection } from './classes/types/NumbersCollection';
import { Sorter } from './classes/Sorter';

let numbersCollection = new NumbersCollection([3, 0, -1, 10]);
console.log('before: ', numbersCollection.data);
numbersCollection.sort();
console.log('after: ', numbersCollection.data);

let charactersCollection = new CharactersCollection('cBDa');
console.log('before: ', charactersCollection.data);
charactersCollection.sort();
console.log('after: ', charactersCollection.data);

let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-3);
linkedList.add(1);
linkedList.add(0);
console.log('before: ');
linkedList.print();
linkedList.sort();
console.log('after: ');
linkedList.print();
