import React from 'react'
import { Icon, Button } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../../hooks"

export function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const onLogout = () => {
        // console.log("cerrar secion")
        logout()
        navigate("/admin");
    }

    return (
        <Button icon basic color="red" onClick={onLogout}>
            <Icon name="power off" /> Cerrar sesión
        </Button>
    )
}
