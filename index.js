const Features = document.getElementById('Features');
const Company = document.getElementById('Company');

function FeaturesMenu(){
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('active');
}
function CompanyMenu(){
    const companyMenu = document.getElementById('company-menu');
    companyMenu.classList.toggle('active');
}

Features.addEventListener('click', FeaturesMenu)
Company.addEventListener('click', CompanyMenu)


$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');
        $('.navbar-nav').toggleClass('active');
        $('#menu').toggleClass('active');
    });
});