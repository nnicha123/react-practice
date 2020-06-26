import React, { Component } from 'react'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

class Content extends Component {
    state = {
        mode: 'default',
        classMode: 'content'
    }
    changeMode = (mode) => {
        switch (mode) {
            case 'sunset':
                this.setState({ classMode: 'content-sunset' })
                break;
            case 'blue':

                break;

            default:
                this.setState({ classMode: 'content' })

                break;
        }
    }

    render() {
        return (
            <div className={this.state.classMode}>
                <ContentLeft />
                <ContentRight />
                {this.state.mode}
                <div className="DOMelements">
                    <label>
                        Pick your favorite theme:
                            <select value={this.state.mode} onChange={(e) => this.setState({ mode: e.target.value })}>
                            <option value="default">Default</option>
                            <option value="sunset">Sunset</option>
                            <option value="dark">Dark Mode</option>
                        </select>
                        <button onClick={() => this.changeMode(this.state.mode)}>Change Mode</button>
                    </label>
                </div>
            </div>
        )
    }
}

export default Content
