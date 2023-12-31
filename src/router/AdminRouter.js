import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Auth, Blog, Users } from "../pages/admin";
import { AdminLayout } from "../layouts";
import { useAuth } from "../hooks";


// const user = null;

export function AdminRouter() {

    const { user } = useAuth();

    console.log(useAuth)

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }

    return (
        <Routes>
            {
                !user ? (
                    <Route path="/admin/*" element={<Auth />} />
                ) : (
                    <>
                        {["/admin", "/admin/blog"].map((path) => (
                            <Route
                                key={path}
                                path={path}
                                element={loadLayout(AdminLayout, Blog)}
                            />
                        ))}
                        <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />

                    </>
                )
            }
        </Routes>
    )
}
