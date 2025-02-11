import { Injectable } from '@angular/core';
import { MemoryLocation } from './memory-location.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  private memories: MemoryLocation[] = [
    {
      id: 1,
      name: "Nasze pierwsze spotkanie",
      date: "2 lutego, 2024",
      description: "The café where we first met",
      coordinates: [52.88524096895425, 20.028587873060417],
      imageUrl: "./1.jpg",
      story: "Sam nie wiedziałem czego się spodziewać, nie wierzyłem, że naprawdę mnie zaprosisz na swoje urodziny, trochę się zdziwiłem w sumie, że urodziny mają być w piątek, ale faktycznie, 2 lutego, więc twoje urodziny. Brzmiało to wiarygodnie. Zestresowany przyjechałem 3 godziny wcześniej 😂. Miałem ze sobą laptopa, by móc sobie coś pooglądać. Czekałem i czekałem, drzwi zamknięte, nikogo innego nie ma poza mną. No coś było nie tak. Zadzwoniłem do ciebie i okazało się, że pomyliłem dni 😂. Zostanie to już ze mną do końca, ale dzięki temu mogłem się z tobą spotkać i dać ci prezent rzeczywiście w dzień twoich urodzin."
    },
    {
      id: 2,
      name: "Nasza pierwsza randka",
      date: "24 lutego, 2024",
      description: "Our favorite beach",
      coordinates: [52.166694828635784, 21.040709373682976],
      imageUrl: "./2.jpg",
      story: "Szczerze, to myślałem, że nie przyjedziesz do tej Warszawy, myślałem, że zmienisz zdanie i nie przyjedziesz. Było dużo niewiadomych, a ja zwątpiłem w twój przyjazd. Mimo wszystko jednak przyjechałaś! Ja zrobiłem specjalnie rezerwację tydzień wcześniej, choć nie miałem pewności czy będziesz 😂. Całe szczęście przyjechałaś, akurat moich rodziców nie było, więc mogliśmy swobodnie być w moim mieszkaniu. Choć poza tym, że mój wujek nas widział, to jeszcze mój kolega, który napisał mi, że życzy mi powodzenia 😂. Bardzo miło było, cieszyłem się niezmiernie, że spotkanie doszło do skutku."
    },
    {
      id: 3,
      name: "Dzień, w którym zostaliśmy parą",
      date: "2 marca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.9549958205598, 20.070380108660114],
      imageUrl: "./3.jpg",
      story: "Przyjechałem do ciebie. Nie miałem żadnego planu ani nic. Tak naprawdę to wciąż myślałem, czego bym chciał. Im więcej czasu z tobą spędzałem, tym bardziej utrzymywało mnie to w świadomości, że chciałbym z tobą być. Uważałem, że masz naprawdę złote serce i będę mógł z tobą być szczęśliwy. Bardziej się martwiłem, że ja mogę sprawić, że twoje życie będzie nieszczęśliwe, to mnie najmocniej trzymało przed wyznaniem uczuć. Finalnie uznałem, że nie dam rady tego dłużej w sobie trzymać i poszło. To była bardzo dobra decyzja i cieszę się, że tak postąpiłem 🥰."
    },
    {
      id: 4,
      name: "Występ w szkole i Strzegowo",
      date: "7 marca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.88826148388708, 20.279692498541944],
      imageUrl: "./4.jpg",
      story: "Dostałem nagłe zaproszenie, a dzień kobiet się zbliżał. Chciałem ci coś kupić, ale miałem dosłownie godzinę 😂. Poszedłem szybko do empiku i kupiłem ci książkę, o której mi mówiłaś 🫣. Twoja mama dała nam znać, że jest jakiś koncert w szkole w Radzanowie. Uznaliśmy, że możemy pójść. Zaparkowaliśmy na małym rynku przy kościele i stamtąd szliśmy na piechotę do szkoły. Filip zabrał się z nami. Okazało się, że jak przyszliśmy, to koncert już się kończył 😂. Ale chociaż ty coś dostałaś wtedy z okazji dnia kobiet. Mimo że ja też chciałem dostać, to mi nie dali 🥺. Mieliśmy też ciasteczka z wróżbą 🥰. Po tym pojechaliśmy do Baru Krokiet w Strzegowie. Zjedliśmy dużą pizzę z ogórkiem konserwowym, a Filipowi kupiłem alkohol na stacji benzynowej 😂."
    },
    {
      id: 5,
      name: "Ciechanów i Mława",
      date: "16 marca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.88462909796671, 20.61913479573353],
      imageUrl: "./5.jpg",
      story: "Uznałem, że chciałbym jednak z tobą trochę zwiedzić okolicę. Dlatego pojechaliśmy do Ciechanowa 😂. Masz koleżankę, co tam się uczy, więc pytałaś ją po drodze, co tam możemy zjeść i zwiedzić. Generalnie napisała wtedy, że nic tam nie ma, ale poleciła nam lokal. Zjedliśmy tam burgery i pankejki, które chciałem spróbować 😂. Miałem burgera polanego serem wtedy. Smaczne było. Siedziałaś też chyba ponad 20 minut w łazience i 3 osoby zrezygnowały z pójścia, bo się doczekać nie mogły 😂. Ja już myślałem, że wpadłaś do tej łazienki 😂. Potem pojechaliśmy zobaczyć zamek i tam poprosiliśmy kogoś, by zrobił nam zdjęcie na tle zamku. To było nasze pierwsze wspólne zdjęcie. Następnie pojechaliśmy do Mławy i zagraliśmy w kręgle w jakimś klubie 😂. Tor był dość mocno zniszczony, kręgle znikały, zacinały się, ale finalnie i tak było super."
    },    
    {
      id: 6,
      name: "Twój pierwszy weekend u mnie",
      date: "29-30 marca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.21279672003679, 20.955543999893123],
      imageUrl: "./6.jpg",
      story: "Ala przyleciała z Lukasem na Wielkanoc, więc był to idealny moment, byś przyjechała na weekend do mnie. Niestety rozmowy z mamą nie szły dobrze, finalnie powiedziała tak, więc przyjechałaś do mnie busem. Busem też jechałaś pierwszy raz. Ogólnie było fajnie, ale widziałem, że jesteś bardzo zmartwiona i nie jesteś w stanie w pełni cieszyć się naszym wspólnym czasem. No i jak wróciłaś, to było istne piekło. Nagle twoje pozwolenie, jednak nie było pozwoleniem. Mimo że nie zrobiłaś nic złego. Mimo wszystko nie żałuję, że wtedy przyjechałaś. Mimo pewnych problemów myślę, że wzmocniło to nasz związek."
    },
    {
      id: 7,
      name: "Płock",
      date: "5 kwietnia, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.5530494083742, 19.687128046425187],
      imageUrl: "./7.jpg",
      story: "Pierwszy raz przyjechałem do ciebie do Płocka. Był to moment trudny. Nie wróciłaś na weekend do domu, zamiast tego zostałaś w Płocku. Myślę, że miło spędziliśmy czas, ale bardzo dobrze widziałem, że jest ci ciężko. Bardzo chciałem ci jakoś pomóc, próbowałem przekazać ci moje wsparcie. Obwiniałem się, że to ja jestem źródłem problemu. Mimo wszystko twierdzę, że dobrze, że przeciwstawiłaś się, bo twoi rodzice nie mieli całkowicie racji."
    },
    {
      id: 8,
      name: "Urodziny pani mamy",
      date: "30 kwietnia, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.88524253042829, 20.028710117992272],
      imageUrl: "./8.jpg",
      story: "Niemożliwe, zostałem zaproszony na urodziny twojej mamy. Twoje relacje z mamą też już się zaczęły trochę poprawiać, nie wiedziałaś nawet, czy ty masz zaproszenie na te urodziny. Finalnie byliśmy na nich razem i bardzo dobrze się bawiliśmy. Widziałem, że zaczynasz podnosić się na duchu, cieszyłaś się, że zaczyna się to układać. Odbieraliśmy tort z Płocka i braliśmy ze sobą twojego chrzestnego i jego żonę. Nie wiedziałem jak mam odpowiadać twojemu wujkowi. Nie znałem go, więc było ciężko 😂. W późniejszym czasie porozmawiałaś z mamą i pani mama stanęła całkowicie po naszej stronie."
    },
    {
      id: 9,
      name: "Przyjazd od środy do piątku",
      date: "8 maja, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.9416189902812, 20.099546570598097],
      imageUrl: "./9.jpg",
      story: "Przyjechałem wieczorem w środę i byłem do piątku. Oczywiście wyjechałem zanim twój ojciec przyjechał 😂. Byłem nielegalnie 🫣. Szczęśliwy byłem, że widziałem u ciebie uśmiech na ustach, moje serce było uradowane. Jeździliśmy na rowerze 20 km 🤯. Dałem radę bez narzekania 😂. Byliśmy przy wodzie, pogoda nam dopisywała. Miły i przyjemny czas."
    },
    {
      id: 10,
      name: "Urodziny Marzeny i mój pierwszy raz u pani Babci",
      date: "18 maja, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.74713404651316, 20.040422867660666],
      imageUrl: "./10.jpg",
      story: "Marzena miała urodziny i zostałem razem z tobą zaproszony na nie. Marzena mieszkała w tamtym czasie u babci, więc to oznaczało moje pierwsze spotkanie z panią babcią. Z panią babcią, o której słyszałem bardzo dużo złego. Pojechaliśmy na urodziny, było miło i przyjemnie. Ciasta były smaczne, poskakaliśmy sobie na trampolinie, pograliśmy w badmintona. Bardzo fajnie. Widziałem, że raczej każdy się hamuje przy mnie, a przynajmniej pani babcia. To dobrze, bo jakbym się włączył, to już bym się nie wyłączył 😂. Pani babci ciasta akurat były niesmaczne 🥺."
    },
    {
      id: 11,
      name: "Urodziny Klaudii",
      date: "29 czerwca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.622038284429934, 19.78495838894423],
      imageUrl: "./11.jpg",
      story: "Klaudia robiła swoją 18-stkę. Dostałem również zaproszenie 🥰. Przyjechałaś wtedy do mnie, spędziliśmy miło czas, a potem razem pojechaliśmy do ciebie. Pierwszy raz ze mną do ciebie jechałaś 🫣. U ciebie się przygotowaliśmy i oczywiście spóźnieni, ale wyruszyliśmy. Same urodziny bardzo fajne, myślę, że wszystko się udało. Poza tym, że Cycu był 🤮."
    },
    {
      id: 12,
      name: "Multimedialny Park Fontann",
      date: "26 lipca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.25417843958032, 21.011251042460536],
      imageUrl: "./12.jpg",
      story: "Odebrałem cię po pracy z Dworca Gdańskiego i pojechaliśmy do domu na trochę. Ogarnęliśmy się i pojechaliśmy na Stare Miasto. Zwiedziliśmy trochę, aż doszliśmy do Multimedialnego Parku Fontann. Moi rodzice już tam czekali, a razem z nimi taty kolega z dzieciństwa, który na co dzień mieszka w Stanach Zjednoczonych. Sam pokaz był bardzo przyjemny, choć motyw tego pokazu nie był dla mnie zrozumiały, bo był o jakiejś starej muzyce 😂. Po pokazie wracaliśmy bardzo zatłoczonym tramwajem, ale mi się podobało 🥰."
    },
    {
      id: 13,
      name: "Taras widokowy w Pałacu Kultury",
      date: "27 lipca, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.23177314995725, 21.006002827924057],
      imageUrl: "./13.jpg",
      story: "Tego dnia realizowaliśmy mój pomysł na randkę 🫣. Główną atrakcją był taras widokowy w Pałacu Kultury. Kolejka była długa, ale kupiłem bilety przez internet, więc szybciej poszło 😂.Byliśmy na Kopcu Powstania Warszawskiego. Tę atrakcję trzymałem w rękawie już od dłuższego czasu 😂. Byliśmy też na polu mokotowskim oraz na pizzy, która mimo że miała dużo pozytywnych ocen, to była słaba 🥺."
    },
    {
      id: 14,
      name: "Przyjechałaś do mnie po mojej pracy",
      date: "16 sierpnia, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.232132343241744, 20.985797465865005],
      imageUrl: "./14.jpg",
      story: "Moja perełka została sama w mieszkaniu, kiedy ja pojechałem do pracy. Przez ten czas byłaś sama, ale dzielnie przyjechałaś do mnie do pracy 🥰. Byłem przeszczęśliwy jak cię zobaczyłem 🥰🥰. Byliśmy następnie w Fabryce Norblina, gdzie zjedliśmy takiego kebaba greckiego 😂."
    },
    {
      id: 15,
      name: "Ostatnie spotkanie przed moim wyjazdem do Japonii",
      date: "8 września, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.553131002073194, 19.68697501017923],
      imageUrl: "./15.jpg",
      story: "Nasze ostatnie spotkanie przed moim wylotem do Japonii. Bardzo się martwiłem, bardzo nie chciałem cię na tak długo zostawiać. Miałem przeróżne negatywne myśli i niesamowicie trudno mi było od ciebie wtedy odjechać. Długo płakałem, ale na szczęście stale utrzymywałaś ze mną kontakt, więc nie martwiłem się zbytnio. Wyjazd sam w sobie się udał i byłem przeszczęśliwy, że wciąż jesteś ze mną 🥰."
    },
    {
      id: 16,
      name: "Pierwsza spotkanie po moim wyjeździe do Japonii",
      date: "11 października, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.95501482991419, 20.070502550929618],
      imageUrl: "./16.jpg",
      story: "Było to nasze pierwsze spotkanie po moim wyjeździe do Japonii. Nie mogliśmy się spotkać w pierwszym tygodniu po powrocie, więc zaplanowaliśmy wszystko na drugi. Udało się, przyniosłem wszystkie moje zdobycze z Japonii, wszystkie pamiątki i jedzenie. Nakupowałem tego bardzo dużo, bo chciałem ci przywieźć całą Japonię 😂. Miałem nadzieję, że wszystko ci się spodoba 🥰."
    },
    {
      id: 17,
      name: "Powtórka naszej pierwszej randki",
      date: "2 listopada, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.143446918156236, 21.039215263447097],
      imageUrl: "./17.jpg",
      story: "Na nasz 8 miesiąc związku zaplanowałem powtórkę naszej pierwszej randki. Nawet ubrałem się tak samo 😂. Prawie wszystko powtórzyłem, co było na pierwszej randce. Specjalnie niektóre rzeczy pominąłem, by mimo wszystko spędzić czas trochę bardziej oryginalniej. Myślę, że poszło mi dość dobrze 🫣. Ja się bawiłem świetnie, bo byłem z tobą 🥰."
    },
    {
      id: 18,
      name: "Kebab gigant",
      date: "15 listopada, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.89331255222111, 20.285029862317767],
      imageUrl: "./18.jpg",
      story: "Miałaś umówioną wizytę u lekarza, bo ci pielęgniarka w szkole kazała. Zrobiliśmy, co było trzeba, podjechaliśmy do pepco i popatrzyliśmy, co jest. Potem poszliśmy do biedronki i zjedliśmy cieplutką bułkę czosnkową. Byliśmy też u pani babci. Jak wróciliśmy już do domku, to twoja mama spanikowana poprosiła, byś pojechała z nią do weterynarza, bo Daisy coś liże na ciele i miała taką bulwę. Pojechaliśmy do jednego miejsca, a potem do kolejnego. Nie było nigdzie weterynarza. Nie wiedzieliśmy, co robić. Pojechaliśmy na ostatnią chwilę do Żuromina i okazało się, że Daisy po prostu ma cieczkę 😂. Cały dzień nic nie jadłem, ale na koniec dnia zjadłem kebab giganta. Po jego zjedzeniu zacząłem rodzić."
    },
    {
      id: 19,
      name: "Nasze pierwsze wspólne pójście na basen",
      date: "16 listopada, 2024",
      description: "The park where we saw the lights",
      coordinates: [53.12274579111078, 20.378931223676727],
      imageUrl: "./19.jpg",
      story: "Byliśmy u ciebie w domku i zapodałaś pomysł, by pójść na basen. Ja w ogóle nie byłem przygotowany 😂. Pożyczyłem kąpielówki od pana taty lub od Kacpra i pojechaliśmy do Mławy. Popływaliśmy sobie, pozjeżdżaliśmy ze zjeżdżalni. Ratownik się też przyczepił, że mogę ci zrobić krzywdę, jak będziemy razem zjeżdżać 😂. Chciałem skorzystać z jacuzzi, ale było cały czas zajęte. Pochodziliśmy po galerii handlowej i akurat, kiedy miałem ochotę, to zamknęli mi kołacze 🥺. Mimo wszystko pojechaliśmy coś przekąsić i zdjęliśmy takie chamskie burgery jak z jakiegoś dworca 😂."
    },
    {
      id: 20,
      name: "Pierwsza próba poloneza",
      date: "28 listopada, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.55028261735412, 19.68169503736875],
      imageUrl: "./20.jpg",
      story: "Nadszedł ten moment – pierwsza próba poloneza. Przyjechałem w czwartek, bo ktoś pomyślał, że próba w czwartek to genialny pomysł XD. Tańczyliśmy na korytarzu. Było mało miejsca, ale miło mi było, że mogłem z tobą potańczyć 🥰. Dostałem również razem z tobą zaproszenie na wigilię organizowaną przez Klaudię 🫣. Na drzwiach w szkole dojrzeliśmy informację, że uczniowie i studenci mają 20% rabatu w Saloniku Babci Krysi 🤯. Taka okazja oczywiście nie mogła się zmarnować, więc poszliśmy coś wszamać 🫣. Pyszniutkie burgerki zjedliśmy, takie drobniutkie, ale najadłem się 😂. Spacerowaliśmy sobie też po okolicy."
    },
    {
      id: 21,
      name: "Wigilia w Saloniku Babci Krysi z Klaudią",
      date: "19 grudnia, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.544682986177875, 19.686400017052172],
      imageUrl: "./21.jpg",
      story: "Przyjechałem do ciebie, bo znowu próba poloneza była w czwartek 😂. Ale tym razem idealnie zgrywało się to w czasie, bo pod wieczór była Wigilia w Saloniku Babci Krysi organizowana między innymi przez Klaudię 🫣. Zjadłem pysznego placuszka po węgiersku, skosztowałem też twoich pierogów z serem, które też były bardzo dobre. Zjedliśmy też dużą bezę, która już była dla mnie za słodka i miałem jej dość 😂. Wciąż uważam, że warto było. Sama Wigilia była fajna, ale nie miałem za bardzo, co tam mówić, nie znam tego towarzystwa, ale i tak miło było 🥰."
    },
    {
      id: 22,
      name: "Osiemnastka Kacpra",
      date: "21 grudnia, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.93340160574941, 20.369670086177365],
      imageUrl: "./22.jpg",
      story: "Kolejny dzień i kolejna impreza 😂. Tym razem 18 Kacpra, syna cioci Mai. Tę ciocię ze Strzegowa już zdarzyło mi się spotkać między innymi na urodzinach Mai i po tym, jak kupiliśmy kebaby w Strzegowie 😂. Na urodzinach Mai nie wymieniłem z nią nawet słowa, bo się nie znaliśmy, w sumie to nikogo nie znałem 😂. Pojechaliśmy, pojedliśmy, pograłem dużo z Kacprem w ping-ponga, bo nie był on zbytnio rozrywkowy i nie bawił się na imprezie, a chciałem by chociaż miło spędził czas. Impreza jak impreza, fajnie było, kurczaki w panierce z sosem były rewelacyjne 🥰."
    },
    {
      id: 23,
      name: "Sylwester",
      date: "31 grudnia, 2024",
      description: "The park where we saw the lights",
      coordinates: [52.73716553876933, 19.765267316079875],
      imageUrl: "./23.jpg",
      story: "Przyszedł dzień Sylwestra. Zostaliśmy z Mają zaproszeni na sylwestra organizowanego przez Klaudię. Dress code to był PRL. Założyłem do tego idealny sweter, a Maja jak zawsze wyglądała zdumiewająco. Oczywiście ogarnialiśmy się na szybko, byliśmy na miejscu wcześniej, bo mieliśmy podłączyć Mai głośnik, ale sobie poradzili bez niego. Szkoda, że nie dali znać, ale no trudno. Pojedliśmy, pobawiliśmy się. Mówiąc szczerze, to mi się tam bardzo dłużyło, ale zabawy, które były skutecznie ten czas zagospodarowały. Kiedy wybiła północ wypiliśmy szampana i oglądaliśmy fajerwerki. Wtedy dowiedziałem się, że Maja się boi fajerwerków. Bardzo mi głupio było, bo kupiłem małą armatkę. Nie wiedziałem, że Maja się boi fajerwerków, naprawdę myślałem, że chodziło o ich zbyt wysoki koszt, dlatego kupiłem małą armatkę. No trudno, bardzo mi było głupio z powodu mojej niewiedzy, wyszło to fatalnie, ale mam nadzieję, że Maja zacznie mi mówić o takich rzeczach, bo chciałbym jak najlepiej ją zrozumieć. Sama impreza była fajna, mam nadzieję, że nasz następny Sylwester będzie jeszcze lepszy ❤️."
    },
    {
      id: 24,
      name: "Studniówka",
      date: "18 stycznia, 2025",
      description: "The park where we saw the lights",
      coordinates: [52.54375150442825, 19.68482409549226],
      imageUrl: "./24.jpg",
      story: "Po kilku próbach nadeszła Studniówka. Kupiłem specjalnie na tę okazję garnitur 🥰. Maja wyglądała rewelacyjnie, przepięknie, tak jak zawsze. Pojechaliśmy przygotowani, lecz nie było miejsca nigdzie blisko hotelu, więc musieli iść z 15 minut do hotelu 😂. Potem po polonezie poszliśmy z powrotem do samochodu, by Maja mogła zdjąć body i zmienić buty. Zaparkowałem też bliżej hotelu. Polonez nam nie poszedł za bardzo, widzieliśmy polonezy, które zdecydowanie lepiej się kończyły. U nas nikt nie wiedział, że jest koniec poloneza 😂. Parę błędów też się zdarzyło. Impreza była naprawdę super, jedzenie generalnie też, ale tylko te główne, reszta raczej meh. Długo się bawiliśmy, bo aż do 4. Pewnie zostaliśmy do końca imprezy, czyli do 5, ale mieliśmy godzinę drogi z powrotem, więc musieliśmy wracać, bo już powoli zasypiałem. Myślę, że wszystko się udało 🥰."
    },
    {
      id: 25,
      name: "Lot do Mediolanu",
      date: "3 lutego, 2025",
      description: "The park where we saw the lights",
      coordinates: [45.46412547363981, 9.1919091316721],
      imageUrl: "./25.jpg",
      story: "Nadszedł długo wyczekiwany przeze mnie dzień. Niespodzianka, którą trzymałem w ukryciu przez długi, ale to długi czas. Lot do Mediolanu! Wiedziałem, że Maja bardzo chce polecieć samolotem, więc uznałem, że połączę to razem z wycieczką do jakiegoś zagranicznego miasta. Padło na Mediolan ze względów ekonomicznych i czasowych. Uznałem też, że Włochy są po prostu na tyle fajnych miejscem, że będziemy mogli to długo wspominać. Musiałem wszystko uzgodnić z mamą Mai, choć wątpiłem, że się zgodzi. Po jakimś czasie namysłu zgodziła się. Maja wyglądała na bardzo szczęśliwą, gdy lecieliśmy do Mediolanu, mam nadzieję, że wszystko się jej podobało, bo naprawdę się postarałem. Bardzo się denerwowałem, czy dam radę wszystko ogarnąć. Czy uda się dojechać do Mediolanu, czy dam radę kupić bilety na metro, czy dam radę nas poprowadzić przez miasto i czy damy radę wrócić. Wziąłem to wszystko na siebie, bo chciałem, by Maja spędziła niesamowicie ten dzień. Finalnie stwierdzam, że było super i mam naprawdę głęboką nadzieję, że dla Mai zostanie ta wycieczka ciepłym i niezapomnianym wspomnieniem 🥰."
    }
  ];

  getMemories(): MemoryLocation[] {
    return this.memories;
  }
}
