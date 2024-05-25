const header = document.querySelector("header");

window.addEventListener("scroll", function()
{
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => 
{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

function sweetAlertFunction() 
{
    Swal.fire({
      title: 'Checkout Successful!',
      text: 'Your order has been placed successfully.',
      icon: 'uccess',
      confirmButtonText: 'OK'
    })
  }