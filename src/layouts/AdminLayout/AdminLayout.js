import React from 'react'

export function AdminLayout(props) {
    const { children } = props;

    return (
        <div>
            <h2>Se esta usando adminLayout</h2>
            {children}
        </div>
    )
}
