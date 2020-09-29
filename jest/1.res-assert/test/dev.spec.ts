import { resAssert } from './helper';

const resBody = {
  rating: 5,
  name: { ar: 'مكان 6', en: 'place 6' },
  category: '5f1f870cc9daf328d45a78d7',
  location: { longitude: 30, latitude: 15 },
  addressDescription: 'desc',
  coverImg: 'http://127.0.0.1:4444/uploads/fab6b698-2290-43bd-8d9a-864faea3392d.jpg',
  locationPlaceName: 'Jebrat al Sheikh, Sudan',
  createdAt: '2020-07-28T02:01:52.255Z',
  updatedAt: '2020-07-28T02:01:52.255Z',
  id: 6,
  logo: 'http://127.0.0.1:4444/uploads/3774deca-0e76-4766-8fa2-cac294f6796c.jpg',
  imgs: ['http://127.0.0.1:4444/uploads/2b6b375c-eb23-41f3-bc11-160f060578a8.jpg'],
  workingPeriod: [{ weekDay: 5, startHour: '8:00AM', endHour: '4:00PM' }],
  activated: true,
};

describe('Recheck on failed cases on assertion', () => {
  test('should pass in all of the following', () => {
    resAssert({
      res: { body: resBody },
      assert: {
        body: {
          logo: 'string',
          imgs: ['string'],
          activated: 'boolean',
          workingPeriod: [
            {
              weekDay: 'number',
              startHour: 'string',
              endHour: 'string',
            },
          ],
          id: 'number',
          name: {
            ar: 'string',
            en: 'string',
          },
          addressDescription: 'string',
          locationPlaceName: 'string',
          category: 'string',
          rating: 'number',
          location: {
            longitude: 'number',
            latitude: 'number',
          },
          createdAt: 'string',
          updatedAt: 'string',
          coverImg: 'string',
        },
      },
    });
  });
});
