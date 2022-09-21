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
    { name : 'John', address : '1 Briot Avenue'},
    { name : 'John', address : '1 Briot Avenue'}

    
  ],
  features : ['Parking assist', 'Alarm', 'Tow-bar'],
};


console.log('First owner : ' + aCar.previous_owners[0] )
console.log(aCar.owner + ' drives a ' + aCar.type.make + ' and his reg is ' + aCar.registration.year + '-' + aCar.registration.countryCode + '-' + aCar.registration.number);
console.log('It is a ' + aCar.colour.exterior + ' car,' + aCar.mileage + ' mileage, with a ' + aCar.colour.interior.texture + ' interior..');
for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
} 
for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i].name);
}