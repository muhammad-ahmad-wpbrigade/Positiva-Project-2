var mobile = window.matchMedia("(max-width:480px)");
const LaCompany = document.getElementsByClassName ('company')[0];
const DropDown = document.getElementsByClassName ('drop-down-links')[0];


if (mobile.matches) {

    LaCompany.addEventListener( 'mouseover',()=>{

    });    
    
    LaCompany.addEventListener( 'mouseout',()=> {

    });

} else {

    LaCompany.addEventListener( 'mouseover',()=>{

        DropDown.style.display = 'block';

    });    
    
    LaCompany.addEventListener( 'mouseout',()=> {
    
        DropDown.style.display = 'none';
    });
}

function ClickOnBurger () {

    const MobileBurger = document.getElementsByClassName ('burger')[0];
    const CrossBurger = document.getElementsByClassName ('cross-icon')[0];
    const MobileNav = document.getElementsByClassName ('section')[0];
    
    if(MobileNav.style.display === "none" || MobileNav.style.display === "") {
        MobileNav.style.display = "block";
        MobileBurger.style.display = "none";
        CrossBurger.style.display = "block";
    } 
    else if ( CrossBurger.style.display = "block" || MobileNav.style.display === "block"){
        CrossBurger.style.display = "none";
        MobileBurger.style.display = "block";
        MobileNav.style.display = "none";
    }
}