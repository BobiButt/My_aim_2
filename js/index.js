const select =()=>{
const select = document.getElementById('selection')
select.classList.toggle('selects');
}
const burger = ()=> {
    
    const nav = document.getElementById('navLinks');
 nav.classList.toggle('open');

    const Li = document.getElementById('navLi');
 Li.classList.toggle('arr');
}