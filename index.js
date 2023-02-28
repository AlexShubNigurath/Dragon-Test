//Test

const testButt = document.querySelector('.test_butt');
const blockResult = document.querySelector('.block_result');
const blockInfo = document.querySelector('.block_info');

testButt.addEventListener("click", test);

function test() {

    let mudWings = 0;
    let nightWings = 0;
    let skyWings = 0;
    let rainWings = 0;
    let sandWings = 0;
    let seaWings = 0;
    let iceWings = 0;
    let mudScaleNumber = 0;

    function que1() {

        var q1 = document.getElementsByName('r1');

        for (i = 0; i < q1.length; i++) {

            if (q1[i].checked == true && i == 0) {
                mudWings += 12.5;
                break;
            }

            if (q1[i].checked == true && i == 1) {
                rainWings += 12.5;
                break;
            }

            if (q1[i].checked == true && i == 2) {
                sandWings += 12.5;
                break;
            }

            if (q1[i].checked == true && i == 3) {
                nightWings += 12.5;
                break;
            }

            if (q1[i].checked == true && i == 4) {
                iceWings += 12.5;
                break;
            }

            if (q1[i].checked == true && i == 5) {
                seaWings += 12.5;
                break;
            }

            if (q1[i].checked == true && i == 6) {
                skyWings += 12.5;
                break;
            }

        }

    }

    function que2() {

        var q2 = document.getElementsByName('r2');

        for (i = 0; i < q2.length; i++) {

            if (q2[i].checked == true && i == 0) {
                mudWings += 12.5;
                break;
            }

            if (q2[i].checked == true && i == 1) {
                rainWings += 12.5;
                break;
            }

            if (q2[i].checked == true && i == 2) {
                nightWings += 12.5;
                break;
            }

            if (q2[i].checked == true && i == 3) {
                sandWings += 12.5;
                break;
            }

            if (q2[i].checked == true && i == 4) {
                iceWings += 12.5;
                break;
            }

            if (q2[i].checked == true && i == 5) {
                seaWings += 12.5;
                break;
            }

            if (q2[i].checked == true && i == 6) {
                skyWings += 12.5;
                break;
            }

        }

    }

    function que3() {

        var q3 = document.getElementsByName('r3');

        for (i = 0; i < q3.length; i++) {

            if (q3[i].checked == true && i == 0) {
                rainWings += 12.5;
                break;
            }

            if (q3[i].checked == true && i == 1) {
                seaWings += 12.5;
                break;
            }

            if (q3[i].checked == true && i == 2) {
                skyWings += 12.5;
                break;
            }

            if (q3[i].checked == true && i == 3) {
                nightWings += 12.5;
                break;
            }

            if (q3[i].checked == true && i == 4) {
                iceWings += 12.5;
                break;
            }

            if (q3[i].checked == true && i == 5) {
                sandWings += 12.5;
                break;
            }

            if (q3[i].checked == true && i == 6) {
                mudWings += 12.5;
                mudScaleNumber += 0.5;
                break;
            }

        }

    }

    function que4() {

        var q4 = document.getElementsByName('r4');

        for (i = 0; i < q4.length; i++) {

            if (q4[i].checked == true && i == 0) {
                rainWings += 12.5;
                break;
            }

            if (q4[i].checked == true && i == 1) {
                skyWings += 12.5;
                break;
            }

            if (q4[i].checked == true && i == 2) {
                seaWings += 12.5;
                break;
            }

            if (q4[i].checked == true && i == 3) {
                nightWings += 12.5;
                break;
            }

            if (q4[i].checked == true && i == 4) {
                iceWings += 12.5;
                break;
            }

            if (q4[i].checked == true && i == 5) {
                sandWings += 12.5;
                break;
            }

            if (q4[i].checked == true && i == 6) {
                mudWings += 12.5;
                mudScaleNumber += 0.5;
                break;
            }

        }

    }

    function que5() {

        var q5 = document.getElementsByName('r5');

        for (i = 0; i < q5.length; i++) {

            if (q5[i].checked == true && i == 0) {
                rainWings += 12.5;
                break;
            }

            if (q5[i].checked == true && i == 1) {
                skyWings += 12.5;
                break;
            }

            if (q5[i].checked == true && i == 2) {
                nightWings += 12.5;
                break;
            }

            if (q5[i].checked == true && i == 3) {
                iceWings += 12.5;
                break;
            }

            if (q5[i].checked == true && i == 4) {
                sandWings += 12.5;
                break;
            }

            if (q5[i].checked == true && i == 5) {
                seaWings += 12.5;
                break;
            }

            if (q5[i].checked == true && i == 6) {
                mudWings += 12.5;
                break;
            }

        }

    }

    function que6() {

        var q6 = document.getElementsByName('r6');

        for (i = 0; i < q6.length; i++) {

            if (q6[i].checked == true && i == 0) {
                iceWings += 12.5;
                break;
            }

            if (q6[i].checked == true && i == 1) {
                mudWings += 12.5;
                break;
            }

            if (q6[i].checked == true && i == 2) {
                skyWings += 12.5;
                break;
            }

            if (q6[i].checked == true && i == 3) {
                sandWings += 12.5;
                break;
            }

            if (q6[i].checked == true && i == 4) {
                rainWings += 12.5;
                break;
            }

            if (q6[i].checked == true && i == 5) {
                seaWings += 12.5;
                break;
            }

            if (q6[i].checked == true && i == 6) {
                nightWings += 12.5;
                break;
            }

        }

    }

    function que7() {

        var q7 = document.getElementsByName('r7');

        for (i = 0; i < q7.length; i++) {

            if (q7[i].checked == true && i == 0) {
                skyWings += 12.5;
                break;
            }

            if (q7[i].checked == true && i == 1) {
                rainWings += 12.5;
                break;
            }

            if (q7[i].checked == true && i == 2) {
                mudWings += 12.5;
                break;
            }

            if (q7[i].checked == true && i == 3) {
                sandWings += 12.5;
                break;
            }

            if (q7[i].checked == true && i == 4) {
                iceWings += 12.5;
                break;
            }

            if (q7[i].checked == true && i == 5) {
                nightWings += 12.5;
                break;
            }

            if (q7[i].checked == true && i == 6) {
                seaWings += 12.5;
                break;
            }

        }

    }

    function que8() {
        var q8 = document.getElementsByName('r8');

        for (i = 0; i < q8.length; i++) {

            if (q8[i].checked == true && i == 0) {
                seaWings += 12.5;
                break;
            }

            if (q8[i].checked == true && i == 1) {
                iceWings += 12.5;
                break;
            }

            if (q8[i].checked == true && i == 2) {
                mudWings += 12.5;
                break;
            }

            if (q8[i].checked == true && i == 3) {
                rainWings += 12.5;
                break;
            }

            if (q8[i].checked == true && i == 4) {
                skyWings += 12.5;
                break;
            }

            if (q8[i].checked == true && i == 5) {
                sandWings += 12.5;
                break;
            }

            if (q8[i].checked == true && i == 6) {
                nightWings += 12.5;
                break;
            }

        }

    }

    function que9() {
        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value;
        const mudFamily = document.getElementById('mud_family');
        const mudScale = document.getElementById('mud_scales');
        const skyScale = document.getElementById('sky_scales');
        const nigthSkills = document.getElementById('night_skills');

        function mudFamilyTest () {
            if (mudScaleNumber == 0) {
                mudFamily.textContent = 'Вероятно, Вы были бы самым одним из самых младших драконов в вашей кладке';
            }

            if (mudScaleNumber == 0.5) {
                mudFamily.textContent = 'Вероятно, Вы были бы средним из драконов в вашей кладке';
            }

            if (mudScaleNumber == 1) {
                mudFamily.textContent = 'Вероятно, Вы были бы самым старшим в вашей кладке. Таких называют "Хранитилем!"';
            }
        }
        
        function mudScaleTest() {
            if (mudScaleNumber == 0 || mudScaleNumber == 0.5) {
                mudScale.textContent = 'У вас, вероятно, была бы обычная чешуя';
            }

            if (mudScaleNumber == 1) {
            
                if (month % 2 != 0) {
                    if (day <= 8 || day >= 17 || day < 24) {
                        mudScale.textContent = 'У вас, вероятно, была бы обычная чешуя';
                    }
    
                    if (day > 8 || day < 17 || day > 24) {
                        mudScale.textContent = 'У вас, вероятно, была бы огнеупорная чешуя. Поздравляю!';
                    }
    
                }
    
                if (month % 2 == 0) {
                    if (day > 8 || day < 17 || day > 24) {
                        mudScale.textContent = 'У вас, вероятно, была бы огнеупорная чешуя. Поздравляю!';
                    }
    
                    if (month % 2 != 0) {
                        if (day <= 8 || day >= 17 || day < 24) {
                            mudScale.textContent = 'У вас, вероятно, была бы обычная чешуя';
                        }
                        
                    }
    
                }
                
            }
        }

        function skyScaleTest () {
            if (month == 2 && day == 29) {
                skyScale.textContent = 'У Вас, вероятно, была бы либо огненная чешуя, либо не было бы огня вовсе. Это огромная редкость!';
            }
            else {
                skyScale.textContent = 'У Вас, вероятно, была бы обычная чешуя';
            }
        }

        function skillsTest() {
            if (day <= 8) {
                nigthSkills.textContent = 'У Вас, вероятно, не было бы особых способностей ночных драконов';
            }

            if (day >= 9 && day < 17) {
                nigthSkills.textContent = 'У Вас, вероятно, был бы небольшой дар к ясновидению';
            }

            if (day > 16 && day < 25) {
                nigthSkills.textContent = 'У Вас, вероятно, были бы дар к ясновидению и чтению мыслей';
            }

            if (day >= 25) {
                nigthSkills.textContent = 'У Вас, вероятно, были бы выдающиеся дар ясновидения и чтение мыслей. Поздравляю!';
            }

        }

        mudFamilyTest();
        mudScaleTest();
        skyScaleTest();
        skillsTest();

    }

    que1();
    que2();
    que3();
    que4();
    que5();
    que6();
    que7();
    que8();
    que9();

    blockResult.classList.add("ready");
    blockInfo.style.display = 'block';

    document.getElementById('mud').textContent = mudWings + '%';
    document.getElementById('sea').textContent = seaWings + '%';
    document.getElementById('rain').textContent = rainWings + '%';
    document.getElementById('sky').textContent = skyWings + '%';
    document.getElementById('night').textContent = nightWings + '%';
    document.getElementById('sand').textContent = sandWings + '%';
    document.getElementById('ice').textContent = iceWings + '%';

    let seaPercent = mudWings + seaWings;
    let rainPercent = seaPercent + rainWings;
    let skyPercent = rainPercent + skyWings;
    let nightPercent = skyPercent + nightWings;
    let sandPercent = nightPercent + sandWings;
    let icePercent = sandPercent + iceWings;

    let pieChart = document.querySelector('.pie_chart').style.background = "conic-gradient(sienna " + mudWings + "%, darkblue " + mudWings + "% " + seaPercent + "%, limegreen " + seaPercent + "% " + rainPercent + "%, orangered " + rainPercent + "% " + skyPercent + "%, slategray " + skyPercent + "% " + nightPercent + "%, khaki " + nightPercent + "% " + sandPercent + "%, lightsteelblue " + sandPercent + "% " + icePercent + "%)";

}

