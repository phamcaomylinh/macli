import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function SignedOutMenu() {
    return (
        <Menu.Item position="right">
            <img src="/assets/user.png" alt="avatar"/>
        </Menu.Item>
    )
}