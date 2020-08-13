import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { useState } from 'react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function Navigation() {
    const [authenticated, setAuthenticated] = useState(true);

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo" style={{width: 100}} />
                </Menu.Item>
                <Menu.Item content="Giới thiệu" />
                <Menu.Item content="Liên hệ" />
                {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
            </Container>
        </Menu>
    )
}