//Light\Night theme Desctop

const lightBtn = document.getElementById('light_theme_id');
const darkBtn = document.getElementById('dark_theme_id');

const lightNow = document.querySelector('.light_now');
const navContainer = document.querySelector('.navigate');
const mainContainer = document.querySelector('.main_container');
const footContainer = document.querySelector('.footer_container');
const themeList = document.querySelector('.theme_list');

lightBtn.addEventListener("click", light);
darkBtn.addEventListener("click", dark);
lightNow.addEventListener("click", lightOpen);

function lightOpen() {
    themeList.classList.toggle("open");
}

function light() {
    lightNow.textContent = 'Светлая тема';
    lightNow.classList.remove("dark");
    navContainer.classList.remove("dark");
    mainContainer.classList.remove("dark");
    footContainer.classList.remove("dark");
    lightBtn.classList.remove("dark");
    darkBtn.classList.remove("dark");
    themeList.classList.remove("dark");
}

function dark() {
    lightNow.textContent = 'Тёмная тема';
    lightNow.classList.add("dark");
    navContainer.classList.add("dark");
    mainContainer.classList.add("dark");
    footContainer.classList.add("dark");
    lightBtn.classList.add("dark");
    darkBtn.classList.add("dark");
    themeList.classList.add("dark");
}

