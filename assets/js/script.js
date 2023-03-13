"use strict";

//async -   ayri-ayri methodlarin paralel sekilde islemesi

let users = [                  //JSON-data
    {
        name: "Mubariz",
        surname: "Agayev",
        age: 18
    },

    {
        name: "Aqsin",
        surname: "Hummatov",
        age: 27
    },

    {
        name: "Pervin",
        surname: "Rehimli",
        age: 26
    },

    {
        name: "Mirze",
        surname: "Bashirzade",
        age: 27
    },

    {
        name: "Xacker",
        surname: "Akberov",
        age: 20
    },

];


// function getUsersByName(str) {           //search users by name

//     setTimeout(() => {

//         let result = users.filter(m => m.name.includes(str))
//         console.log(result)
//     }, 3000);


// }
// getUsersByName("r");




//SETTIMEOUT - her methoda ayri saniye veririk ve methodlar birbirinden asli olmurlar



// let ul = document.querySelector("ul");


// function getUsers() {
//     setTimeout(() => {       //nece muddete bu bas versin  

//         let str = "";

//         users.forEach(user => {

//             str += ` <li class="list-group-item"><b>${user.name}-</b><b>${user.surname}-</b><b>${user.age}</b></li>`
//         });
//         ul.innerHTML = str;     //kod seliqesi ucun

//     }, 2000);

// }
// getUsers();


// function createUser(user,callback){     //yeni user crate
// setTimeout(() => {
//     users.push(user)  //yarat bitir
//     callback();   //sonra datalari gorset asixron olur bunlar
// }, 3000);
// }

// createUser({ name: "Elcan", surname: "Qurbanov", age: 20 }, getUsers);  //anonim object gonderik methoda 


//PROMISE -senden geden requestin cavabin gozedemek


// function createUser(user) {     //

//     return new Promise((resolved, rejected) => {       //promise iki parametr gebul edir resolve-isinin hell olmasi
//         setTimeout(() => {                            //reject hell olmadi erro var demekdi
//             users.push(user)
//             let err = false;              //error yoxdu bilidirrik
//             // let err=true;              //error var bildirik 
//             if (!err) {
//                 resolved(users)
//             } else {
//                 rejected("Something is wrong")            //error varsa rejecte girir
//             }

//         }, 3000);

//     })

// }

// createUser({ name: "Elcan", surname: "Qurbanov", age: 20 }).then(response => {

//     // console.log(users)   //resolve olanda gorset
//     // console.log(response)  //resolved methoda parametr gonderib consola response yazdirsan eyni seyi gorsedecek
//      getUsers(response);
// }).catch(err=>{               //reject olanda gorset yani sehvlik-error varsa
//     console.log(err)
// })

// //backende hansisa methoda request atiriq orda cavab sucses(resolve) veya failed(reject) gele biler


// let ul = document.querySelector("ul");


// function getUsers(datas) {
//     setTimeout(() => {        

//         let str = "";


//         datas.forEach(user => {

//             str += ` <li class="list-group-item"><b>${user.name}-</b><b>${user.surname}-</b><b>${user.age}</b></li>`
//         });
//         ul.innerHTML = str;   

//     }, 2000);

// }
//promisde panding-request gedir gozleme merhelesi
//CreateUser methodu bize Promise qaytarir ve biz methodu cagirdiqdan sonra "then " istifade ederek anonim method isledirik
//Promise bize rahat error tutma imkani verir(resolve,reject)hissesi var



//JSON-data transferi ucundu frontla backend arasinda daha suretli- formatdi
//XML-oda transefri ucundu format

//API-UI yoxdu yalniz  methodlardan ibaretdi 
//NVC-front lahiyeni kodalrini birlesdireceyik backend kodlariynan visual studiyada


//FETCH-request atmaq ucun backende ve dataalri elde etmek ucun



//get request -data goturur
//post request-dataya mueyen deyisikler etmek

// function getAllPosts() {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)   //request atiriq
//         .then(response => response.json())        //then varsa arxa planda Promise isleyir  //response datalari jsona ceviririk
//         .then(datas => {                              //datalari mutleq Jsona cevirmeliyik

//             let str = "";

//             datas.forEach(data => {                      //ve datalari ul-eye yazdiriq

//                 str += ` <li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userId}</b></li>`
//             });
//             ul.innerHTML = str;

//         })

// }
// getAllPosts();


//  function getPostById(id){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)   //request atiriq
//     .then(response => response.json())        //then varsa arxa planda Promise isleyir  //response datalari jsona ceviririk
//     .then(res => {                              //datalari mutleq Jsona cevirmeliyik 
//         // ul.innerHTML += ` <li class="list-group-item"><b>${res.id}-</b><b>${res.body}-</b><b>${res.userId}</b></li>`

//         alert(res.id + "-" + res.body)

//     })
//  }

//  getPostById(3);



// setTimeout(() => {
//     let elems = document.querySelectorAll("ul li");

//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"))
//             getPostById(id)
//         })
//     })
// }, 2000);

// //AJAX-request atmaqa ucundu backende fetch kimi-ferqleri ondadiki NVC de seyfe request atanda refresh olmasin deye ajax istifade etmeliyik


// async function getPostById(id) {
//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

//     console.log(data)   //fetch bize promise qaytarir onun ucunde biz async sozun functionun qabaqina yazib fetch qarsisina await yaziriq
//                           //yani gozle promise cavabini gozle ele gorset

//     let result = await data.json()      //ve sonra await yazanda sonra bize response verir ve bizde datani onun icerisinden .json yazib cixardiq
//                                   //lakin oda bize datalar hazir deyil deye promise verir onun ucun yene qarsisina await yaziriq yani promise pednding olsun sonra gorset

//      alert(result.id + "-" + result.body)

// }                                 


$(function () {
    $("button").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts", success: function (datas) {
                let str = "";

                datas.forEach(data => {                      //ve datalari ul-eye yazdiriq

                    str += ` <li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userId}</b></li>`
                });
                $("ul").html(str)
            }
        });
    });



})

//axios-da fetch ve ajax mentiqindedi