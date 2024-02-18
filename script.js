// let inputBx = document.querySelector('#inputBx');
// let list = document.querySelector('#list');

// inputBx.addEventListener("keyup",function(event){
//     if(event.key==="Enter"){
//         addItem(this.value)
//         this.value=" ";
//     }
// });

// let addItem = (inpuVal) =>{
//     let listItem = document.createElement("li");
//     listItem.innerHTML = '${inputBy}<i><i>';

//         listItem.addEventListener("click",function(){
//             this.classList.toggle('done');
//         })

//         listItem.querySelector("i").addEventListener("click",function(){
//             listItem.remove();
//         })

//         list.appendChild(listItem);
// }

let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function (event) {
    if (event.key === "Enter") { // Use '===' for strict equality comparison
        addItem(this.value);
        this.value = ""; // Use double quotes to clear the input field
    }
});

let addItem = (inputVal) => { // Change the parameter name from 'inputBx' to 'inputVal'
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputVal}<i></i>`; // Use backticks for template literals and fix the '<i>' tag

    listItem.addEventListener("click", function () {
        this.classList.toggle('done');
    });

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });

    list.appendChild(listItem);
};