//Light\Night theme Mobile

const themeBtn = document.querySelector('.theme_now');
const popupTheme = document.querySelector('.popup_theme');
const lightThemeMob = document.getElementById('light_theme_popup');
const darkThemeMob = document.getElementById('dark_theme_popup');

themeBtn.addEventListener("click", lightOpenMobile);

lightThemeMob.addEventListener("click", lightMobile);
darkThemeMob.addEventListener("click", darkMobile);

function lightOpenMobile() {
    popupTheme.classList.toggle("open");
}



function lightMobile() {
    themeBtn.textContent = 'Светлая тема';
    lightNow.classList.remove("dark");
    navContainer.classList.remove("dark");
    mainContainer.classList.remove("dark");
    footContainer.classList.remove("dark");
    lightBtn.classList.remove("dark");
    darkBtn.classList.remove("dark");
    themeList.classList.remove("dark");
    document.querySelector('.burger_popup').classList.remove("dark");
    document.querySelector('.popup_butt').classList.remove("dark");
    document.querySelector('.popup_light').classList.remove("dark");
}

function darkMobile() {
    themeBtn.textContent = 'Тёмная тема';
    lightNow.classList.add("dark");
    navContainer.classList.add("dark");
    mainContainer.classList.add("dark");
    footContainer.classList.add("dark");
    lightBtn.classList.add("dark");
    darkBtn.classList.add("dark");
    themeList.classList.add("dark");
    document.querySelector('.burger_popup').classList.add("dark");
    document.querySelector('.popup_butt').classList.add("dark");
    document.querySelector('.popup_light').classList.add("dark");
}

