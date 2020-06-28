import React, { Component } from 'react'
import './TestPage.css'
class TestPage extends Component {
    render() {
        return (
            <div className="outerDice">
                <div class="containerDice">
                    <div class="dice">
                        <div class="front face">
                            <div></div>
                        </div>
                        <div class="left face">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="right face">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="back face">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TestPage
