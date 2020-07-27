const calc = (price = 10000)=> {

    const panelBody = document.querySelector('.panel-body'),//родитель
     calcResult = document.getElementById('calc-result'),//результат
     expand = document.querySelectorAll('.expand');//селекты
  //  console.log(calcResult);
     const countSum = (typeValue,typeValue1) =>{
        let total = 0;
    
        total = typeValue * price * typeValue1
    
    
        calcResult.value = total;
     }
    
     expand.forEach((e) => {
        e.addEventListener('change', (event)=>{
            const target = event.target;
            const target1 = event.target;
            let typeValue = target.options[target.selectedIndex].value;
            console.log(typeValue);
            let typeValue1 = target1.options[target.selectedIndex].value;
            console.log(typeValue1);
            countSum(typeValue, typeValue1)
         });
     });
     
    
    };
    export default calc;