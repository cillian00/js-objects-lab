const aCar = {
  owner : "Joe Bloggs",
  address : "3 Walkers Lane",
  type: {
    make: 'Toyota',
    makeType: 'Corola 1.8',
  },
  registration : {  

    year: '201',
    countryCode: 'WD',
    number: '1058'
  },
  mileage: 10000,
	colour: {
		interior: {
			texture: 'leather',
			shade : 'cream'
		},
		exterior: 'red'
	},     
  previous_owners: [
    { name : ' .......', address : '.......'}
  ],
};


console.log('First owner : ' + aCar.previous_owners[0] )
console.log(aCar.owner + ' drives a ' + aCar.type.make + ' and his reg is ' + aCar.registration.year + '-' + aCar.registration.countryCode + '-' + aCar.registration.number);
console.log('It is a ' + aCar.colour.exterior + ' car,' + aCar.mileage + ' mileage, with a ' + aCar.colour.interior.texture + ' interior..');