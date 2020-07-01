import React, { Component } from 'react'
import './Drum.css'
import ASound from './snare.mp3'
import BSound from './censor-beep-1.mp3'
import CSound from './Umgah-Backzip.wav'
import { Howl, Howler } from 'howler'

class Drum extends Component {
    state = {
        notes: [{ pad: 'A', sound: ASound }, { pad: 'B', sound: BSound }, { pad: 'C', sound: CSound }]
    }

    playAudio = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }
    RenderButtonAndSound = () => {
        return (
            <div className="outside">
                <div className="outerDrum">
                    <ul className="drumLists">
                        {this.state.notes.map((soundObj, index) => <li onClick={() => this.playAudio(soundObj.sound)}>{soundObj.pad}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
    render() {
        Howler.volume(0.6)
        return (
            <div>
                {this.RenderButtonAndSound()}
            </div>
        )
    }
}

export default Drum
