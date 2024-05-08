// $(document).ready(function () {
//     $('.hidebtn').click(function () {
//         $('.headding').mousInr(300);
//     });

//     $('.showbtn').click(function () {
//         $('.headding').fadeIn(300);
//     });



// });

// ==============
var num = 50;
if(num<=10){
    console.log('child');
}
else if(num>10){
    console.log('adult');
}
else if(num>20){
    console.log("elder");
}
else if (num<100){
    console.log("senior citizen")
}
else{
    console.log('no age');
}
// =================

var i = 10;
while (i > 0) {
    console.log(i)
    i--;
}

var i = 5;
while (i < 20) {
    console.log(i);
    i++;
}

var i = 10;
do {
    console.log(i);
    i--;
}
while (i > 0);



var i = 50;
do {
    console.log(i);
    i--;

}
while (i > 0);


let age = 100;

if (age <= 10) {
    console.log('child');
}
else if (age > 20) {
    console.log("elder");
}
else if (age > 30) {
    console.log('yuang');
}
else if (age <= 50) {
    console.log('old');
}
else {
    console.log("no age")
}



for (var i = 0; i < 10; i++) {
    console.log(i)
}

var item = ['saiful', 'islam', 'ready', 'jeson'];
for (var item_in of item) {
    console.log(item_in)
};

var info = {
    name: 'saiful',
    age: '50',
    address: 'sylhet',
    religion: 'islam'
}
for (var info_in in info) {
    console.log(info[info])
}

var man1 = [{
    name:'saiful',
    roll:'1400',
    age:'50',
    address: ['sylhet','shunamgong' ]
},
{
    name1:'mehedi',
    age:'10',
    address:['sylhet','shunamgong' ]
}
]

console.log(man1[1].address[1])



// function a (){
//     console.log('saiful islam');
// }

// a()
// a()
// a()

function b (){
    return 'saiful islam';
}
var c = b()
console.log(c)
console.log(c)
console.log(c)


function demo(sai, oggy, lol){
    console.log(sai)
    console.log(oggy)
    console.log(lol)
}
demo('10', '20', 'saiful')


function result (x,y,z){
    console.log(x)
    console.log(y)
    console.log(z)
}

result('10' , '20' , '30')