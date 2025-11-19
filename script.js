// Nupp&Кнопка Programmeerimine I (arhiiv.html)
const btnProgaI = document.getElementById("Programmeerimine_I");
if (btnProgaI) {
    btnProgaI.addEventListener("click", function () {
        window.location.href = "./progaI.html";
    });
}

// Nupp&Кнопка Programmeerimine II (arhiiv.html)
const btnProgaII = document.getElementById("Programmeerimine_II");
if (btnProgaII) {
    btnProgaII.addEventListener("click", function () {
        window.location.href = "./progaII.html";
    });
}


//  Nupp&Кнопка Kontrolltöö (progaI.html)
const btnKontroll = document.getElementById("Progk_I");
if (btnKontroll) {
    btnKontroll.addEventListener("click", function () {
        window.location.href = "./kontProgaI.html";
    });
}

//  Nupp&Кнопка Tagasi (kontoProgaI.html)
const btnTagasi1 = document.getElementById("Tagasi1");
if (btnTagasi1) {
    btnTagasi1.addEventListener("click", function () {
        window.location.href = "./progaI.html";
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
