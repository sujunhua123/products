var d1 = document.getElementById("d1");
    var u1 = d1.getElementsByTagName("ul")[0];
    u1.innerHTML += u1.innerHTML;
    function f1(){
        var again = (1 / 2) * d1.scrollWidth;
        if (d1.scrollLeft >= d1.scrollWidth / 2) {
            d1.scrollLeft = 0;
        }
        d1.scrollLeft++;
    }
    setInterval(f1, 30);