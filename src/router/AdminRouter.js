// import React from 'react'
// import { Routes, Route } from "react-router-dom"
// import { Auth, Users, Blog, Courses, Menu, NewsLetter } from "../pages/admin"
// import { AdminLayout } from "../layouts"
// import { useAuth } from "../hooks"

// // const user = null;
// // const user = { email: "alana@gmail.com" }

// export function AdminRouter() {
//     const { user } = useAuth();

//     // console.log(useAuth())

//     const loadLayout = (Layout, Page) => {
//         return (
//             <Layout>
//                 <Page />
//             </Layout>
//         )
//     }
//     return (
//         <Routes>
//             {!user ? (
//                 <Route path="/admin/*" element={<Auth />} />
//             ) : (
//                 <>
//                     {["/admin", "/admin/users"].map((path) => (
//                         <Route
//                             key={path}
//                             path={path}
//                             element={loadLayout(AdminLayout, Users)}
//                         />
//                     ))}
//                     <Route path="/admin/blog" element={loadLayout(AdminLayout, Blog)} />
//                     {/* <Route path="/admin/courses" element={loadLayout(AdminLayout, Courses)} />
//                     <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
//                     <Route path="/admin/newsletter" element={loadLayout(AdminLayout, NewsLetter)} /> */}


//                 </>
//             )}

//         </Routes>
//     )
// }

import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth, Users, Blog, } from "../pages/admin";
import { useAuth } from "../hooks";

export function AdminRouter() {
    const { user } = useAuth();

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );
    };

    return (
        <Routes>
            {!user ? (
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
            )}
        </Routes>
    );
}


