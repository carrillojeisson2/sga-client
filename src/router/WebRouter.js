import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/web"
import { ClientLAyout } from "../layouts"


export function WebRouter() {

    const loadLAyout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }

    return (
        <Routes>
            <Route path='/' element={loadLAyout(ClientLAyout, Home)} />
        </Routes>
    )
}
