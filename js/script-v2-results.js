$(function () {

    const wining = document.getElementById("winning");
    const losing = document.getElementById("losing");

    wining.innerHTML = sessionStorage.getItem("wining-counter");
    losing.innerHTML = sessionStorage.getItem("lose-counter");

    if (sessionStorage.getItem("wining-counter") === null && sessionStorage.getItem("lose-counter") === null) {
        wining.innerHTML = 0;
        losing.innerHTML = 0;
    } else if (sessionStorage.getItem("lose-counter") === null) {
        losing.innerHTML = 0;
    } else if (sessionStorage.getItem("wining-counter") === null) {
        wining.innerHTML = 0;
    }


    $("#return-to-game").on('click', function () {
        sessionStorage.clear();
    });
});
