
//CLASSES IN JAVASCRIPT  ------------------------


//1:

// let a ={}

// console.log(a)
// console.log(typeof a)

//2:

let Student = {
    name:"nisha",
    age:24,
    technology:"javascript",
    designation:"java developer",
    conpanyName:"DOAGuru",
    'work experience': 3,
    parents:{
        mom:'smt. meena ',
        dad:'mr. kishan kumar',
        age:50
    }
}

// console.log(Student)
//console.log(Student.name)
//console.log(Student['age'])
//console.log(Student["work experience"])//we can not use (.) dot operator here 
//console.log(Student.parents.dad)
// console.log(Student['parents']['dad'])
// console.log(Student.parents.mom)
// console.log(Student['parents']['mom'])
// console.log(Student['parents'].mom)
// console.log(Student.parents['mom'])


// delete Student["work experience"]
// console.log(Student)

// delete Student.parents.age
// console.log(Student)


// for (let key in Student) {
//     console.log(key,Student[key])
// }

for(let key in Student.parents){
    console.log(key,Student.parents[key])
}