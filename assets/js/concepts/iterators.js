const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['tamles', 'pizza', 'chilaquiles',
                'pozole', 'tacos', 'maruchan'];

foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + ' 🎶');
console.log(foodsEmojis);

const sdoof = foods.map(food => {
    const separated = food.split('');
    const reversed = separated.reverse();
    const joined = reversed.join('');
    return joined;
    // food => food.split('').reverse().join('');
});

console.log(sdoof);

const nums = [1,2,3,4,5,6,7,8,9,10];

const cuadrados = nums.map(num => num ** 2);
console.log(cuadrados);

const cubos = nums.map(num => num ** 3);
console.log(cubos);

const mitades = nums.map(num => num / 2);
console.log(mitades);

// filter 
 const containsZ = foods.filter(food => food.includes('z'));
 console.log(foods);
 console.log(containsZ);

 const endsWidtS = foods.filter(food => food.endsWith('s'));
 console.log(endsWidtS);
 
 // pares, impares, numeros>5 y <4
 const pares = nums.filter(num => num % 0);
 const impares = nums.filter(num => num % 2);
 const mayoresCinco = nums.filter(num => num > 5);
 const menoresCinco = nums.filter(num => num < 5);
 console.log(pares)
 console.log(impares)
 console.log(mayoresCinco);
 console.log(menoresCinco);

 // forEach, map, filter
// reduce
 const sumatoria = nums.reduce((a, b) => a + b);
 const factorial = nums.reduce((a,b) => a * b);
 console.log(nums);
 console.log(sumatoria);
 console.log(factorial);

 // some(or) every(and)
 const positivos = nums.every(n => n > 0);
 console.log(positivos);
 const negativos = nums.every(n => n < 0);
 console.log(negativos);

 const ages = [20, 21, 25, 17, 18];
 const algunos_mayores = ages.some(age => age >= 18);
 console.log(algunos_mayores);
 const algunos_menores = ages.some(age => age < 18); 
 console.log(algunos_menores);

 const fruits = ['manzana', 'pera', 'uva', 'sandia', 'franbuesa'];

 const index_durazno = fruits.findIndex(fruit => fruit === 'pera');
 console.log(fruits[index_durazno]);