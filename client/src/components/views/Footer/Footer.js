import React from 'react'
import { CopyrightCircleOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Pivot Assessment  <CopyrightCircleOutlined /></p>
        </div>
    )
}

export default Footer
