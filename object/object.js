const credentials = {
  user: 'jane',
  password: '123@abc',
  age: 19,
  address: {
    phone: 12345678,
  },
};

// cloning objects.
const clone = {};
Object.assign(clone, credentials);

// freezing cannot add new properties, you cannot modify the existing values or their descriptors, cannot delete existing properties.
// NOTE: nested objects are not frozen
Object.freeze(clone);

// deep cloning
var copy = JSON.parse(JSON.stringify(credentials));

// iteration
for (var credential in credentials) {
  console.log(credential);
  // to check if an object has a property
  Object.hasOwnProperty(credential);
}

// merging objects
var obj1 = {
  user: 'jane',
};
var obj2 = {
  user: 'joe',
};
var obj3 = {
  user: 'james',
};

var composite = Object.assign(obj1, obj2, obj3);

// indexing strings
var user_name = 'jane';
Object.assign({}, user_name); // return { '0': 'j', '1': 'a', '2': 'n', '3': 'e' }

// spreading
var obj1 = { 1: 'a' };

var obj2 = { ...obj1, 2: 'b' };

// define property
var obj = {};

Object.defineProperty(obj, 'name', {
  value: 'jane',
  // passing descriptors.
  writable: false, // read only
  configurable: false, // cannot be changed.
  enumerable: false, // cannot be looped over
});

// defining many properties
function define_user(name, age) {
  return Object.defineProperties(obj, {
    property1: {
      value: name,
      // passing descriptors.
      writable: false, // read only
      configurable: false, // cannot be changed.
      enumerable: true, // cannot be looped over
    },
    property2: {
      value: age,
      // passing descriptors.
      writable: true, // read only
      configurable: true, // cannot be changed.
      enumerable: true, // cannot be looped over
    },
  });
}
// usage
console.log(define_user('jane', 19));

// sealing objects.
// prevents addition or removal of properties by allow property changes.
Object.seal(obj);

// converting to array.
Object.values(obj);

// getting the description of a property
Object.getOwnPropertyDescriptor(obj, 'name');