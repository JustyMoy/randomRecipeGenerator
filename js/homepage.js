// // //Example fetch using pokemonapi.co
// document.querySelector('#random').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://www.themealdb.com/api/json/v1/1/random.php`


//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.meals)

//         document.querySelector('.foodName').innerText = data.meals[0].strMeal
//         document.querySelector('img').src = data.meals[0].strMealThumb
//         // document.querySelector('').innerText= data.meals[0].strYoutube 
        
//         const a = document.createElement('a')
//         let linkText = document.createTextNode('youtube link');
//         a.appendChild(linkText);
//         a.href = data.meals[0].strYoutube
//         document.querySelector('.foodName').appendChild(a);

      

        
//         document.querySelector('#foodType').innerText = data.meals[0].strInstructions

//         // document.querySelector('h2').innerText = data.meals[0].strMeal
//         document.querySelector('h3').innerText = data.meals[0].strArea

//         document.querySelector('h4').innerText = data.meals[0].strCategory


//         document.querySelector('#foodType').innerText = data.meals[0].strTags

//        document.querySelector('.ing1').innerText = `${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`
//        document.querySelector('.ing2').innerText = `${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`
//        document.querySelector('.ing3').innerText = `${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`
//        document.querySelector('.ing4').innerText = `${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`
//        document.querySelector('.ing5').innerText = `${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`
//        document.querySelector('.ing6').innerText = `${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`
//        document.querySelector('.ing7').innerText = `${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`
//        document.querySelector('.ing8').innerText = `${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`
//        document.querySelector('.ing9').innerText = `${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`
//        document.querySelector('.ing10').innerText = `${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`
//        document.querySelector('.ing11').innerText = `${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}`
//        document.querySelector('.ing12').innerText = `${data.meals[0].strMeasure12} ${data.meals[0].strIngredient12}`
//        document.querySelector('.ing13').innerText = `${data.meals[0].strMeasure13} ${data.meals[0].strIngredient13}`
//         // if(ing2 === "" || ing ===" " || ing ===null){
//         //   // ing.style.display="none"
//         //   alert('it work g dam it!!')
//         // }
//         document.querySelector('.ing14').innerText = `${data.meals[0].strMeasure14} ${data.meals[0].strIngredient14}`
//         document.querySelector('.ing15').innerText = `${data.meals[0].strMeasure15} ${data.meals[0].strIngredient15}`
//         document.querySelector('.ing16').innerText = `${data.meals[0].strMeasure16} ${data.meals[0].strIngredient16}`
//         document.querySelector('.ing17').innerText = `${data.meals[0].strMeasure17} ${data.meals[0].strIngredient17}`
//         document.querySelector('.ing18').innerText = `${data.meals[0].strMeasure18} ${data.meals[0].strIngredient18}`
//         document.querySelector('.ing19').innerText = `${data.meals[0].strMeasure19} ${data.meals[0].strIngredient19}`
//         document.querySelector('.ing20').innerText = `${data.meals[0].strMeasure20} ${data.meals[0].strIngredient20}`

        
                    
//         const li = document.createElement('section')
//         //add text to li
//         li.textContent = data.meals[0].strInstructions
//         //append the li to the ul
//         document.querySelector('#foodType').appendChild(li)


//        document.querySelector('a').onclick = function openInNewTab(event){
//         window.open(a);
//         event.preventDefault();
//         }

//       })


  

// //         // document.querySelector('h2').innerText = data.meals[0].strMeal
// //         // document.querySelector('h3').innerText = data.meals[0].strArea

// //         // document.querySelector('h4').innerText = data.meals[0].strCategory
// //         // document.querySelector('#url').innerText = data.meals[0].strInstructions

// //         // document.querySelector('iframe').innerText = data.meals[0].strYoutube


// //         let youTube = data.meals[0].strYoutube + "&output=embed";  //use this to open youtube with api youtube links
// //         window.open(youTube);

     

// //       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// document.querySelector('#random').addEventListener('click', getQ)

// function getQ(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.quotable.io/random`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.content)
      

//       document.querySelector('h4').innerText = data.content

//       })
//     .catch(err => {
//       console.log(`error ${err}`)
//   });
// }




  

// document.querySelector('#recipe').addEventListener('click', getRecipe)



// function getRecipe(){
//   const choose = document.querySelector('#foodie').value
//   const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${choose}`


  

//   fetch(url2)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)

//         // const foodObject = data.meals; //turn the message into an object
//         // const foodArray = Object.keys(foodObject) //turn the object into an array
//         // for (let i = 0; i < foodArray.length; i++) {
//         //     const option = document.createElement('option') //<option></option>
//         //     option.value = foodArray[i] //<option value = 'breed'
//         //     option.innerText = foodArray[i] //<option value = 'breed'>breed</option>  putting breed inside text
//         //     select.appendChild(option) //drop down selector has 'breeds' class, attach another tagg within parent tagg
//         // } list drop down works but can only make numbers and not meals
  
        

