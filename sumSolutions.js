let user = {
    name: 'nitin',
    address: {
      personal: {
        city: 'Vapi',
        area: 'Desaiwad'
      },
      office: {
        city: 'Ahmedabad',
        area: {
          landmark: 'Bopal Gam'
        }
      }
    }
  }
  
  let finalObj = {};
  let converter = (obj, parent) => {
    for (let key in obj) {
      if(typeof(obj[key]) === 'object') {
        converter(obj[key], `${parent}_${key}`);
      } else {
        finalObj[parent + '_' + key] = obj[key];
      }
    }
  }
  
  // converter(user, 'user');
  // console.log(finalObj);
  
  let sum = (a) => (b) => b ? sum(a+b) : a;
  console.log(sum(8)(7)(9)(5)())
  
  