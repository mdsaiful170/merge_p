// //alert dia display alrt hoy
// // alert('hello world vai tanki shala');


// //consol.log dia api anna hoy
// console.log('hala output');


// //ata dia document any type run hoy (jemon text )
// // document.write('halal javascript');


// //=========================================
// //javascript type run

// // arry  
// //string
// //float 
// //double //


// //=============================
// // bariable crry type names
// // bar
// //let
// //const



// //=================================================
// // var fristName = 'MdSaiful';
// // document.write(`<h1>${fristName}<`);
// //=========================================================


// //integer
// var num = 20;
// console.log(num)
// //==============================
// //folat
// var num2 = 3.54
// console.log(num2)

// // ============================
// //sring
// var names = 'mdsaiful';
// console.log(names);

// // ==================================
// //arrry
// var fruits = ['am', 'jum', 'katal', '10', '12', '14'];
// console.log(fruits[5]);
// // document.write(fruits[3])


// //=================

// //object
// var object1 = {
//  fname: 'Nname',
//  age: '60',
//  addres: 'canada',
//  status: 'unmarried',
// }
// // document.write(object1);
// console.log(object1.age)
// console.log(object1.addres)


// //==================================================
// //addtion
// var a = 20;
// var b = 30;
// var result = a / b;
// console.log(result)

// //===============================

// // copare

// var a1 = 58;
// var a2 = 55;
// console.log(a1 == a2)


// //logical oparator

var x = 20;
var y = 30;

// console.log(x>y && x<y )

console.log(x < 10 || y < 10)

console.log(x != y)
// // ==================================================

// //conditonal opatrator ba tranari oparator

var ab = 10;
var ac = 20;
console.log(10 < 20 ? 'true' : 'false')



/////////control flow holo (if, else)

var age = 19;
if(age<=10){
    console.log('child');
}
else if(age<18){
    console.log("adult");
}
else{
  console.log('no age')
}


// ===========
var age = 60;

if(age<=10){
    console.log('child');
}
else if(age<=18){
    console.log('adult');
}
else if(age<=40){
    console.log('yanug');
}
else if(age<=60){
    console.log('old');
}
else {
    console.log('no-age');
}
// ==============================================================

// loop js ...3 items--strating , ending, increasing
var i=10;
while(i>0){
    console.log(i)
    i--;
}
// =======================
var i=1;
do{
    console.log(i);
    i++;
}
while(i<10);
// ==================================
for (var i=1; i<10; i++){
    console.log(i)
}

// ==========array for of loop?

var arrry = ['am', 'jam', 'kola', 'licu', 'shukti']
for(var x of arrry){
    console.log(x)
}
// =============================object for in loop
var man={
    name:'saiful',
    roll:'1400',
    age:'50',
    address: 'sylhet'
}

for(var x in man){
    console.log(x);
    console.log(man[x]);
}

// ================================multiple
var man=[{
    name1:'mehedi',
    age:'10',
    address:['sylhet','shunamgong' ]
},

{
    name2:'k',
    age:'25',
    address:['dhaka', 'shodor']
}
]
console.log(man[1].address[0])




// ====== function work =========================================

//this name function is normal 
function demo(){
    console.log('hello world')
}
demo()
demo()
demo()
demo()

//retrun function==========================================================


function sai(){
    return 'hello'
}
var s=sai();
console.log(s)


//paramitter function======================

function demo1(a,b,c){
  console.log(a)
  console.log(b)
  console.log(c)
}
demo1('dal', 2, 5)