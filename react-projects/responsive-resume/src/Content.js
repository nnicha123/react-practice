import React, { Component } from 'react'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

class Content extends Component {
    render() {
        return (
            <div className="content" style={{marginTop: '20px'}}>
                <ContentLeft/>
                <ContentRight/>
            </div>
        )
    }
}

export default Content
