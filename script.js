// Nupp&Кнопка Programmeerimine I 
const btnProgaI = document.getElementById("Programmeerimine_I");
if (btnProgaI) {
    btnProgaI.addEventListener("click", function () {
       window.location.href = "./Programmeerimine_1/progaI.html";
    });
}

// Nupp&Кнопка Programmeerimine II 
const btnProgaII = document.getElementById("Programmeerimine_II");
if (btnProgaII) {
    btnProgaII.addEventListener("click", function () {
        window.location.href = "./Programmeerimine_2/progaII.html";
    });
}


//  Nupp&Кнопка Kontrolltöö (progaI.html)
const btnKontroll = document.getElementById("Progk_I");
if (btnKontroll) {
    btnKontroll.addEventListener("click", function () {
        window.location.href = "./progaIKt.html";
    });
}

//  Nupp&Кнопка Tagasi (kontoProgaI.html)
const btnTagasi1 = document.getElementById("Tagasi1");
if (btnTagasi1) {
    btnTagasi1.addEventListener("click", function () {
        window.location.href = "./progaI.html";
    });
}



//  Nupp&Кнопка Kontrolltöö (progaII.html)
const btnKontroll2 = document.getElementById("Prog2kt_II");
if (btnKontroll2) {
    btnKontroll2.addEventListener("click", function () {
        window.location.href = "./proga2Kt.html";
    });
}


//  Nupp&Кнопка Tagasi (kontoProgaI.html)
const btnTagasi2 = document.getElementById("Tagasi2");
if (btnTagasi2) {
    btnTagasi2.addEventListener("click", function () {
        window.location.href = "./progaII.html";
    });
}


// Nupp tagasi avalehele (index.html) – abloend / avloend
const btnTagasiIndex = document.getElementById("TagasiIndex");
if (btnTagasiIndex) {
    btnTagasiIndex.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
}

// Nupp tagasi andmebaasid loendisse (materjali vaated)
const btnTagasiAbLoend = document.getElementById("TagasiAbLoend");
if (btnTagasiAbLoend) {
    btnTagasiAbLoend.addEventListener("click", function () {
        window.location.href = "./abloend.html";
    });
}

// Kast „Eksami I osa“ (andmebaasid loend)
const btnAbEksami1 = document.getElementById("AbEksami1");
if (btnAbEksami1) {
    btnAbEksami1.addEventListener("click", function () {
        window.location.href = "./ab_materjal_eksam1.html";
    });
}

// Kast „Eksami II osa – näidis“ (andmebaasid loend)
const btnAbEksami2 = document.getElementById("AbEksami2");
if (btnAbEksami2) {
    btnAbEksami2.addEventListener("click", function () {
        window.location.href = "./ab_materjal_eksam2.html";
    });
}

// Nupp tagasi andmeturve loendisse (materjali vaade)
const btnTagasiAvLoend = document.getElementById("TagasiAvLoend");
if (btnTagasiAvLoend) {
    btnTagasiAvLoend.addEventListener("click", function () {
        window.location.href = "./avloend.html";
    });
}

// Kast „Andmeturve eksam 01.06.2023“ (andmeturve loend)
const btnAvEksami1 = document.getElementById("AvEksami1");
if (btnAvEksami1) {
    btnAvEksami1.addEventListener("click", function () {
        window.location.href = "./av_materjal_eksam1.html";
    });
}

// Nupp tagasi AAR loendisse (materjali vaated)
const btnTagasiAarLoend = document.getElementById("TagasiAarLoend");
if (btnTagasiAarLoend) {
    btnTagasiAarLoend.addEventListener("click", function () {
        window.location.href = "./aarloend.html";
    });
}

// Kast „Kontrolltöö – Vahemälu arhitektuuri vaates“ (AAR loend)
const btnAarKTVahemalu = document.getElementById("AarKTVahemalu");
if (btnAarKTVahemalu) {
    btnAarKTVahemalu.addEventListener("click", function () {
        window.location.href = "./aar_materjal_vahemalu.html";
    });
}

// Kast „Eksam – 2021 – B“ (AAR loend)
const btnAarEksam2021B = document.getElementById("AarEksam2021B");
if (btnAarEksam2021B) {
    btnAarEksam2021B.addEventListener("click", function () {
        window.location.href = "./aar_materjal_eksam2021b.html";
    });
}

// Nupp tagasi OOP loendisse (materjali vaated)
const btnTagasiOopLoend = document.getElementById("TagasiOopLoend");
if (btnTagasiOopLoend) {
    btnTagasiOopLoend.addEventListener("click", function () {
        window.location.href = "./OOP/ooploend.html";
    });
}

// Kast 1. KT (OOP loend)
const btnOopKT1 = document.getElementById("OopKT1");
if (btnOopKT1) {
    btnOopKT1.addEventListener("click", function () {
        window.location.href = "./oop_materjal_kt1.html";
    });
}

// Kast 2. KT (OOP loend)
const btnOopKT2 = document.getElementById("OopKT2");
if (btnOopKT2) {
    btnOopKT2.addEventListener("click", function () {
        window.location.href = "./oop_materjal_kt2.html";
    });
}


//Andmebaasid
const andmebaasidI = document.getElementById("AndmeU");
if (andmebaasidI) {
    andmebaasidI.addEventListener("click", function () {
        window.location.href = "./abloend.html";
    });
}

const Aara = document.getElementById("Aara");
if (Aara) {
    Aara.addEventListener("click", function () {
        window.location.href = "./aarloend.html";
    });
}


// OOP loend
const btnOop = document.getElementById("Oop");
if (btnOop) {
    btnOop.addEventListener("click", function () {
        window.location.href = "./OOP/ooploend.html"; 
    });
}


/*  
============================================================
 ОБЪЯСНЕНИЕ (что делает этот код)

 В этом файле мы подключаем обработчики клика к разным кнопкам
 на разных страницах сайта. Код написан так, чтобы он был
 безопасным и работал на всех страницах, даже если какая-то
 кнопка отсутствует.

 ОБЩИЙ ПРИНЦИП ДЛЯ КАЖДОЙ КНОПКИ:
 1) Найти кнопку по её id (document.getElementById).
 2) Проверить, существует ли такая кнопка на странице.
    - Если кнопки нет → пропускаем и не ломаем сайт.
    - Если кнопка есть → выполняем следующий шаг.
 3) "Прикрепить" к ней действие при клике (addEventListener).
    При клике — переходим на нужную HTML-страницу.

 Это делается для того, чтобы:
 - один script.js можно было использовать на всех страницах;
 - не было ошибок "Cannot read properties of null";
 - кнопки всегда работали только там, где они реально есть;
 - сайт был стабильным, безопасным и удобным для расширения.

============================================================
*/
