﻿var token = "";

function LogIn(email, password) {
        $.ajax({
        url: "http://localhost:51465/Admin/LogIn?email=" + email + " &password=" + password,
        method: "GET",
            success: function (data) {
                if (data.log == true) {
                window.sessionStorage.setItem("token", data.token);
                window.location = "Shedule/schedule.html";
            }
            else {
                alert("Невірний логін або пароль");
            }
        },
        error: function (data) {
            console.log(data);
        }

    })
}
$("#btnLogIn").click(function () {
    LogIn(document.getElementById("txt_email").value, document.getElementById("txt_password").value);
})