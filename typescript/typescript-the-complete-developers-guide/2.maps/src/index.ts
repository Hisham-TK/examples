import { CustomMap } from './classes/CustomMap';
import { Company } from './classes/Company';
import { User } from './classes/User';

const user = new User();
const company = new Company();

const map = new CustomMap('map');
map.createMarker(user);
map.createMarker(company);
