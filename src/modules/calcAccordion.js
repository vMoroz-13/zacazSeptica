const calcAccordion = () => {

    const accordion =document.getElementById('accordion'),
    panelDefault = accordion.querySelectorAll('.panel-default'),//их четыре
    panelРeading = accordion.querySelectorAll('.panel-heading'),//зеленая
    collapse = accordion.querySelectorAll('.collapse'),//  in
    accBtn = document.querySelectorAll('.accbtn'),
    collapseOne = document.querySelector('#collapseOne'),
    collapseTwo = document.querySelector('#collapseTwo'),
    collapseThree = document.querySelector('#collapseThree'),
    collapseFour = document.querySelector('#collapseFour'),
    dnone = document.querySelector('.d-none'),
    checkbox = document.getElementById('myonoffswitch');

        const closeDnone = () =>{
            dnone.style.display = 'none';
        };
        closeDnone();
//раскрываем аккордион
     const  togleTabContent = index => {
         for (let i = 0; i < collapse.length; i++) {
             if (index === i) {
                 collapse[i].classList.remove('in'); 
                 collapse[i].classList.add('in');          
             }else{
                 collapse[i].classList.add('in');
                 collapse[i].classList.remove('in'); 
             }
         }
     };
    panelРeading.forEach((e) => {
        e.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;       
            target = target.closest('.panel-default');
            if (target) {
                    panelDefault.forEach((item, i) => {      
                       if (item === target) {
                            togleTabContent(i);
                 }
              });
           }
        });
    });

//работа кнопок "Следующий шаг"
     accBtn.forEach((e) => {
        e.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;       
            target = target.closest('.collapse');
           if (target.className === 'panel-collapse collapse in') {
                collapseOne.classList.remove('in'); 
                collapseTwo.classList.add('in'); 
           }else if(target.className === 'panel-collapse two collapse in'){
            collapseTwo.classList.remove('in'); 
            collapseThree.classList.add('in'); 
           }else if(target.className === 'panel-collapse three collapse in'){
           collapseThree.classList.remove('in'); 
           collapseFour.classList.add('in'); 
           }
        });
    });

    const dNone = () => {         
         checkbox.addEventListener('change', (e)=>{
             let target = e.target;
            if (target.checked){
                dnone.style.display = 'none';
            }else{
                dnone.style.display = '';
            }
         });
    };
    dNone();
};
export default calcAccordion;