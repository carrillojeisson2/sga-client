import React, { useState } from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { Auth } from "../../../../api"
import "./RegisterForm.scss";
import { initialValues, validationSchema } from "./RegisterForm.for"

const authController = new Auth();


export function RegisterForm(props) {


    const { openLogin } = props;
    const [error, setError] = useState("");

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                setError("");
                await authController.register(formValue);
                openLogin();
                console.log(formValue)
            } catch (error) {
                setError("Error en el servidor");
                console.log(error)
            }
        },
    });
    return (
        <Form className="register-form" onSubmit={formik.handleSubmit}>
            <Form.Input
                name="email"
                fluid
                placeholder="Correo electronico"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <br />
            <br />

            <Form.Input
                name="password"
                fluid

                type="password"
                placeholder="Contraseña"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
            />

            <br />

            <Form.Input
                name="repeatPassword"
                fluid
                type="password"
                placeholder="Repetir contraseña"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />

            <br />

            <Form.Checkbox
                name="conditionsAccepted"
                label="He leído y acepto las poíticas de privacidad"
                onChange={(_, data) =>
                    formik.setFieldValue("conditionsAccepted", data.checked)
                }
                checked={formik.values.conditionsAccepted}
                error={formik.errors.conditionsAccepted}
            />

            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                Crear cuenta
            </Form.Button>

            <p className="register-form__error">{error}</p>
        </Form>
    )
}