//         document.querySelector('h2').innerText = data.meals[0].strMeal
//         document.querySelector('h3').innerText = data.meals[0].strArea

//         document.querySelector('h4').innerText = data.meals[0].strCategory

//         // document.querySelector('#url').innerText = data.meals[0].strInstructions

//         document.querySelector('#foodType').innerText = data.meals[0].strTags

//         document.querySelector('img').src = data.meals[0].strMealThumb

        
//         document.querySelector('#foodType').innerText = data.meals[0].strInstructions

//         document.querySelector('.ing1').innerText = `${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`
//         document.querySelector('.ing2').innerText = `${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`
//         document.querySelector('.ing3').innerText = `${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`
//         document.querySelector('.ing4').innerText = `${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`
//         document.querySelector('.ing5').innerText = `${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`
//         document.querySelector('.ing6').innerText = `${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`
//         document.querySelector('.ing7').innerText = `${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`
//         document.querySelector('.ing8').innerText = `${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`
//         document.querySelector('.ing9').innerText = `${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`
//         document.querySelector('.ing10').innerText = `${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`
//         document.querySelector('.ing11').innerText = `${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}`
//         document.querySelector('.ing12').innerText = `${data.meals[0].strMeasure12} ${data.meals[0].strIngredient12}`
//         document.querySelector('.ing13').innerText = `${data.meals[0].strMeasure13} ${data.meals[0].strIngredient13}`
//          // if(ing2 === "" || ing ===" " || ing ===null){
//          //   // ing.style.display="none"
//          //   alert('it work g dam it!!')
//          // }
//          document.querySelector('.ing14').innerText = `${data.meals[0].strMeasure14} ${data.meals[0].strIngredient14}`
//          document.querySelector('.ing15').innerText = `${data.meals[0].strMeasure15} ${data.meals[0].strIngredient15}`
//          document.querySelector('.ing16').innerText = `${data.meals[0].strMeasure16} ${data.meals[0].strIngredient16}`
//          document.querySelector('.ing17').innerText = `${data.meals[0].strMeasure17} ${data.meals[0].strIngredient17}`
//          document.querySelector('.ing18').innerText = `${data.meals[0].strMeasure18} ${data.meals[0].strIngredient18}`
//          document.querySelector('.ing19').innerText = `${data.meals[0].strMeasure19} ${data.meals[0].strIngredient19}`
//          document.querySelector('.ing20').innerText = `${data.meals[0].strMeasure20} ${data.meals[0].strIngredient20}`

//         const a = document.createElement('a')
//         let linkText = document.createTextNode('youtube link');
//         a.appendChild(linkText);
//         a.href = data.meals[0].strYoutube
//         document.querySelector('.food2').appendChild(a);

//         document.querySelector('a').onclick = function openInNewTab(event){
//           window.open(a);
//           event.preventDefault();
//           }

//         // let youTube = data.meals[0].strYoutube + "&output=embed";  //use this to open youtube with api youtube links
//         // window.open(youTube);  //dont need two functions can open recipe and video at same time bc convenience 

//             // data.meals.forEach( obj => { 
           
//             // //cretate li
//             // const li = document.createElement('li')
//             // //add text to li
//             // li.textContent = obj.strInstructions
//             // //append the li to the ul
//             // document.querySelector('ul').appendChild(li)
            
         
//             // })
            
//             // const li2 = document.createElement('section')
//             // //add text to li
//             // li2.textContent = data.meals[0].strInstructions
//             // //append the li to the ul
//             // document.querySelector('#foodType').appendChild(ol)
         

//       })
//       .catch(err =>{
//         console.log(`error ${err}`)
//       });
//     }

//     document.querySelector('#recipe').addEventListener('click', getQ)

//     function getQ(){
//       const choice = document.querySelector('input').value
      const url = `https://api.quotable.io/random`
    
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data.content)
          
    
          document.querySelector('.welcome').innerText = data.content


    
          })
        .catch(err => {
          console.log(`error ${err}`)
      });
    

document.querySelector('h1').addEventListener('mouseover', getQ)

function getQ(){
  
  const url = `https://api.quotable.io/random`
    
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.content)
      

      document.querySelector('.welcome').innerText = data.content



      })
    .catch(err => {
      console.log(`error ${err}`)
  });
}

// // document.querySelector('iframe').addEventListener('click', run)

// // function run(){
// // let youTube = data.meals[0].strYoutube + "&output=embed";
// // window.location.replace(youTube);
// // }

// // let youTube = data.meals[0].strYoutube + "&output=embed";
// //const lastDrink = myArray[myArray.length - 1]; use to for random drink car