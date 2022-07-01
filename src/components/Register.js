import React from "react";
import AuthForm from "./AuthForm";

function Register() {
    return (
        <AuthForm
            formTitle={"Регистрация"}
            buttonText={"Зарегистрироваться"}
            onSubmit={handleSubmit}

    )
}