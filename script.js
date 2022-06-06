var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 5000);
function toggle() {
            let side = document.getElementById("sid");
            if (side.style.transform != 'translateX(-160%)') {
                side.style.transform = "translateX(-160%)";
            }
            else {
                side.style.transform = "translateX(0)";
            }
        }
        