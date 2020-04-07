let T1_editActive = false;
let T1_out = document.getElementById("t1__out");
let T1_in = document.getElementById("t1__in");



function T1_switch(event) {

    if (event.code == "KeyE") {


        if (T1_editActive) {
            T1_in.style.display = "none";
            T1_out.style.display = "block";
            T1_editActive = false;

            T1_out.innerHTML = T1_in.value;


        } else {
            T1_in.style.display = "block";
            T1_out.style.display = "none";
            T1_editActive = true;
        }
    }

}

document.body.addEventListener("keypress", T1_switch);











