import React, { Component } from 'react'
import './Drum.css'
import ASound from './snare.mp3'
import BSound from './censor-beep-1.mp3'
import CSound from './Umgah-Backzip.wav'
import { Howl, Howler } from 'howler'

class Drum extends Component {
    state = {
        notes: [
            { pad: 'Q', sound: ASound }, 
            { pad: 'W', sound: BSound }, 
            { pad: 'E', sound: CSound },
            { pad: 'A', sound: CSound },
            { pad: 'S', sound: ASound },
            { pad: 'D', sound: CSound },
            { pad: 'Z', sound: ASound },
            { pad: 'X', sound: BSound },
            { pad: 'C', sound: CSound },
            { pad: 'P', sound: BSound }]
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
                <div className="outerDrum" id="drum-machine">
                    <ul className="drumLists" id="display">
                        {this.state.notes.map((soundObj, index) => <li id={soundObj.pad} className="drum-pad" onClick={() => this.playAudio(soundObj.sound)}>{soundObj.pad}</li>)}
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
