"use strict";
//HERO1
const hero1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById('hero1-img').style.transform = 'translateY(0)';
            document.getElementById('circle1').style.transform = 'scale(1)';
            document.getElementById('circle2').style.transform = 'scale(1)';
        }
    });
});
hero1.observe(document.getElementById('hero1-img'));
//SLIDE
const slide = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            setTimeout(() => entry.target.classList.add('visible'), 300);
    });
});
document.querySelectorAll('.hero2 .hero-list > div').forEach(count => {
    slide.observe(count);
});
slide.observe(document.querySelector('.calculator'));
document.querySelectorAll('.hero5 .hero-list > div').forEach(count => {
    slide.observe(count);
});
slide.observe(document.querySelector('.form'));
//HERO3
const save = document.getElementById('save');
const outcome = document.getElementById('outcome');
function szamol() {
    if (outcome.value !== "") {
        outcome.value = outcome.value.replace(" Ft", "").replaceAll("\u00A0", "");
        save.value = `${new Intl.NumberFormat('hu-HU', { useGrouping: true }).format(-Math.floor(Number(outcome.value) * 0.35))} Ft`;
        outcome.value = document.activeElement !== outcome ? `${new Intl.NumberFormat('hu-HU', { useGrouping: true }).format(Number(outcome.value))} Ft` : outcome.value;
    }
}
outcome.addEventListener('input', () => outcome.value = outcome.value.replace(/\D/g, ""));
outcome.addEventListener('focus', () => outcome.value = outcome.value.replace(" Ft", "").replaceAll("\u00A0", ""));
outcome.addEventListener('blur', () => outcome.value = `${new Intl.NumberFormat('hu-HU', { useGrouping: true }).format(Number(outcome.value))} Ft`);
outcome.addEventListener('keydown', (e) => e.key === 'Enter' ? szamol() : null);
//HERO6
const hero6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetElement = entry.target;
            targetElement.style.opacity = '1';
        }
    });
});
document.querySelectorAll('.hero6 > div > div > div').forEach(count => {
    hero6.observe(count);
});
/*async function send(){

    interface adat{
        name:string,
        email:string,
        phone:string,
    }
    const name =  document.getElementById("name") as HTMLInputElement
    const email =  document.getElementById("email") as HTMLInputElement
    const phone =  document.getElementById("phone") as HTMLInputElement
    let adat:adat = {
        name: name.value,
        email: email.value,
        phone: phone.value
    }
    try{
        let response = await fetch('https://epikforge.space/api/site/5bba7662-d9e9-44c6-8034-225282f32d61/contact/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adat)
        });
        if (!response.ok) {
            throw new Error('Hálózati hiba történt: ' + response.status);
        }

        let data = await response.json();
        console.log('Sikeres válasz:', data);

    }
    catch(error){
        console.error(error)
    }
}*/
