const aCar = {
  owner : "Joe Bloggs",
  type: {
    make: 'Toyota',
    makeType: 'Corola 1.8',
  },
  registration : {  

    year: '201',
    countryCode: 'WD',
    number: '1058'
  } 
};

console.log(aCar.owner + ' drives a ' + aCar.type.make + ' and his reg is ' + aCar.registration.year + '' + aCar.registration.countryCode + '' + aCar.registration.number);