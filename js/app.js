// BTag functionalities start here ----------------
var targetURL = 'https://sports.10bet.co.za/',
    btag;

function openCustomLink(link) {
    btag = btag || '';
    window.location.href = targetURL + link + btag;
};

function openLoginForm() {
    btag = btag || '';
    window.location.href = targetURL + '/#login' + btag;
};

function openRegistrationForm() {
    btag = btag || '';
    window.location.href = targetURL + '/register/' + btag;
};


document.addEventListener('DOMContentLoaded', function () {
    //Get document URL
    var url = document.location,
        linksOnPage;

    //Prepare it for usage
    url = url.toString().split("?");

    // If no paramether
    if (url[1] == undefined) {
        return false;
    } else {
        // Process all links on the page
        linksOnPage = document.getElementsByTagName('a');

        for (var i = 0, len = linksOnPage.length; i < len; i += 1) {
            addTag(linksOnPage[i]);
        }
    }

    function addTag(item) {
        var itemHref = item.href;

        // Check if it is not just a dummy link used for better indexing purpouses
        if (itemHref.indexOf('javascript:') != -1) {
            btag = '?' + url[1];
        } else {
            // Search for query string parameters
            if (itemHref.indexOf('?') > -1) {
                itemHref += "&" + url[1];
            } else {
                itemHref += "?" + url[1];
            }
        }

        // Apply the change
        item.href = itemHref;
    }
}, false);
// BTag functionalities end here ----------------

// Declaring Classlist toggle function
function classListToggle(element, styleClass) {
    element.classList.toggle(styleClass);
}

// Declaring Show & hide functions 
function hideElement(element) {
    element.style.display = 'none';
}

function showElement(element) {
    element.style.display = 'inline-block';
}

// Adding EL for click and copy the promo code
if (!!document.querySelector('.bonus-code-container')) {
    document.querySelectorAll('.copy-bonus-code').forEach(function (item) {
        item.addEventListener('click', function () {
            let promoCode = this.innerText;
            let thisElement = this;
            let notificationElement = this.nextElementSibling;
            console.log(notificationElement)
            let elementHeight = document.querySelector('.copy-bonus-code').offsetHeight;
            let elementWidth = document.querySelector('.copy-bonus-code').offsetWidth;
            navigator.clipboard.writeText(promoCode);
            showElement(notificationElement);
            notificationElement.style.width = (elementWidth + 5) + 'px';
            notificationElement.style.height = (elementHeight + 1) + 'px';
            notificationElement.style.lineHeight = (elementHeight + 1) + 'px';
            setTimeout(hideElement, 1500, notificationElement);
        });
    });
};

// Adding EL for all bonus codes from the bonus codes section
let bonusCodesElements = document.querySelectorAll('.bonus-code');
if (bonusCodesElements) {
    Array.prototype.slice.call(bonusCodesElements).forEach(function (codeElement) {
        // for (var codeElement of bonusCodesElements) {
        codeElement.addEventListener('click', function () {
            const promoCode = codeElement.innerText;
            navigator.clipboard.writeText(promoCode);
            codeElement.innerText = 'Copied';
            codeElement.classList.add('copied');
            setTimeout(function () {
                codeElement.innerText = promoCode;
                codeElement.classList.remove('copied');
            }, 1500);
        })
    })
};

// Declaring and adding EL for click to open and close the Pop-up/modal
let modal = document.querySelector('#modal');
const btns = document.querySelectorAll('.tandcBtn');
if (!!modal) {

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.add("active");
        });
    })

    document.querySelector('.close-btn').addEventListener('click', function () {
        modal.classList.remove("active");
    });
}

// CTA bottom ribbon show/hide
const ctaRibbon = document.querySelector('#ctaRibbon');
if (ctaRibbon) {
    let prevScrollpos = window.pageYOffset,
        showPosition = 300;

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > showPosition) {
            ctaRibbon.style.bottom = '0';
        } else {
            ctaRibbon.style.bottom = '-5em';
        };

        prevScrollpos = currentScrollPos;
    };
};

/* new JS */

let termsHeader = document.querySelectorAll('.terms-conditions-header');
let termsHeaderP = document.querySelectorAll('.terms-conditions-header p:nth-of-type(2)');
let termsText = document.querySelectorAll('.terms-conditions-text');
let termsState = true;

termsHeader[0].onclick = function (){
    if(termsState){
        termsHeaderP[0].innerText = '-'
        termsText[0].style.display = 'flex'
        termsState = false;
    }else{
        termsHeaderP[0].innerText = '+'
        termsText[0].style.display = 'none'
        termsState = true;
    }
}

termsHeader[1].onclick = function (){
    if(termsState){
        termsHeaderP[1].innerText = '-'
        termsText[1].style.display = 'flex'
        termsState = false;
    }else{
        termsHeaderP[1].innerText = '+'
        termsText[1].style.display = 'none'
        termsState = true;
    }
}

/* button fixed */

let buttonFixed = document.querySelector('.footer');
let headerHieght = document.querySelector('.hero');

window.onscroll = function (){
    if(window.scrollY === 0){
        buttonFixed.style.display = 'none'
    }else{
        buttonFixed.style.display = 'flex'
    }
}