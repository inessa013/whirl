const itemList = document.querySelectorAll('.process__btn');
console.log(itemList);

for(const item of itemList){
    const text = item.querySelector('.process__text');
    item.addEventListener('click', function(){
        text.classList.toggle('none');
    })
}