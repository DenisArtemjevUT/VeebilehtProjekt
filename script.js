// Nupp&Кнопка Programmeerimine I 
const btnProgaI = document.getElementById("Programmeerimine_I");
if (btnProgaI) {
    btnProgaI.addEventListener("click", function () {
       window.location.href = "./Programmeerimine_1/progaI.html";
    });

}


//  Nupp&Кнопка Kontrolltöö (progaI.html)
const btnKontroll = document.getElementById("ProgKt");
if (btnKontroll) {
    btnKontroll.addEventListener("click", function () {
        window.location.href = "./progaIKt.html";
    });
}

//  Nupp&Кнопка Eksamid (progaI.html)
const btnEks = document.getElementById("ProgEks");
if (btnEks) {
    btnEks.addEventListener("click", function () {
        window.location.href = "./progaEksamid.html";
    });

}


// ------------------------------------------------------------------- //


// Nupp&Кнопка Programmeerimine II 
const btnProgaII = document.getElementById("Programmeerimine_II");
if (btnProgaII) {
    btnProgaII.addEventListener("click", function () {
        window.location.href = "./Programmeerimine_2/progaII.html";
    });
}


//  Nupp&Кнопка Kontrolltöö (progaII.html)
const btnKontroll2 = document.getElementById("Prog2kt_II");
if (btnKontroll2) {
    btnKontroll2.addEventListener("click", function () {
        window.location.href = "./proga2Kt.html";
    });
}


//  Nupp&Кнопка Eksamid (progaII.html)
const btnProgaEks2 = document.getElementById("Prog2Eks");
if (btnProgaEks2) {
    btnProgaEks2.addEventListener("click", function () {
        window.location.href = "./proga2Eks.html";
    });
}


// ------------------------------------------------------------------- //


// Nupp tagasi avalehele (index.html) – abloend / avloend / proga I / proga II
const btnTagasiIndex = document.getElementById("TagasiIndex");
if (btnTagasiIndex) {
    btnTagasiIndex.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
}



// Kast kontrolltöö (andmebaasid loend)
const btnAndmeKt = document.getElementById("AndmebaasidKt");
if (btnAndmeKt) {
    btnAndmeKt.addEventListener("click", function () {
        window.location.href = "./kontrolltööd.html";
    });
}


// Kast „Eksamid “ (andmebaasid loend)
const btnAbEksami2 = document.getElementById("AndmebaasidEks");
if (btnAbEksami2) {
    btnAbEksami2.addEventListener("click", function () {
        window.location.href = "./eksamid.html";
    });
}

//Andmebaasid
const andmebaasidI = document.getElementById("Andme");
if (andmebaasidI) {
    andmebaasidI.addEventListener("click", function () {
        window.location.href = "./Andmebaasid/abloend.html";
    });
}


// ------------------------------------------------------------------- //



// Kast „Andmeturve eksam 01.06.2023“ (andmeturve loend)
const btnAvEksami1 = document.getElementById("AndmeturveEks");
if (btnAvEksami1) {
    btnAvEksami1.addEventListener("click", function () {
        window.location.href = "./aveksamid.html";
    });
}


// Kast KT (AAR loend)
const btnAarKt = document.getElementById("AARKT");
if (btnAarKt) {
    btnAarKt.addEventListener("click", function () {
        window.location.href = "./Aarkontrolltööd.html";
    });
}

// Kast Eksam (AAR loend)
const btnAarEks = document.getElementById("AAREks");
if (btnAarEks) {
    btnAarEks.addEventListener("click", function () {
        window.location.href = "./AarEksam.html";
    });
}


// Kast 3. (AAR loend)
const Aar = document.getElementById("Aara");
if (Aar) {
    Aar.addEventListener("click", function () {
        window.location.href = "./AAR/aarloend.html";
    });
}



// ------------------------------------------------------------------- //

// OOP loend
const btnOop = document.getElementById("Oop");
if (btnOop) {
    btnOop.addEventListener("click", function () {
        window.location.href = "./OOP/ooploend.html"; 
    });
}


// Kast 1. KT (OOP loend)
const btnOopKT1 = document.getElementById("OOPKT");
if (btnOopKT1) {
    btnOopKT1.addEventListener("click", function () {
        window.location.href = "./oopkt.html";
    });
}

// Kast 2. KT (OOP loend)
const btnOopKT2 = document.getElementById("OOPKT2");
if (btnOopKT2) {
    btnOopKT2.addEventListener("click", function () {
        window.location.href = "./oopkt2.html";
    });
}


// Tagasi nupp (OOP)
const btnTagasiOOPLoend = document.getElementById("TagasiOOPLoend");
if (btnTagasiIndex) {
    btnTagasiIndex.addEventListener("click", function () {
        window.location.href = "../ooploend.html";
    });
}

console.log("btnOopKT1 =", btnOopKT1)



// ------------------------------------------------------------------- //


// Anmdeturve
const btAdme = document.getElementById("Anmdeturve");
if (btAdme) {
    btAdme.addEventListener("click", function () {
        window.location.href = "./Anmdeturve/avloend.html"; 
    });
}



// Anmdeturve
const btAAR = document.getElementById("AAR_KT");
if (btAAR) {
    btAAR.addEventListener("click", function () {
        window.location.href = "./AAR/aar_materjal_eksam2021b..html"; 
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
