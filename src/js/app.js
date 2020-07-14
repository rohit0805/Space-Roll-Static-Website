import '../scss/style.scss';

var Controller=(function(){
    var DOMString={
        burger:'.burger',
        navlink:'.nav_link'
    };
    var selector={
        burger:document.querySelector(DOMString.burger),
        navlink:document.querySelector(DOMString.navlink),
        navItems:document.querySelectorAll(`${DOMString.navlink} li`)
    };
    var LinkAnimate=()=>{
        selector.navItems.forEach((link,index)=>{
            if(link.style.animation)
                link.style.animation="";
            else
                link.style.animation=`NavFadeEffect 0.5s ease ${index/7+0.3}s forwards`;
        });
    }
    var ShowNavLink=function(e){
        selector.navlink.classList.toggle('show_navlink');
        LinkAnimate();
    };
    var SetupEventListener=function(){
        selector.burger.addEventListener('click',ShowNavLink);
    };
    return {
        init:function(){
            SetupEventListener();
        }
    };
})();

Controller.init();
