class Card extends HTMLElement{
//    <!-- ♥, ♦, ♣, ♠. -->
    constructor(){
        super();
        const shadow=this.attachShadow({mode:'open'});

        let card = document.createElement('div');
        card.classList.add('card');
        //card.className='card'  ugyanaz, csak szebb

        let sign= document.createElement('div');
        let jelek= ['♥','♦','♣','♠'];
        sign.className='sign';
        sign.innerHTML=jelek[this.dataset.sign]

        if((this.dataset.sign==0) || (this.dataset.sign==1) )
            card.classList.add('red')

        let number=document.createElement('div');
        number.classList.add('number');
       

        let ertek=this.dataset.ertek;
        let tisztek=['J','Q','K'];
        if(ertek==1) ertek='A'
        else{
            if(ertek>10) ertek=tisztek[ertek-11];
        };
        number.innerHTML=ertek
        //number.innerHTML= this.dataset.ertek;
        //number.innerHTML=this.getAttribute('data-ertek');

        let value=document.createElement('div');
        value.className='value';

        value.appendChild(number); //Így rakom bele a value div-be a number div-et
        value.appendChild(sign);

        card.appendChild(value);
        card.appendChild(sign.cloneNode(true));
        card.appendChild(value.cloneNode(true));

        let linkElem=document.createElement('link')
        linkElem.setAttribute('rel','stylesheet');
        linkElem.setAttribute('href','card.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(card);
    }
};
customElements.define("my-card",Card);