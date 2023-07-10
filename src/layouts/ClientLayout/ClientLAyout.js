import React from 'react'

export function ClientLAyout(props) {
    const { children } = props;

    return (
        <div>
            <h2>clienteLayout</h2>
            {children}
        </div>
    )
}
