//Ex1
// function changeTheHeader() {
    
//     const header = document.getElementById('theHeader');
//     const btn = document.getElementById('btn');
//     const input = document.getElementById('userInput');
  
//     btn.addEventListener('click', (event) => {
//         event.preventDefault()
//         header.innerText = input.value; 
//     //   const newHeader = document.createElement('h2');
//     //   newHeader.innerText = input.value;
//     //   header.replaceChild(newHeader,header.firstChild);
//     });
//   }
//   changeTheHeader();


//Ex2
// function countTheNum() {
//     const btn = document.getElementById('btn');
//     const header = document.getElementById('header');
//     let num = 0;
//     let fontsize = 16;
//     btn.addEventListener('click',(event) => {
//         event.preventDefault();
//         num+=1;
//         fontsize+=2;
//         header.innerText = `the number is:${num}`
//         header.style.fontSize = `${fontsize
//         }px`;
//     });
// }
// countTheNum();

//Ex3

// function checkFormIsOk() { 
//     // const submit = document.querySelector('input[type="submit"]');
//     const email = document.querySelector('input[type="email"]');
//     const formInputs = document.querySelectorAll('input');
//     // submit.addEventListener('click', event => {
//         event.preventDefault();
//       for (let i = 0; i < formInputs.length; i++) {
//         if (formInputs[i].value === '') {
//           alert('Please fill in all form elements.');
//           break;
//         }
//         else {
//             // return alert('you are all good!');
//         }
//       }
//     // }); 
//  }
//   checkFormIsOk();

//Ex4
// function changeHeadWhenLoad() {
//     const mainHeader = document.querySelector('h1');
//     let newHeader = prompt('write the header you wish to put in!');
//     mainHeader.innerHTML = newHeader;
//   }

//Ex5


//Ex6
// const helloBtn = document.getElementById('helloBtn');
// helloBtn.addEventListener('click', event => {
//   event.preventDefault();
//   alert('good morning!!');
// });

// const goodbyeBtn = document.getElementById('Goodbye');
// goodbyeBtn.addEventListener('click', event1 => {
//   event1.preventDefault();
//   alert('good night!!');
// });

//Ex7
// function MakeMyList() {
//     const userText = document.createElement('input',Text);
// const addBtn = document.createElement('button');
// addBtn.setAttribute('id','addBtn');
// const removeBtn = document.createElement('button');
// removeBtn.setAttribute('id','removeBtn');
// const theBigList = document.createElement('ul');
// const theDiv = document.getElementsByTagName('div');
// theDiv.appendChild(userText);
// theDiv.appendChild(theBigList);
// theDiv.appendChild(addBtn);
// theDiv.appendChild(removeBtn);
// addBtn.addEventListener('click',event => {
//     event.preventDefault();
//     const newToDo = document.createElement('li');
//     newToDo.appendChild(userText.value);
//     theBigList.appendChild(newToDo)
// })
// removeBtn.addEventListener('click',event1 => {
//     event1.preventDefault();
//     theBigList.removeChild(newToDo)
// })
// }
// MakeMyList();


function MakeMyList() {
    const userText = document.createElement('input');
    const addBtn = document.createElement('button');
    addBtn.setAttribute('id','addBtn');
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('id','removeBtn');
    const theBigList = document.createElement('ul');
    const theDiv = document.getElementsByTagName('div')[0];
    theDiv.appendChild(userText);
    theDiv.appendChild(theBigList);
    theDiv.appendChild(addBtn);
    theDiv.appendChild(removeBtn);
    addBtn.addEventListener('click', event => {
      event.preventDefault();
      const newToDo = document.createElement('li');
      const text = document.createTextNode(userText.value);
      newToDo.appendChild(text);
      theBigList.appendChild(newToDo);
      newToDo.addEventListener('click', event3 => {
        event3.preventDefault();
        newToDo.style.backgroundColor = 'pink';
      });
    });
    removeBtn.addEventListener('click', event1 => {
      event1.preventDefault();
      theBigList.removeChild();
    });
    addBtn.style.backgroundColor = 'green';
    removeBtn.style.backgroundColor = 'red';
    addBtn.style.height = 20;
    addBtn.style.width = 70;
    removeBtn.style.width = 70;
    removeBtn.style.height = 20;
    addBtn.innerText = 'add'
    removeBtn.innerText = 'remove'
  }
  
  MakeMyList();
