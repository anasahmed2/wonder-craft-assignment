import { Avatar ,Image} from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { format } from 'date-fns';

function Card(props) {
    const { image, timestamp, title } = props;
    return (
        <main className="card-container" >
            <div className="card-img-conatiner">
                <Image
                    className="card-img"
                    src={`${image}`}
                    alt="card img"
                   
                />
                <div className="card-checkIn">
                    Checked In
                </div>
            </div>

            <h3>{title}</h3>
            <p className="card-date">{format((timestamp.toDate()), 'dd MMM, yyyy')}</p>
            <div className="card-profile">
                <Avatar size="large" icon={<UserOutlined />} />
                <p>Owner: John Doe</p>
            </div>
        </main>
    )
}

export default Card