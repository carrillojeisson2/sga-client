import * as Yup from "yup";

export function initialValues(user) {
    return {
        avatar: user?.avatar || "",
        fileAvatar: null,
        firstname: user?.firstname || "",
        lastname: user?.lastname || "",
        email: user?.email || "",
        role: user?.role || "",
        password: "",
        ingreso: user?.ingreso || "",
        fncontrato: user?.fncontrato || "",
        documento: user?.documento || ""

    };
}

export function validationSchema(user) {
    return Yup.object({
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        role: Yup.string().required(true),
        password: user ? Yup.string() : Yup.string().required(true),
        ingreso: Yup.string().required(true),
        fncontrato: Yup.string().required(true),
        documento: Yup.string().required(true),

    })
}