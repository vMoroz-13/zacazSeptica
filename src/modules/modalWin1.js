const modalWin1 =() => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        popupClose = document.querySelector('.popup-close'),
        popUp = document.querySelector('.popup');
    callBtn.forEach(element => {
        element.addEventListener('click',() => {
         popupCall.style.display = 'block';
        });  
    });
    popupClose.addEventListener('click',() => {
         popupCall.style.display = 'none';
    });
    popUp.addEventListener('click', (event) => {
       let target = event.target;
       target = target.closest('.popup-content');
       if (!target){
          popupCall.style.display = 'none';
    } 
    });
};

export default modalWin1;