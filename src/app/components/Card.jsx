import { Avatar } from 'antd'
import Image from 'next/image'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';


function Card() {
    return (
        <main className="card-container" >
            <div className="card-img-conatiner">
                <Image
                    className="card-img"
                    src={`/assets/card-img.png`}
                    alt="card img"
                    width={270}
                    height={160}
                />
                <div className="card-checkIn">
                    Checked In
                </div>
            </div>

            <h3>CheckIns Name</h3>
            <p className="card-date">12th Nov, 2022</p>
            <div className="card-profile">
                <Avatar size="large" icon={<UserOutlined />} />
                <p>Owner: John Doe</p>
            </div>
        </main>

    )
}

export default Card