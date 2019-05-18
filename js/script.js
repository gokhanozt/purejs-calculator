
window.onload = function () {
    var keys = document.querySelectorAll("#keys li");
    var screen = document.querySelectorAll('.current p')[0];
    var total_screen = document.querySelectorAll('.total-screen')[0];
    var clear = document.getElementsByClassName('clear')[0];

    for (var i = 0; i < keys.length; i += 1) {

        if (keys[i].innerHTML === '=') {
            keys[i].addEventListener("click", calculation(i));
        } else {
            keys[i].addEventListener("click", operation(i));
        }
    }

    function operation(i) {
        return function () {
            if (keys[i].innerHTML === "/") {
                screen.innerHTML += "/ ";
                total_screen.innerHTML = screen.innerHTML;
            } else if (keys[i].innerHTML === "x") {
                screen.innerHTML += "*";
                total_screen.innerHTML = screen.innerHTML;
            } else if (keys[i].innerHTML === "+") {
                screen.innerHTML += "+";
                total_screen.innerHTML = screen.innerHTML;
            } else if (keys[i].innerHTML === "-") {
                screen.innerHTML += "-";
                total_screen.innerHTML = screen.innerHTML;
            } else if (keys[i].innerHTML === "+/-") {
                if (Math.sign(screen.innerHTML) === -1) {
                    screen.innerHTML = screen.innerHTML.split("-")[1];
                } else {
                    screen.innerHTML = ("-") + (screen.innerHTML);
                }
                total_screen.innerHTML = screen.innerHTML;
            } else if (keys[i].innerHTML === "x^y") {
                screen.innerHTML += "^";
                total_screen.innerHTML = screen.innerHTML;
            } else if (keys[i].innerHTML === "DEL") {
                screen.innerText = screen.innerHTML.substr(0, screen.innerHTML.length - 1);
            } else {
                if (screen.innerHTML === "0")
                    screen.innerHTML = "";
                screen.innerHTML += keys[i].innerHTML;
            }

        };
    }

    clear.onclick = function () {
        screen.innerHTML = '0';
        total_screen.innerHTML = "";
    };

    function calculation(i) {
        return function () {
            total_screen.innerHTML = "";
            if (screen.innerHTML.indexOf('^') > 0) {
                screen.innerHTML = Math.pow(eval(screen.innerHTML.split("^")[0]), eval(screen.innerHTML.split("^")[1]));
            } else {
                screen.innerHTML = eval(screen.innerHTML);
            }

        };

    }

    document.body.addEventListener('keydown', function (e) {

        switch (event.which) {
            case 48:
                simulateClick(document.getElementsByClassName('zero')[0]);
                break;
            case 96:
                simulateClick(document.getElementsByClassName('zero')[0]);
                break;
            case 49:
                simulateClick(document.getElementsByClassName('one')[0]);
                break;
            case 97:
                simulateClick(document.getElementsByClassName('one')[0]);
                break;
            case 50:
                simulateClick(document.getElementsByClassName('two')[0]);
                break;
            case 98:
                simulateClick(document.getElementsByClassName('two')[0]);
                break;
            case 51:
                simulateClick(document.getElementsByClassName('three')[0]);
                break;
            case 99:
                simulateClick(document.getElementsByClassName('three')[0]);
                break;
            case 52:
                simulateClick(document.getElementsByClassName('four')[0]);
                break;
            case 100:
                simulateClick(document.getElementsByClassName('four')[0]);
                break;
            case 53:
                simulateClick(document.getElementsByClassName('five')[0]);
                break;
            case 101:
                simulateClick(document.getElementsByClassName('five')[0]);
                break;
            case 54:
                simulateClick(document.getElementsByClassName('six')[0]);
                break;
            case 102:
                simulateClick(document.getElementsByClassName('six')[0]);
                break;
            case 55:
                simulateClick(document.getElementsByClassName('seven')[0]);
                break;
            case 103:
                simulateClick(document.getElementsByClassName('seven')[0]);
                break;
            case 56:
                simulateClick(document.getElementsByClassName('eight')[0]);
                break;
            case 104:
                simulateClick(document.getElementsByClassName('eight')[0]);
                break;
            case 57:
                simulateClick(document.getElementsByClassName('nine')[0]);
                break;
            case 105:
                simulateClick(document.getElementsByClassName('nine')[0]);
                break;
            case 190:
                simulateClick(document.getElementsByClassName('dot')[0]);
                break;

            case 110:
                simulateClick(document.getElementsByClassName('dot')[0]);
                break;
            case 107:
                simulateClick(document.getElementsByClassName('plus')[0]);
                break;
            case 109:
                simulateClick(document.getElementsByClassName('min')[0]);
                break;
            case 106:
                simulateClick(document.getElementsByClassName('multi')[0]);
                break;
            case 111:
                simulateClick(document.getElementsByClassName('div')[0]);
                break;
            case 13:
                simulateClick(document.getElementsByClassName('equals')[0]);
                break;
            case 8:
                simulateClick(document.getElementsByClassName('delete')[0]);
                break;
            case 46:
                simulateClick(document.getElementsByClassName('clear')[0]);
                break;
            default:
                break;
        }
    });

    var simulateClick = function (elem) {
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        var canceled = !elem.dispatchEvent(evt);
    };
}