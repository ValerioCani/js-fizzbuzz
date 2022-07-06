const containerDom = document.getElementById('container');

const start = document.getElementById('start');
start.addEventListener('click',  
    function(){
        
        const x = document.getElementById('counter').value;
        
        for( let i = 1; i <= x ; i++ ) {
    
        //bisogna far processare prima i sottomultipli più alti per fare in modo che li stampi, 
        //altrimenti stampa solo quelli bassi.
            
            // if(i % 15==0){
            //     containerDom.innerHTML += '<div class="fizzbuzz square"> Fizzbuzz </div>';
            //     console.log("fizzbuzz");
            // } else if(i % 5==0){
            //     containerDom.innerHTML += '<div class="buzz square"> Buzz </div>';
            //     console.log("buzz");
            // } else if(i % 3==0){
            //     containerDom.innerHTML += '<div class="fizz square"> Fizz </div>';
            //     console.log("fizz");
            // } else {
            //     containerDom.innerHTML += '<div class="square">'+ i +'</div>';
            //     console.log(i)
            //è meglio .innerHTML, metodo più elastico e meno codice da scrivere 
            // }
            
            const numberSquare = document.createElement('div')
            if(i % 15==0){
                numberSquare.append('Fizzbuzz');
                numberSquare.classList.add('fizzbuzz', 'square');
                containerDom.append(numberSquare);
                console.log("fizzbuzz");
            } else if(i % 5==0){
                numberSquare.append('Buzz');
                numberSquare.classList.add('buzz', 'square');
                containerDom.append(numberSquare);
                console.log("buzz");
            } else if(i % 3==0){
                numberSquare.append('Fizz');
                numberSquare.classList.add('fizz', 'square');
                containerDom.append(numberSquare);
                console.log("fizz");
            } else {
                numberSquare.append(i);
                numberSquare.classList.add('square');
                containerDom.append(numberSquare);
                console.log(i);
            }
        }
    }  
);

// const cancel = document.getElementById('cancel');
// start.addEventListener('click',  
//     function(){
//         containerDom.removeChild(numberSquare);
//     }
// );