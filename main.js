
function searchQoute(){
    console.log('hello')
let display = document.getElementById('display')
let author = document.getElementById('author')
    fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        display.innerHTML = data.content;
        author.innerHTML = data.author;


    }
    );
    
  

}


