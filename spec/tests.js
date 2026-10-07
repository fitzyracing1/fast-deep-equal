'use strict';

module.exports = [
  {
    description: 'scalars',
    tests: [
      {
        description: 'equal numbers',
        value1: 1,
        value2: 1,
        equal: true
      },
      {
        description: 'not equal numbers',
        value1: 1,
        value2: 2,
        equal: false
      },
      {
        description: 'number and array are not equal',
        value1: 1,
        value2: [],
        equal: false
      },
      {
        description: '0 and null are not equal',
        value1: 0,
        value2: null,
        equal: false
      },
      {
        description: 'equal strings',
        value1: 'a',
        value2: 'a',
        equal: true
      },
      {
        description: 'not equal strings',
        value1: 'a',
        value2: 'b',
        equal: false
      },
      {
        description: 'empty string and null are not equal',
        value1: '',
        value2: null,
        equal: false
      },
      {
        description: 'null is equal to null',
        value1: null,
        value2: null,
        equal: true
      },
      {
        description: 'equal booleans (true)',
        value1: true,
        value2: true,
        equal: true
      },
      {
        description: 'equal booleans (false)',
        value1: false,
        value2: false,
        equal: true
      },
      {
        description: 'not equal booleans',
        value1: true,
        value2: false,
        equal: false
      },
      {
        description: '1 and true are not equal',
        value1: 1,
        value2: true,
        equal: false
      },
      {
        description: '0 and false are not equal',
        value1: 0,
        value2: false,
        equal: false
      },
      {
        description: 'NaN and NaN are equal',
        value1: NaN,
        value2: NaN,
        equal: true
      },
      {
        description: '0 and -0 are equal',
        value1: 0,
        value2: -0,
        equal: true
      },
      {
        description: 'Infinity and Infinity are equal',
        value1: Infinity,
        value2: Infinity,
        equal: true
      },
      {
        description: 'Infinity and -Infinity are not equal',
        value1: Infinity,
        value2: -Infinity,
        equal: false
      }
    ]
  },

  {
    description: 'objects',
    tests: [
      {
        description: 'empty objects are equal',
        value1: {},
        value2: {},
        equal: true
      },
      {
        description: 'equal objects (same properties "order")',
        value1: {a: 1, b: '2'},
        value2: {a: 1, b: '2'},
        equal: true
      },
      {
        description: 'equal objects (different properties "order")',
        value1: {a: 1, b: '2'},
        value2: {b: '2', a: 1},
        equal: true
      },
      {
        description: 'not equal objects (extra property)',
        value1: {a: 1, b: '2'},
        value2: {a: 1, b: '2', c: []},
        equal: false
      },
      {
        description: 'not equal objects (different property values)',
        value1: {a: 1, b: '2', c: 3},
        value2: {a: 1, b: '2', c: 4},
        equal: false
      },
      {
        description: 'not equal objects (different properties)',
        value1: {a: 1, b: '2', c: 3},
        value2: {a: 1, b: '2', d: 3},
        equal: false
      },
      {
        description: 'equal objects (same sub-properties)',
        value1: { a: [ { b: 'c' } ] },
        value2: { a: [ { b: 'c' } ] },
        equal: true
      },
      {
        description: 'not equal objects (different sub-property value)',
        value1: { a: [ { b: 'c' } ] },
        value2: { a: [ { b: 'd' } ] },
        equal: false
      },
      {
        description: 'not equal objects (different sub-property)',
        value1: { a: [ { b: 'c' } ] },
        value2: { a: [ { c: 'c' } ] },
        equal: false
      },
      {
        description: 'empty array and empty object are not equal',
        value1: {},
        value2: [],
        equal: false
      },
      {
        description: 'object with extra undefined properties are not equal #1',
        value1: {},
        value2: {foo: undefined},
        equal: false
      },
      {
        description: 'object with extra undefined properties are not equal #2',
        value1: {foo: undefined},
        value2: {},
        equal: false
      },
      {
        description: 'object with extra undefined properties are not equal #3',
        value1: {foo: undefined},
        value2: {bar: undefined},
        equal: false
      },
      {
        description: 'nulls are equal',
        value1: null,
        value2: null,
        equal: true
      },
      {
        description: 'null and undefined are not equal',
        value1: null,
        value2: undefined,
        equal: false
      },
      {
        description: 'null and empty object are not equal',
        value1: null,
        value2: {},
        equal: false
      },
      {
        description: 'undefined and empty object are not equal',
        value1: undefined,
        value2: {},
        equal: false
      },
      {
        description: 'objects with different `toString` functions returning same values are equal',
        value1: {toString: ()=>'Hello world!'},
        value2: {toString: ()=>'Hello world!'},
        equal: true
      },
      {
        description: 'objects with `toString` functions returning different values are not equal',
        value1: {toString: ()=>'Hello world!'},
        value2: {toString: ()=>'Hi!'},
        equal: false
      }
    ]
  },

  {
    description: 'arrays',
    tests: [
      {
        description: 'two empty arrays are equal',
        value1: [],
        value2: [],
        equal: true
      },
      {
        description: 'equal arrays',
        value1: [1, 2, 3],
        value2: [1, 2, 3],
        equal: true
      },
      {
        description: 'not equal arrays (different item)',
        value1: [1, 2, 3],
        value2: [1, 2, 4],
        equal: false
      },
      {
        description: 'not equal arrays (different length)',
        value1: [1, 2, 3],
        value2: [1, 2],
        equal: false
      },
      {
        description: 'equal arrays of objects',
        value1: [{a: 'a'}, {b: 'b'}],
        value2: [{a: 'a'}, {b: 'b'}],
        equal: true
      },
      {
        description: 'not equal arrays of objects',
        value1: [{a: 'a'}, {b: 'b'}],
        value2: [{a: 'a'}, {b: 'c'}],
        equal: false
      },
      {
        description: 'pseudo array and equivalent array are not equal',
        value1: {'0': 0, '1': 1, length: 2},
        value2: [0, 1],
        equal: false
      }
    ]
  },
  {
    description: 'Date objects',
    tests: [
      {
        description: 'equal date objects',
        value1: new Date('2017-06-16T21:36:48.362Z'),
        value2: new Date('2017-06-16T21:36:48.362Z'),
        equal: true
      },
      {
        description: 'not equal date objects',
        value1: new Date('2017-06-16T21:36:48.362Z'),
        value2: new Date('2017-01-01T00:00:00.000Z'),
        equal: false
      },
      {
        description: 'date and string are not equal',
        value1: new Date('2017-06-16T21:36:48.362Z'),
        value2: '2017-06-16T21:36:48.362Z',
        equal: false
      },
      {
        description: 'date and object are not equal',
        value1: new Date('2017-06-16T21:36:48.362Z'),
        value2: {},
        equal: false
      },
      {
        description: 'invalid dates are equal (issue #138)',
        value1: new Date('foo'),
        value2: new Date('bar'),
        equal: true
      },
      {
        description: 'invalid date and valid date are not equal (issue #138)',
        value1: new Date('foo'),
        value2: new Date(2017, 5, 16),
        equal: false
      }
    ]
  },
  {
    description: 'RegExp objects',
    tests: [
      {
        description: 'equal RegExp objects',
        value1: /foo/,
        value2: /foo/,
        equal: true
      },
      {
        description: 'not equal RegExp objects (different pattern)',
        value1: /foo/,
        value2: /bar/,
        equal: false
      },
      {
        description: 'not equal RegExp objects (different flags)',
        value1: /foo/,
        value2: /foo/i,
        equal: false
      },
      {
        description: 'RegExp and string are not equal',
        value1: /foo/,
        value2: 'foo',
        equal: false
      },
      {
        description: 'RegExp and object are not equal',
        value1: /foo/,
        value2: {},
        equal: false
      }
    ]
  },
  {
    description: 'functions',
    tests: [
      {
        description: 'same function is equal',
        value1: func1,
        value2: func1,
        equal: true
      },
      {
        description: 'different functions are not equal',
        value1: func1,
        value2: func2,
        equal: false
      }
    ]
  },
  {
    description: 'objects with null prototype (issues #49, #111)',
    tests: [
      {
        description: 'empty objects with null prototype are equal',
        value1: nullProto({}),
        value2: nullProto({}),
        equal: true
      },
      {
        description: 'equal objects with null prototype',
        value1: nullProto({a: 1, b: '2'}),
        value2: nullProto({b: '2', a: 1}),
        equal: true
      },
      {
        description: 'not equal objects with null prototype (different values)',
        value1: nullProto({a: 1}),
        value2: nullProto({a: 2}),
        equal: false
      },
      {
        description: 'not equal objects with null prototype (different keys)',
        value1: nullProto({a: 1}),
        value2: nullProto({b: 1}),
        equal: false
      },
      {
        description: 'equal nested objects with null prototype (e.g. graphql-js results)',
        value1: nullProto({data: nullProto({user: nullProto({id: 1, tags: ['x']})})}),
        value2: nullProto({data: nullProto({user: nullProto({id: 1, tags: ['x']})})}),
        equal: true
      },
      {
        description: 'not equal nested objects with null prototype',
        value1: nullProto({data: nullProto({user: nullProto({id: 1})})}),
        value2: nullProto({data: nullProto({user: nullProto({id: 2})})}),
        equal: false
      },
      {
        description: 'object with null prototype and plain object are not equal (different prototypes)',
        value1: nullProto({a: 1}),
        value2: {a: 1},
        equal: false
      }
    ]
  },
  {
    description: 'objects with non-function valueOf / toString properties (issues #49, #141)',
    tests: [
      {
        description: 'equal objects with toString data property',
        value1: {field: 'status', fromString: 'To Do', toString: 'In Progress'},
        value2: {field: 'status', fromString: 'To Do', toString: 'In Progress'},
        equal: true
      },
      {
        description: 'not equal objects with toString data property',
        value1: {field: 'status', toString: 'In Progress'},
        value2: {field: 'status', toString: 'Done'},
        equal: false
      },
      {
        description: 'equal objects with valueOf data property',
        value1: {valueOf: 1},
        value2: {valueOf: 1},
        equal: true
      },
      {
        description: 'object with valueOf data property and empty object are not equal',
        value1: {valueOf: 'foo'},
        value2: {},
        equal: false
      },
      {
        description: 'object with toString data property and empty object are not equal',
        value1: {toString: 'foo'},
        value2: {},
        equal: false
      },
      {
        description: 'valueOf data property vs valueOf method are not equal',
        value1: {valueOf: 'x'},
        value2: {valueOf: function() { return 'x'; }},
        equal: false
      },
      {
        description: 'toString data property vs toString method are not equal',
        value1: {toString: 'x'},
        value2: {toString: function() { return 'x'; }},
        equal: false
      },
      {
        description: 'objects with null-valued valueOf and toString properties are equal',
        value1: {valueOf: null, toString: null, a: 1},
        value2: {valueOf: null, toString: null, a: 1},
        equal: true
      }
    ]
  },
  {
    description: 'sample objects',
    tests: [
      {
        description: 'big object',
        value1: {
          prop1: 'value1',
          prop2: 'value2',
          prop3: 'value3',
          prop4: {
            subProp1: 'sub value1',
            subProp2: {
              subSubProp1: 'sub sub value1',
              subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
            }
          },
          prop5: 1000,
          prop6: new Date(2016, 2, 10)
        },
        value2: {
          prop5: 1000,
          prop3: 'value3',
          prop1: 'value1',
          prop2: 'value2',
          prop6: new Date('2016/03/10'),
          prop4: {
            subProp2: {
              subSubProp1: 'sub sub value1',
              subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
            },
            subProp1: 'sub value1'
          }
        },
        equal: true
      }
    ]
  }
];

function func1() {}
function func2() {}

function nullProto(obj) {
  var o = Object.create(null);
  for (var key in obj) o[key] = obj[key];
  return o;
}
