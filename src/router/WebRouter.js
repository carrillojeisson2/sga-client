import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home, Courses, Contact, Blog, Post } from "../pages/web/index"

import { ClientLayout } from "../layouts"

export function WebRouter() {

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }

    return (
        <Routes>
            <Route path="/" element={loadLayout(ClientLayout, Home)} />
            <Route path="/courses" element={loadLayout(ClientLayout, Courses)} />
            <Route path="/contact" element={loadLayout(ClientLayout, Contact)} />
            <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
            <Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />


            {/* <Route path="*" element={<Error404 />} /> */}

        </Routes>
    )
}



