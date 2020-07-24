const popupCheck = () => {

    const popupCheckModal = document.querySelector('.popup-check'),
    checkBtn = document.querySelector('.check-btn'),
    popupClose = popupCheckModal.querySelector('.popup-close'); 
    
    checkBtn.addEventListener('click', () => {
        popupCheckModal.style.display = 'block';
    });
    popupClose.addEventListener('click',() => {
        popupCheckModal.style.display = 'none';
    });
    popupCheckModal.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.popup-content');
        if (!target){
            popupCheckModal.style.display = 'none';
     } 
     });
    
    };
    
    export default popupCheck;