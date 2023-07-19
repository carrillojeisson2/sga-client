import React from 'react'
import { Menu, Icon, Grid } from "semantic-ui-react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../../../hooks";
import "./AdminMenu.scss";

export function AdminMenu() {
    const { pathname } = useLocation();

    const { user: { role } } = useAuth();
    // console.log(role)
    const isAdmin = role === "admin"

    const isCurrentPath = (path) => {
        if (path === pathname) return true;
        return false;
    }
    return (
        <Menu fluid vertical className='admin-menu'>

            {isAdmin && (
                <>


                    <Menu.Item as={Link} to="/admin/users" active={isCurrentPath("/admin/users")}>
                        <Icon name="user outline" />
                        Usuario
                    </Menu.Item>
                    {/* <br />
            <br /> */}


                    {/* <Menu.Item as={Link} to="/admin/menu" active={isCurrentPath("/admin/menu")}>
                        <Icon name="bars" />
                        Menu
                    </Menu.Item>

                    <Menu.Item as={Link} to="/admin/courses" active={isCurrentPath("/admin/courses")}>
                        <Icon name="computer" />
                        Cursos
                    </Menu.Item>

                    <Menu.Item as={Link} to="/admin/newsletter" active={isCurrentPath("/admin/newsletter")}>
                        <Icon name="mail" />
                        Newsletter
                    </Menu.Item> */}
                </>

            )}

            <Menu.Item as={Link} to="/admin/blog" active={isCurrentPath("/admin/blog")}>
                <Icon name="comment alternate outline" />
                Documentos
            </Menu.Item>



        </Menu>

        // <Grid>
        //     <Grid.Column width={4}>

        //     </Grid.Column>
        // </Grid>
    )
}