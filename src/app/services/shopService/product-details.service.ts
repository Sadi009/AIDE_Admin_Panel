
export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export class ProductDetailsService {
  products: PeriodicElement[] = [
    {
      id: 1,
      name: 'Hydrogen',
      price: 1.0079,
      image: 'product1',
      description: `Hydrogen is a chemical element with image H and atomic number 1. With a standard
          atomic price of 1.008, hydrogen is the lightest element on the periodic table.`,
      quantity: 2
    }, {
      id: 2,
      name: 'Helium',
      price: 4.0026,
      image: 'product2',
      description: `Helium is a chemical element with image He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`,
      quantity: 2
    }, {
      id: 3,
      name: 'Lithium',
      price: 6.941,
      image: 'product3',
      description: `Lithium is a chemical element with image Li and atomic number 3. It is a soft,
          silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
          lightest solid element.`,
      quantity: 2
    }, {
      id: 4,
      name: 'Beryllium',
      price: 9.0122,
      image: 'product4',
      description: `Beryllium is a chemical element with image Be and atomic number 4. It is a
          relatively rare element in the universe, usually occurring as a product of the spallation of
          larger atomic nuclei that have collided with cosmic rays.`,
      quantity: 2
    }, {
      id: 5,
      name: 'Boron',
      price: 10.811,
      image: 'product5',
      description: `Boron is a chemical element with image B and atomic number 5. Produced entirely
          by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
          low-abundance element in the Solar system and in the Earth's crust.`,
      quantity: 2
    }, {
      id: 6,
      name: 'Carbon',
      price: 12.0107,
      image: 'product6',
      description: `Carbon is a chemical element with image C and atomic number 6. It is nonmetallic
          and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
          to group 14 of the periodic table.`,
      quantity: 2
    }, {
      id: 7,
      name: 'Nitrogen',
      price: 14.0067,
      image: 'product7',
      description: `Nitrogen is a chemical element with image N and atomic number 7. It was first
          discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
      quantity: 2
    }, {
      id: 8,
      name: 'Oxygen',
      price: 15.9994,
      image: 'product8',
      description: `Oxygen is a chemical element with image O and atomic number 8. It is a member of
           the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
           agent that readily forms oxides with most elements as well as with other compounds.`,
        quantity: 2
    }, {
      id: 9,
      name: 'Fluorine',
      price: 18.9984,
      image: 'product9',
      description: `Fluorine is a chemical element with image F and atomic number 9. It is the
          lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard,
          conditions.`,
      quantity: 2
    }, {
      id: 10,
      name: 'Neon',
      price: 20.1797,
      image: 'product10',
      description: `Neon is a chemical element with image Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`,
      quantity: 2
    },
    {
      id: 11,
      name: 'Hydrogen',
      price: 1.0079,
      image: 'product1',
      description: `Hydrogen is a chemical element with image H and atomic number 1. With a standard
          atomic price of 1.008, hydrogen is the lightest element on the periodic table.`,
      quantity: 2
    }, {
      id: 12,
      name: 'Helium',
      price: 4.0026,
      image: 'product2',
      description: `Helium is a chemical element with image He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`,
      quantity: 2
    }, {
      id: 13,
      name: 'Lithium',
      price: 6.941,
      image: 'product3',
      description: `Lithium is a chemical element with image Li and atomic number 3. It is a soft,
          silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
          lightest solid element.`,
      quantity: 2
    }, {
      id: 14,
      name: 'Beryllium',
      price: 9.0122,
      image: 'product4',
      description: `Beryllium is a chemical element with image Be and atomic number 4. It is a
          relatively rare element in the universe, usually occurring as a product of the spallation of
          larger atomic nuclei that have collided with cosmic rays.`,
      quantity: 2
    }, {
      id: 15,
      name: 'Boron',
      price: 10.811,
      image: 'product5',
      description: `Boron is a chemical element with image B and atomic number 5. Produced entirely
          by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
          low-abundance element in the Solar system and in the Earth's crust.`,
      quantity: 2
    }, {
      id: 16,
      name: 'Carbon',
      price: 12.0107,
      image: 'product6',
      description: `Carbon is a chemical element with image C and atomic number 6. It is nonmetallic
          and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
          to group 14 of the periodic table.`,
      quantity: 2
    }, {
      id: 17,
      name: 'Nitrogen',
      price: 14.0067,
      image: 'product7',
      description: `Nitrogen is a chemical element with image N and atomic number 7. It was first
          discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
      quantity: 2
    }, {
      id: 18,
      name: 'Oxygen',
      price: 15.9994,
      image: 'product8',
      description: `Oxygen is a chemical element with image O and atomic number 8. It is a member of
           the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
           agent that readily forms oxides with most elements as well as with other compounds.`,
      quantity: 2
    }
  ];
}
