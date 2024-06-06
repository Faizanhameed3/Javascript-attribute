// function factorial(number) {
//     var eleMent = 1;
//     for (let index = number; index > 0; index--) {
//         eleMent = eleMent * index
        
//     }
//     return eleMent
// }

// var userINfo = +prompt('Entre')
// var eleMent = factorial(userINfo)
// document.write('<center>', '<b>',  eleMent,);
// // console.log(eleMent);




// var pElement = document.getElementById('para')

// var tex = document.createTextNode(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo ut quisquam dolorem? Perspiciatis quisquam aperiam quia odit quibusdam, doloremque itaque sequi tempore minus officia, incidunt animi ullam, officiis delectus.')
// pElement.appendChild(tex)
// console.log(tex);

// var eleMent = document.querySelector('p')
// var eleMent = document.querySelectorAll('p')
// console.log(eleMent);

// var user1 = +prompt('1')
// var user2 = +prompt('2')
// for (let index = user1; index <= user2; index++) {
//     var let = index + "0"

//     console.log(let);
// }


// var faizzy = {
//     name: 'faizy',
//     age: 20,
//     address: 'Jail Road',
//     hobi: "Other Moment",
//      Here: "Loverr",   
// }
// console.log( faizzy);


// Advance hai ye
// class Faizzy{
//     submit(){
//         alert("Yes Submit")
//     }
//     cancle(){
//         alert('No Cancle')
//     }

// }

// let loverr = new Faizzy()
// let Here = new Faizzy()

// loverr.submit()
// loverr.cancle()
// Here.cancle()



function FORre(number, base) {
var result = number * number + base * base 

 result = Math.sqrt(result)
return result
}
var show = FORre(11,5)
console.log(show);
