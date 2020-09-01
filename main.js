
function searchQoute(){
    console.log('hello')
    let term = document.getElementById('search').value;
    document.getElementById('display').innerHTML = term;
    console.log(term);

    

    clearField();
}



function clearField(){
    document.getElementById('search').value = '';

   
    
}