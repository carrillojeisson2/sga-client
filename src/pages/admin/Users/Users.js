import React, { useState } from 'react'
import { Tab, Button } from "semantic-ui-react"
import "./Users.scss";
import { BasicModal } from '../../../components/shared/BasicModal';
import { UserForm, ListUsers } from "../../../components/Admin/Users"

export function Users() {

    const [showModal, setShowModal] = useState(false);
    const [reload, setReload] = useState(false)

    // const onOpenCloseModal = () => setshowModal((prevState) => !prevState)
    // const onOpenCloseModal = () => setshowModal((prevState) => !prevState);


    // const onReload = () => setReload((prevState) => !prevState);

    const panes = [
        {
            menuItem: "Usuarios activos",
            render: () => (
                <Tab.Pane attached={false}>
                    <ListUsers
                        usersActive={true}
                        reload={reload}
                    />
                </Tab.Pane>
            )
        },
        {
            menuItem: "Usuarios inactivos",
            render: () => (
                <Tab.Pane attached={false}>
                    <ListUsers
                        usersActive={false}
                        reload={reload}

                    />
                </Tab.Pane>
            )
        }
    ]

    const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
    const onReload = () => setReload((prevState) => !prevState);

    return (
        <>
            {/* <div className='users-page'>
                <Button className='users-page__add' primary onClick={onOpenCloseModal}>
                    Nuevo Usuario
                </Button>
                <Tab menu={{ secondary: true }} panes={panes} />
            </div>

            <BasicModal show={showModal} close={onOpenCloseModal} title="Crear nuevo usuario">
                <UserForm close={onOpenCloseModal} onReload={onReload} />
            </BasicModal> */}


            <div className="users-page">
                <Button className="users-page__add" primary onClick={onOpenCloseModal}>
                    Nuevo usuario
                </Button>
                <Tab menu={{ secondary: true }} panes={panes} />
            </div>

            <BasicModal
                show={showModal}
                // visible={showModal}
                close={onOpenCloseModal}
                title="Crear nuevo usuario"
            >
                <UserForm close={onOpenCloseModal} onReload={onReload} />
            </BasicModal>
        </>
    )
}
