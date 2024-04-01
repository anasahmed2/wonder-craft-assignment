import React from 'react'
import Image from 'next/image';
import { Button } from "antd";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Header() {
    return (
        <header className='header'>
            <div className='header-logo'>
                <h4>Logo</h4>
            </div>
            <div className='nav-items'>
                <Button
                    className='nav-btn'
                    type="primary">
                    FeedBack
                </Button>
                <Image alt="nav-icons" src={"/assets/Bell.svg"} width={24} height={24} />
                <Image alt="nav-icons" src={"/assets/infoCircle.svg"} width={24} height={24} />
                <Avatar size="large" icon={<UserOutlined />} />
                <Image alt="nav-icons" src={"/assets/dropdownicon.svg"} width={10} height={10} />

            </div>
        </header>
    )
}

export default Header