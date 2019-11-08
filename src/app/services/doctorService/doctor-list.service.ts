
export class DoctorListService {
  doctors = [
    {
      id: 1,
      name: 'Dr. Faruk',
      image: 'dr1',
      hospitalAddress: 'Osmani Hospital',
      description: 'Lorem  amet consectlestias a magni numquam vitae quae odio amet dolore rerum!',
      chambers: [
        {
          id: 1,
          name: 'Chamber 1.1',
          chamberAddress: '123/df hawapara'
        },
        {
          id: 2,
          name: 'Chamber 1.2',
          chamberAddress: '123/df hawapara'
        },
        {
          id: 2,
          name: 'Chamber 1.3',
          chamberAddress: '123/df hawapara'
        }
      ]
    },
    {
      id: 2,
      name: 'Dr. Omer',
      image: 'dr2',
      hospitalAddress: 'North-East Hospital',
      description: 'Lorem  amet consectlestias a magni numquam vitae quae odio amet dolore rerum!',
      chambers: [
        {
          id: 1,
          name: 'Chamber 2.1',
          chamberAddress: '123/df hawapara'
        }
      ]
    }
  ];
}
