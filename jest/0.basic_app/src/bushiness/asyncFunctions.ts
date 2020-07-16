import Axios from 'axios';

const asyncFunctions = {
  fetchFirstUser: async (): Promise<User> => (await Axios.get('https://jsonplaceholder.typicode.com/users/1')).data,
  fetchAllUsers: async (): Promise<User> => (await Axios.get('https://jsonplaceholder.typicode.com/users')).data,

  insertUser: async (user: User): Promise<User> =>
    (await Axios.post('https://jsonplaceholder.typicode.com/users', user)).data,
};

export default asyncFunctions;

/* Interfaces */
export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
