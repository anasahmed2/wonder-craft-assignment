import { Avatar ,Image} from 'antd'
import React from 'react'
import { format } from 'date-fns';
import { UserOutlined } from '@ant-design/icons';


function Card(props) {
    const { image, timestamp, title } = props;

    console.log(image)

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