//Scroll Button

const scrollBtn = document.querySelector('.scroll_btn');

window.addEventListener("scroll", scrollShow);

function scrollShow() {

    if (window.scrollY > 100) {
        scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.style.display = "none";
    }

}

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

//Nazarbay

const nazBtn = document.querySelector('.name_butt');

nazBtn.addEventListener("click", nameCasino);

function nameCasino() {
    let q9 = document.getElementsByName('r9');
    const nazarbayInfo = document.querySelector('.nazarbay_info');
    const nazarbayColeso = document.querySelector('.nazarbay');

    function nameRoulette() {
    
        for (i = 0; i < q9.length; i++) {
            if (q9[i].checked == true && i == 0) {
                let mudNames = ["Жаба", "Лягушка", "Камыш", "Рогоз", "Кувшинка", "Ил", "Торф", "Стерх", "Фазан", "Гавиал", "Глина", "Зола", "Ибис", "Кайман", "Муха", "Цапля", "Охра", "Брюх", "Журавль", "Трясина", "Сепия", "Кулик", "Чибис", "Росянка", "Мох", "Клюква", "Морошка", "Осока", "Багульник", "Аир", "Пузырчатка", "Пушица", "Кипарис", "Голубика", "Сфагнум", "Глухарь", "Тетерев", "Сорокопут", "Чечевица", "Аист", "Землеройка", "Бобёр", "Выдра", "Ондатра", "Кулик", "Утка", "Окаванго", "Сапата", "Пантанал", "Манчак", "Вепрь", "Мечехвост", "Степь"];
                let randomMudName = Math.floor(Math.random() * mudNames.length);
                nazarbayInfo.textContent = mudNames[randomMudName];
            }

            if (q9[i].checked == true && i == 1) {
                let seaNames = ["Лагуна", "Жабр", "Ласт", "Медуза", "Карась", "Окунь", "Сом", "Щука", "Цунами", "Глубина", "Альбатрос", "Анемона", "Акула", "Коралл", "Орка", "Кит", "Барракуда", "Вобла", "Пиранья", "Поток", "Перламутр", "Плавник", "Удильщик", "Осьминог", "Наутилус", "Саргасс", "Горбач", "Гребешок", "Планктон", "Краб", "Рак", "Синь", "Спрут", "Тайфун", "Угорь", "Улитка", "Карапакс", "Мальстрём", "Кайра", "Кальмар", "Шквал", "Черепаха", "Каури", "Индиго", "Жемчуг", "Причал", "Моллюск", "Мидиии", "Ракушка", "Панцирь", "Каракатица", "Чайка", "Берег", "Прилив", "Потоп", "Бриз", "Дельфин", "Водоросль", "Буревестник", "Дрейф", "Штиль", "Пузырик"];
                let randomSeaName = Math.floor(Math.random() * seaNames.length);
                nazarbayInfo.textContent = seaNames[randomSeaName];
            }

            if (q9[i].checked == true && i == 2) {
                let skyNames = ["Рубин", "Пирита", "Утёс", "Пурпур", "Кармин", "Жар", "Сапсан", "Ястреб", "Закат", "Рассвет", "Зенит", "Сердолика", "Коршун", "Кречет", "Лавина", "Заря", "Дрозд", "Дронт", "Гранат", "Орёл", "Перо", "Пик", "Небо", "Кандык", "Эдельвейс", "Горицвет", "Облако", "Сурок", "Оронго", "Дзерен", "Пожар", "Галка", "Голубь", "Бородач", "Лебедь", "Мандаринка", "Пепел", "Чеглок", "Пустельга", "Кобчик", "Дербник", "Балобан", "Дятел", "Кардинал", "Каштан", "Фуксия", "Киноварь", "Кагор", "Сангрия", "Ализар", "Терракота", "Малина", "Секретарь", "Гриф", "Медь", "Бронза", "Фен", "Горизонт", "Муссон", "Пассат", "Бриса"];
                let randomSkyName = Math.floor(Math.random() * skyNames.length);
                nazarbayInfo.textContent = skyNames[randomSkyName];
            }

            if (q9[i].checked == true && i == 3) {
                let rainNames = ["Кинкажу", "Ореол", "Хамелион", "Джамбу", "Грация", "Гламур", "Нетопырь", "Ананас", "Анаконда", "Орангутан", "Банан", "Тамарин", "Манго", "Попугай", "Прелесть", "Орхидея", "Роскошь", "Красавчик", "Мангр", "Лиана", "Тапир", "Туаланг", "Кокос", "Ламантин", "Лори", "Гиббон", "Геликония", "Бромелия", "Блеск", "Сиаманг", "Тукан", "Ягуар", "Казуар", "Окапи", "Мармосет", "Мата Мата", "Павлин", "Зебра", "Игуана", "Муравьед", "Горилла", "Пекари", "Оцелот", "Капибара", "Макао", "Фламинго", "Палочник", "Броненосец", "Колибри", "Бегемот", "Дикобраз", "Папайя", "Джекфрут", "Маранг", "Чемпедак", "Дуриан", "Авокадо", "Пандан", "Моринда", "Питахайя", "Рамбутан", "Гуава", "Кумкват", "Гибискус"];
                let randomRainName = Math.floor(Math.random() * rainNames.length);
                nazarbayInfo.textContent = rainNames[randomRainName];
            }

            if (q9[i].checked == true && i == 4) {
                let sandNames = ["Гадюка", "Аддакс", "Тёрн", "Армадилла", "Вихрь", "Пал", "Страус", "Самум", "Бархан", "Бежа", "Пальма", "Тушкан", "Сирроко", "Скорпион", "Скарабей", "Сушь", "Стервятняк", "Факел", "Цереус", "Уж", "Эфа", "Оникс", "Ожог", "Уголь", "Оазис", "Искр", "Палящий", "Огонь", "Обжог", "Пламень", "Палящий", "Агава", "Агама", "Кобра", "Мамба", "Шип", "Жало", "Опунций", "Мангуст", "Гепард", "Куфия", "Зыбун", "Дюна", "Вспышка", "Верблюд", "Вилорог", "Кактус", "Мираж", "Чили", "Песчанка", "Кот", "Орикс", "Кайот", "Фенек", "Гладконос", "Алое", "Саксаул", "Кипарис", "Финик", "Тимьян", "Тамариск", "Акация", "Гифена", "Колоцинт", "Блеск", "Золото", "Сирокко"];
                let randomSandName = Math.floor(Math.random() * sandNames.length);
                nazarbayInfo.textContent = sandNames[randomSandName];
            }

            if (q9[i].checked == true && i == 5) {
                let nightNames = ["Ностромо", "Провидец", "Чтица", "Пророк", "Гений", "Надежда", "Молния", "Обсидиан", "Вещунья", "Вдумчивый", "Звездокрыл", "Власта", "Лют", "Доминанта", "Разумница", "Пытливая", "Воля", "Потрошитель", "Смертельный", "Звездокоготь", "Коготь", "Землерой", "Коммодор", "Сова", "Ночь", "Месяц", "Оборотень", "Зоркость", "Глазаста", "Крапивница", "Композитор", "Крылан", "Зубаста", "Затмение", "Дымогляд", "Дриада", "Блестоглаз", "Быстрокрылая", "Мясоруб", "Следопыт", "Ясновидица", "Тенегончая", "Тайна", "Вой", "Заговор", "Крушитель", "Шёпот", "Туман", "Созвездие", "Мрачный", "Чистоплот", "Дырокол", "Сияющий", "Бдительный", "Беспощадный", "Безупречный", "Беспокойный", "Громобой", "Добронрав", "Летун", "Умнодар", "Мясник"];
                let randomNightName = Math.floor(Math.random() * nightNames.length);
                nazarbayInfo.textContent = nightNames[randomNightName];
            }

            if (q9[i].checked == true && i == 6) {
                let iceNames = ["Ледник", "Снежна", "Снежинка", "Рысь", "Снежная лиса", "Бора", "Буран", "Мистраль", "Алмаз", "Опал", "Лазурит", "Кианит", "Глетчер", "Холод", "Хладна", "Мороз", "Иней", "Лёд", "Айсберг", "Град", "Пингвин", "Стужа", "Фьорд", "Вьюга", "Арктик", "Нарвал", "Норка", "Манул", "Альба", "Горностай", "Тундра", "Метель", "Хрусталь", "Нанук", "Ласка", "Ржанка", "Зуёк", "Снег", "Песец", "Полярная сова", "Нельма", "Чир", "Омуль", "Ряпушка", "Вереск", "Тюлень", "Кашалот", "Морской леопард", "Росомаха", "Волк", "Нерпа", "Морж", "Белуха", "Косатка", "Волнянка", "Сосулька", "Кристалл", "Иглу", "Наледь", "Юрта", "Север", "Буря", "Сугроб", "Снегопад", "Студень", "Барс"];
                let randomIceName = Math.floor(Math.random() * iceNames.length);
                nazarbayInfo.textContent = iceNames[randomIceName];
            }

        }

        nazarbayColeso.style.opacity = '30%';

    }

    function nameBtnSound() {
        var nazSound = new Audio('assets/nazarbay.mp3');
        nazSound.volume = 0.7;
        nazSound.play();
    }

    function nazarbayCircle() {
        function nazarbaevCircle() {
            document.querySelector('.nazarbaev_container').classList.add("open");
        }

        function mocha() {
            document.querySelector('.mocha').style.display = 'block';
        }

        nazarbayColeso.style.transform = "rotate(" + -400 + "deg)";

        setTimeout(nazarbaevCircle, 3000)
        setTimeout(mocha, 3500)
    }


    nameBtnSound();
    setTimeout(nazarbayCircle, 2000);
    setTimeout(nameRoulette, 7000);
}

//Burger menu

const burgerLine = document.querySelector('.burger_line');
const burgerPopup = document.querySelector('.burger_popup');
const lineCross = document.querySelector('.line_cross');

burgerLine.addEventListener("click", burgerOpen);
lineCross.addEventListener("click", burgerOpen);

function burgerOpen() {
    burgerPopup.classList.toggle("open");
    popupTheme.classList.remove("open");
}