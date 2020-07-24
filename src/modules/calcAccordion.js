const calcAccordion = () => {


    const accordion =document.getElementById('accordion'),
    panelDefault = accordion.querySelectorAll('.panel-default'),
    collapse = accordion.querySelectorAll('.collapse'),
    btnCollapsed = accordion.querySelectorAll('.collapsed');

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
    accordion.addEventListener('click', event => {
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

//работа кнопок "Следующий шаг"
    btnCollapsed.forEach((e) => {
        console.log(e);
        e.addEventListener('click', (event) => {
            const target = event.target;
           console.log(target);
        });
    });

};
export default calcAccordion;