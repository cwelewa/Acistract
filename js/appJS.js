// document.querySelector('.btn-add').addEventListener('click', function(e){
//     // console.log('hello world');
//     alert('Processing....')
// })
// document.querySelector('.btn-add').addEventListener('click', onClick);




// // document.body.append(x);

// function onClick(e){
//     // alert('still processing');

//     e.target.innerHTML = 'LOGGED IN';
//     document.querySelector('.card').creat
// }

// console.log(x);

const imgset = document.getElementById('likes');
// const item = document.querySelector('.card-body');

// console.log(item);

loadEventListeners();
function loadEventListeners(){
    imgset.addEventListener('click', onclick);
    // item.addEventListener('click', taskhere)
}
function onclick(e){
    if(imgset.children){
        alert('Hello from Acistract');
    };

    e.preventDefault();
}



