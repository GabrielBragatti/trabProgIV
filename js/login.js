var body = document.querySelector("body")
var singUpButton = document.querySelector("#singUp")
var singInButton = document.querySelector("#singIn")

body.onload = function () {
    body.className = "on-load";
}

singUpButton.addEventListener("click", function () {
    body.className = "sing-up"
});

singInButton.addEventListener("click", function () {
    body.className = "sing-in"
});

$("#access").on("click", function (event) {
    event.preventDefault();

    let email = $("#signIn-form input[name='email']").val();
    let password = $("#signIn-form input[name='password']").val();

    let formData = {
        email: email,
        password: password
    };

    let jsonData = JSON.stringify(formData);

    $.ajax({
        url: "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signin",
        method: "POST",
        data: jsonData,
        contentType: "application/json",
    })
    .done(function(data) {
        alert('success');
        console.log('Login realizado com sucesso!');
        console.log(data);
        setTimeout(function () {
            window.location.href = "./initial.html";
        }, 1500);
    })
    .fail(function(xhr, status, error) {
        console.log('error: ');
        console.log(xhr);
        console.log(status);
        console.log(error);
    });
});

$("#register").on("click", function (event) {
    event.preventDefault();

    let email = $("#signUp-form input[name='email']").val();
    let password = $("#signUp-form input[name='password']").val();
    let confirmedPassword = $("#signUp-form input[name='confirmedPassword']").val();

    let formData = {
        email: email,
        password: password,
        confirmedPassword: confirmedPassword
    };

    let jsonData = JSON.stringify(formData);
    
    $.ajax({
        url: "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup",
        method: "POST",
        data: jsonData,
        contentType: "application/json",
    })
    .done(function(data) {
        alert('Cadastro realizado com sucesso!');
        console.log('success: ');
        console.log(data);
    })
    .fail(function(xhr, status, error) {
        console.log('error: ');
        console.log(xhr);
        console.log(status);
        console.log(error);
    });
});