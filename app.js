// console.log(firebase)

// send data to db

// key = firebase.database().ref('/Books').child('It').push().getKey()
// var obj = {
//     key : key,
//     book_name  : 'Computer Book Alg',
//     Author : "Usman",
// // detail  :"kkkkkkkkkk",
//     image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSB1xCFNA_uP45tCTdlTsJTgKQi-Zsfb2lnQ&usqp=CAU'
// }




// firebase.database().ref('/Books/It').child(key).set(obj)
// .then((data)=>{
//     console.log("Submit")
// })
// .catch((err)=>{
//     console.log("error")
// })


// all books show


var data = document.getElementById('books')

function book() {


    firebase.database().ref('/Books').child('It').once('value', (snap) => {
        var data2 = snap.val()


        var value = Object.values(data2)
        value.map((v, i) => {

            document.getElementById('books').innerHTML += `   <div class="card" id="card" data-aos="flip-up" style="width: 18rem; margin: 40px;">
      <img src=${v.image} class="card-img-top" alt="...">
      <div class="card-body">
      <h1>${v.Author}</h1>
          <p class="card-text"> 
          ${v.detail}
           </p>
      </div>
  </div>`
        })
    })
}

// search func


function searchbook(){
    document.getElementById('books').innerHTML = ''
    var inp = document.getElementById('myinput').value;

    firebase.database().ref('/Books').child('/It').orderByChild('Author').equalTo(inp).once('value', (snap) => {
        var data2 = snap.val()


        var value = Object.values(data2)
        value.map((v, i) => {

            document.getElementById('books').innerHTML += `   <div class="card" id="card" data-aos="flip-up" style="width: 18rem; margin: 40px;">
      <img src=${v.image} class="card-img-top" alt="...">
      <div class="card-body">
      <h1>${v.Author}</h1>
          <p class="card-text"> ${v.detail} </p>
      </div>
  </div>`
        })
    })
}


