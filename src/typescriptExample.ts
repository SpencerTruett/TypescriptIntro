// =======================================================

// Why use Typescript?
// errors shown while developing
// https://www.sitepoint.com/react-with-typescript-best-practices/

// When explicitly typing, colon separates variable and defined type

// =======================================================

// inferred type
let bar = 'word'

// explicit type

let foo: string = 'Hello'

// =======================================================

// numbers
let count = 12         //number
let num: number = 10  // number
const b = 42          // 42
let e: 30 = 30        //30

// =======================================================

// bigInt (signified by n)
let a = 3456n // bigInt

// =======================================================

// string
let a = 'hello'         // string
let c: string = "world" // string
const b = "bar"         // "bar"
let e: 'egg' = 'egg'    // "egg"

// =======================================================

// boolean

let a = true            // boolean
let b: boolean = false  // boolean
const c = true          // true
let d: true = true      // true

// =======================================================

// any
let typed: number = 100       // any
let myAny: any = '100'        // any
let anotherAny: any = 2       // 2
let sum = myAny + anotherAny  // 102
//allow implicit any

// =======================================================

// Objects
// specify the shape of the object

// infered types
let a = {
  b: 'hello',
  c: 'foo'
}

// explicit types
let d: { e: string } = {
  e: 'hello'
}

a = {
  b: 'world',
  c: "!!!"    // intentional error, cannot reassign c
}

// =======================================================

// optional (?) modifier
// where any field flagged by the ? is optinal
// a = {}

let myObjects: {
  readonly a: string
  b?: number                // optional b
  [key: number]: boolean
} = {
  a: 'apple',
  b: 5
}

// =======================================================

// Arrays
let a = [1, 2, 3]     // numbers[]
let b: string[] = ['foo', ' bar', 'baz']
let c: (string | number)[] = [1, 'apple', 42, '100']
let d = ['blue', 200, 'red']
let e = []    // any
a.push('5')
d.push(3)

// =======================================================

// functions
// no interference for parameters
function doubleNumber(foo: number): number {
  return foo * 2
}

// optional and default values c
function add(a: number, b: number = 20): number {
  return a + b
}

add(100)

// no return
const logNumber = (int: number): coid => {
  console.log((int))
}

let foo = logNumber(4)

// destructuring arguments
const user = {
  name: "Fred",
  location "TN"
}

const greeting = ({ name, location }: { name: string, location: string }) => {
  console.log('Hello ${name} from ${location}!')
}

// =======================================================

// Interfaces and types
// can't be declared twice
// block scoped

type name = string

let title: name = 'Sammy'

// defining initial interface
type pet = {
  name: string
  age: number
  sound: string
  common: boolean
}

let myDog: pet = {
  name: 'duff',
  age: 3,
  sound: 'bark',
  common: true
}

let myBird: pet = {
  name: 'tweety',
  age: 1,
  sound: 'chirp',
  common: true
}

let myLizard: pet = {
  name: 'drogo',
  age: 8,
  sound: 'bleep',
  common: true
}

type Sound = {
  sound: string
}

// must contain property sound from type Sound above to log 
function makeSound(entity: Sound) {
  console.log('sound', entity.sound)
}

makeSound(myDog)
makeSound(myBird)
makeSound(myLizard)

// =======================================================