function debounce(callback, delay) { 
    let timer;
    return function() { 
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout((function(){
            callback.apply(context, args);
        }), delay);
    }
}  
let input = document.querySelector('input');
input.addEventListener('input', debounce(find, 1000)); 

function find() {  
    let row = document.getElementsByTagName("tr");    
    for (let i = 0; i < row.length; i++) {
        let cell = row[i].getElementsByTagName("td");
        for (let j = 0; j < cell.length; j++) {
            if (cell[j].innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
                row[i].style.display = "none";
            }
            else {
                row[i].style.display = "table-row";
                break;
            }            
        }
    }
}
