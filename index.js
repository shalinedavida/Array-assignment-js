let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where",12,56];

let lastElementArr1 = arr1[arr1.length - 1];
let lastElementArr2 = arr2[arr2.length - 1];
 console.log({lastElementArr1});
 console.log({lastElementArr2});

  let myPets = ["Cow", "Bird", "Snake", "Dog"];
  let Pets = myPets.join(" ,")
  console.log({Pets});

  var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
  let arr4 = arr3.sort()
  console.log({arr4});
  
  let arr = ["boy", "man", "girl", "school", "girl", "woman"];

function removeDuplicates(array) {
    return [...new Set(array)];
}
function findDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) !== index);
}

let uniqueArray = removeDuplicates(arr);
console.log({uniqueArray});

let duplicatesArray = findDuplicates(arr);
console.log({duplicatesArray}); 

let arr5 = ["the", "way", "x", 4];
if(arr5.includes("food")){
    console.log("is present");
}

  else{
    console.log("the search word was not found");
    
  }

 let word = "renniw"
 let word2= word.split('').sort().join('');
 console.log({word2});

 let fruits = ['mango','grapes','watermelon','strawberry','apple','orange','tangerine','kiwi','thornmelon','banana'];
 fruits.splice(4, 0, 'Tomato');
 console.log({fruits});
 
 
