import Head from "next/head";
import { useEffect } from "react";

export default function Home() {

  //HERO1
  useEffect(() => {
    const hero1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (document.getElementById('hero1-img') as HTMLElement).style.transform = 'translateY(0)';
          (document.getElementById('circle1') as HTMLElement).style.transform = 'scale(1)';
          (document.getElementById('circle2') as HTMLElement).style.transform = 'scale(1)';
        }
      });
    });
    hero1.observe(document.getElementById('hero1-img')!);

//SLIDE
    const slide = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), 300);
      });
    });
    document.querySelectorAll('.hero2 .hero-list > div').forEach(count => {
      slide.observe(count);
    });
    slide.observe(document.querySelector('.calculator')!);
    document.querySelectorAll('.hero5 .hero-list > div').forEach(count => {
      slide.observe(count);
    });
    slide.observe(document.querySelector('.form')!);

    //HERO6
    const hero6 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.style.opacity = '1';
        }
      });
    });
    document.querySelectorAll('.hero6 > div > div > div').forEach(count => {
      hero6.observe(count);
    });

  }, [])

//HERO3
  let save: HTMLInputElement
  let outcome: HTMLInputElement
  useEffect(() => {
    save = document.getElementById('save') as HTMLInputElement
    outcome = document.getElementById('outcome') as HTMLInputElement

    outcome.addEventListener('input', () => outcome!.value = outcome!.value.replace(/\D/g, ""));
    outcome.addEventListener('focus', () => outcome!.value = outcome!.value.replace(" Ft", "").replaceAll("\u00A0", ""));
    outcome.addEventListener('blur', () => outcome!.value = `${new Intl.NumberFormat('hu-HU', {useGrouping: true}).format(Number(outcome!.value))} Ft`);
    outcome.addEventListener('keydown', (e) => e.key === 'Enter' ? szamol() : null);
  }, [])

  function szamol()  {
    if (outcome!.value !== "") {
      outcome!.value = outcome!.value.replace(" Ft", "").replaceAll("\u00A0", "");
      save!.value = `${new Intl.NumberFormat('hu-HU', {useGrouping: true}).format(-Math.floor(Number(outcome!.value) * 0.35))} Ft`;
      outcome!.value = document.activeElement !== outcome ? `${new Intl.NumberFormat('hu-HU', {useGrouping: true}).format(Number(outcome!.value))} Ft` : outcome!.value;
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const input = document.querySelector('input[name="m"]') as HTMLInputElement
    const params_m = params.get('m')
    if(input && params_m) input.value = params_m
  }, [])



  return (
      <>
        <Head>
          <title>B+K Trade Költségcsökkentés</title>
          <meta http-equiv="content-type" content="text/html" charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
              rel="stylesheet"/>
        </Head>

        <section className="hero1">
          <div>
            <div className="hero-text">
              <h3>Hatékony költségcsökkentés munkahelyén?</h3>
              <p>Érdekli, hogyan javíthatja munkahelye hatékonyságát fenntartható higiéniai megoldásokkal? Szeretné, ha
                a higiéniai folyamatai egyszerre lennének költséghatékonyak és környezetbarátok? Érdekli, hogyan
                csökkentheti a hulladék mennyiségét és annak kezelésével járó költségeket? Fontos Önnek, hogy csökkentse
                a papír- és eszközfelhasználást anélkül, hogy a tisztaság rovására menne?</p>
              <a className="cta" href="#kosar">Érdekel a megoldás</a>
            </div>

            <div className="hero-image">
              <img id="hero1-img" src="img/hero1.png"/>
              <div id="circle1"></div>
              <div id="circle2"></div>
            </div>
          </div>
        </section>

        <div className="hero1-vector"></div>

        <section className="hero2">
          <div>
            <div className="hero-text">
              <div className="felkialtojel">!</div>
              <div className="text">
                <h3>Túl sok a kiadás?</h3>
                <p>Ha nem történik változás, a jelenlegi gyakorlat számos problémát okozhat, amelyek nemcsak a vállalat
                  működésére, hanem annak pénzügyi helyzetére, megítélésére és a munkakörnyezet minőségére is negatív
                  hatással lehetnek.</p>
                <a className="cta" href="#kosar">Érdekel a megoldás</a>
              </div>
            </div>

            <div className="hero-list">
              <div id="hero2-count1">
                <div className="count">01</div>
                <div>
                  <h4>Felesleges pénzkidobás</h4>
                  <p>Túlzott papír-, vegyszer- és eszközfelhasználás</p>
                </div>
              </div>
              <div id="hero2-count2">
                <div className="count">02</div>
                <div>
                  <h4>Pazarlásból eredő veszteségek</h4>
                  <p>Csökkenő nyereség, növekvő költségek</p>
                </div>
              </div>
              <div id="hero2-count3">
                <div className="count">03</div>
                <div>
                  <h4>Növekvő hulladékmennyiség</h4>
                  <p>Magas tárolási, szállítási és kezelési költségek</p>
                </div>
              </div>
              <div id="hero2-count4">
                <div className="count">04</div>
                <div>
                  <h4>Versenyképesség csökkenése</h4>
                  <p>Innovatív megoldások hiánya miatt lemaradás a piacon</p>
                </div>
              </div>
              <div id="hero2-count5">
                <div className="count">05</div>
                <div>
                  <h4>Rossz munkakörnyezet</h4>
                  <p>Dolgozói elégedettség és teljesítmény csökkenése</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero3">
          <div>
            <div>
              <h3>Költségcsökkentő kalkulátor</h3>
              <p>Számolja ki a kalkulátorunk segítségével, hogy mennyit takaríthatna meg a higiéniai költségek
                optimalizálásával.</p>
              <p>Pontosan tudjuk, hogyan lehet ezeket a problémákat orvosolni! Olyan hatékony és fenntartható
                megoldásokat kínálunk, amelyekkel nemcsak a költségeket csökkentheti, hanem egy tisztább,
                környezettudatosabb és eredményesebb működést is elérhet.</p>
            </div>

            <div>
              <div className="calculator">
                <div>
                  <label>Céges higiéniai kiadások havonta</label>
                  <input id="outcome" type="text" placeholder="0 Ft"/>
                </div>
                <div>
                  <label>Lehetséges költségcsökkentés</label>
                  <input id="save" type="text" readOnly/>
                </div>
                <button id="szamol" onClick={szamol}>Számol</button>
              </div>
            </div>
          </div>
        </section>

        <section className="hero4">
          <div>
            <div>
              <div className="title">
                <img src="img/logo.svg"/>
                <h3>B+K Trade</h3>
              </div>
              <h4>Higiéniai költségoptimalizálás cégvezetőknek, cégtulajdonosoknak, beszerzési vezetőknek,
                szakembereknek</h4>
              <p>Cégünk több mint 25 éve azon dolgozik, hogy partnereink számára a leginnovatívabb, iparágra szabott
                higiéniai megoldásokat kínáljuk. Rendszereink célja, hogy a higiéniai költségeket jelentősen
                csökkentsük, miközben megszüntetjük a pazarlást. Legyen szó papír-, vegyszer- vagy
                eszközfelhasználásról, megoldásaink minimalizálják a hulladékot és az annak kezelésével járó
                költségeket, ezzel segítve partnereinket a fenntartható működésben.</p>
              <a className="cta" href="#kosar">Érdekel a megoldás</a>
            </div>
            <div className="hero-image">
              <img src="img/hero4.jpg"/>
            </div>
          </div>
        </section>

        <section className="hero5">
          <div>

            <div className="hero-list">

              <div>
                <div className="count">01</div>
                <h4>Hatalmas szakmai tapasztalat</h4>
                <p>Több mint két évtizedes jelenlét a piacon</p>
              </div>
              <div>
                <div className="count">02</div>
                <h4>Problémák gyors kezelése</h4>
                <p>Az igényeket és kihívásokat azonnal kezeljük.</p>
              </div>
              <div>
                <div className="count">03</div>
                <h4>Nagy raktárkészlet</h4>
                <p>Stabil szállítási feltételek még instabil időkben is.</p>
              </div>
              <div>
                <div className="count">04</div>
                <h4>Hosszú távú partnerségek</h4>
                <p>A partnereinknél nagyon magas higiéniai elvárásokok vannak.</p>
              </div>
              <div>
                <div className="count">05</div>
                <h4>Elkötelezett szakértői csapat</h4>
                <p>Azonnali támogatás és szakmai tanácsadás.</p>
              </div>
              <div>
                <div className="count">06</div>
                <h4>Felelősség felvállalása</h4>
                <p>Hibázás esetén nem hárítunk, hanem megoldjuk.</p>
              </div>
            </div>

            <div>
              <h3>Hogyan dolgozunk?</h3>
              <p>Higiéniai rendszereink könnyen használhatók, szinte automatizáltan működnek, és kimagasló eredményeket
                nyújtanak. Ráadásul oktatást is biztosítunk a használó személyzetnek, hogy a legnagyobb hatékonyságot
                érhessék el. Ez nemcsak a dolgozói elégedettséget növeli, hanem közvetlen hatással van a
                termelékenységre és a profitra is. Mindezt úgy valósítjuk meg, hogy a vezetőség figyelme a lényeges
                feladatokra összpontosulhat, nem a higiéniai problémák kezelésére.</p>
              <img src="img/hero5.jpg"/>
            </div>
          </div>
        </section>

        <section className="hero6">
          <div>
            <h3>Csatlakozzon azokhoz a partnereinkhez, akik már a fenntartható higiéniai megoldásainkra
              támaszkodnak!</h3>
            <div>
              <div>
                <div className="quote"><em>Miért nem csináltam meg hamarabb?! Az eredmények önmagukért beszélnek!</em>
                </div>
                <div className="aposztrof">”</div>
                <div>
                  <img src="img/velemeny1.jpg"/>
                  <cite><span>H. <em>Tamás</em></span><br/>cégvezető</cite>
                </div>
              </div>
              <div>
                <div className="quote"><em>A hulladék mennyisége drasztikusan csökkent, és ezzel a költségeink is sokkal
                  kezelhetőbbé váltak.</em></div>
                <div className="aposztrof">”</div>
                <div>
                  <img src="img/velemeny2.jpg"/>
                  <cite><span>K. <em>Hanna</em></span><br/>beszerzési vezető</cite>
                </div>
              </div>
              <div>
                <div className="quote"><em>Végre megszűnt a pazarlás, ami eddig komoly gondot okozott. Sokkal
                  átláthatóbbá vált a működésünk.</em></div>
                <div className="aposztrof">”</div>
                <div>
                  <img src="img/velemeny3.jpg"/>
                  <cite><span>L. <em>Péter</em></span><br/>logisztikai szakértő</cite>
                </div>
              </div>
              <div>
                <div className="quote"><em>Mióta bevezettük az új rendszert, a tisztaságot mindenki észreveszi – a
                  dolgozók és az ügyfelek is!</em></div>
                <div className="aposztrof">”</div>
                <div>
                  <img src="img/velemeny4.jpg"/>
                  <cite><span>N. <em>Andrea</em></span><br/>üzemeltetési vezető</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero7" id="kosar">
          <div>
            <div>
              <h3>Ingyenes konzultáció</h3>
              <p>Vegyen részt ingyenes tanácsadásunkon és felmérésünkön, és győződjön meg saját maga arról, milyen
                kiemelkedő eredményeket érhet el a segítségünkkel!</p>
              <p>Segítünk vállalkozása költségcsökkentésében, hogy még hatékonyabb legyen annak működése.</p>
            </div>

            <div>
              <div className="form">
                <form action="https://epikforge.space/api/site/5bba7662-d9e9-44c6-8034-225282f32d61/contact/create"
                      method="POST" accept-charset="utf-8">
                  <input type="hidden" name="url" value="https://landing.epikforge.com/bpluszk"/>
                  <input type="hidden" name="m" value="organic"/>
                  <input type="hidden" name="success_return_url"
                         value="https://landing.epikforge.com/bpluszk/koszonjuk.html"/>
                  <input type="hidden" name="form_name" value="B+K Trade"/>

                  <div>
                    <label>NÉV</label>
                    <input id="name" type="text" name="name" required/>
                  </div>
                  <div>
                    <label>EMAIL</label>
                    <input id="email" type="email" name="email" required/>
                  </div>
                  <div>
                    <label>TELEFON</label>
                    <input id="phone" type="text" name="phone" required/>
                  </div>
                  <button type="submit" id="submitBTN">Visszahívást kérek</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </>
  );
}
