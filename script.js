// let learning = document.querySelector('button');

// function enroll(){
//     let username = prompt("enter your name")
//     alert(`hello ${username}, you'er enrolled`)
// }

// addEventListener('click', enroll)


// function favouriteAnimal(animal){
//     let favAnimal = prompt("what is your favourite animal?")
//     alert(`your favourite animal is ${favAnimal}`)
//     console.log(`animal entered is ${favAnimal}`)
// }

// favouriteAnimal()

// A FUNCTION THAT ADD TWO NUMBERS
    // function add(one){
    //     let answer = one+7;
    //     return answer;
    // }
    // console.log(add(3))

// A FUNCTION THAT MULTIPLY TWO NUMBERS

    // function multiply(num1, num2){
    //     let answer = num1 *  num2;
    //     return answer;
    // }
    // console.log(multiply(2, 6))

// A FUNCTION THAT CAPITALIZE THE FIRST LATER IN A STRING
    // function capital(string){
    //     let upperCase = string.charAt(0).toUpperCase() + string.slice(1);
    //     console.log(upperCase)
    // }

    // capital("works well")


// a function called lastLetter that takes a string and returns the very last letter of that string:

    // function lastLetter(string){
    //     let last = string.slice(-1)
    //     console.log(last);
    // }

    // lastLetter("hello")


// fizzbuzz program
    function fizzBuzz(){
        let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
        // if((answer % 3===0) & (answer % 5 === 0)){
        //     alert('fizzbuzz')
        // }
        // else if(answer % 3 === 0){
        //     alert('fizz')
        // }
        // else if(answer % 3 === 0){
        //     alert('buzz');
        // }
        // else{
        //     alert(answer)
        // }

        for(let i = 1; i <= answer; i++){
            if((i % 3 === 0) & (i % 5 === 0)){
                alert("fizzbuzz")
            }
            else if(i % 3===0){
                alert("fizz")
            }
            else if(i % 5===0){
                alert("buzz")
            }
            else{
                alert(i)
            }
        }
    }

fizzBuzz()
