import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu() {
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src="/assets/user.png" />
            <Dropdown inline pointing="top" text="Linh Pham">
                <Dropdown.Menu>
                    <Dropdown.Item text="Tài khoản của tôi" />
                    <Dropdown.Item text="Đăng xuất" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}