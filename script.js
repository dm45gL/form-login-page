const form = document.querySelector("form");
const eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    if (eInput.value === "") {
        eField.classList.add("shake", "error");
    } else {
        checkEmail();
    }

    if (pInput.value === "") {
        pField.classList.add("shake", "error");
    } else {
        checkPass();
    }

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
        checkEmail();
    };

    pInput.onkeyup = () => {
        checkPass();
    };

    function checkEmail() {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");

            let errorTxt = eField.querySelector(".error-txt");

            if (eInput.value !== "") {
                errorTxt.innerText = "Enter a valid email address";
            } else {
                errorTxt.innerText = "Email can't be blank";
            }
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value === "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "../home/index.html";
    }
};
