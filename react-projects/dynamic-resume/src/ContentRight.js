import React, { Component } from 'react'

class ContentRight extends Component {
    render() {
        return (
            <div className="content-right">
                <div className="skills">
                    <h4 style={{color:'#FFD027'}}><u>SKILLS</u></h4>
                    <div className="skillset">
                        <li>Teamwork</li>
                        <li>Leadership</li>
                        <li>Flexibility</li>
                        <li>Language</li>
                        <li>Electronics</li>
                        <li>Programming</li>
                        <li>Problem Solving</li>
                    </div>
                </div>
                <h4 style={{color:'#FFD027',marginTop: '1.2rem',marginBottom: '0.8rem'}}><u>PROBLEM SOLVING SKILLS</u></h4>
                <h5><b>Programming</b></h5>
                <p>C, Javascript, Python</p>
                <h5><b>Microsoft</b></h5>
                <p>Word, Excel (+excel macros), Powerpoint</p>
                <h5><b>Lorem</b></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit.</p>
                <h5><b>Lorem</b></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit.</p>
                <h5><b>Lorem</b></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit.</p>
                <h4 style={{color: '#FFD027',marginBottom: '0.8rem'}} className="languages"><u>LANGUAGES</u></h4>
                <div className="english" style={{width: '210px'}}><span
                    className="mr-5">Thai</span><span className="small-box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </span>
                </div>
                <div className="english" style={{width: '210px'}}><span
                    className="mr-5">English</span><span className="small-box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div style={{backgroundColor: 'rgb(201, 192, 192)'}}></div>
                        <div style={{backgroundColor: 'rgb(201, 192, 192)'}}></div>
                    </span>
                </div>
                <div className="english" style={{width: '210px'}}><span
                    className="mr-5">Japanese</span><span className="small-box">
                        <div></div>
                        <div></div>
                        <div style={{backgroundColor: 'rgb(201, 192, 192)'}}></div>
                        <div style={{backgroundColor: 'rgb(201, 192, 192)'}}></div>
                        <div style={{backgroundColor: 'rgb(201, 192, 192)'}}></div>
                    </span>
                </div>
                <div className="Interests">
                    <h4 style={{color:'#FFD027',marginTop: '1.2rem', marginBottom: '0.8rem'}}><u>INTERESTS</u></h4>
                    <div className="interest-items">
                        <div className="interest">
                            <div><i className="fa fa-book" aria-hidden="true" style={{color:'#FFD027'}}></i></div>
                            <div> Reading</div>
                        </div>
                        <div className="interest">
                            <div><i className="fa fa-music" aria-hidden="true" style={{color:'#FFD027'}}></i></div>
                            <div> Music</div>
                        </div>
                        <div className="interest">
                            <div><i className="fa fa-podcast" aria-hidden="true" style={{color:'#FFD027'}}></i></div>
                            <div> Technologies</div>
                        </div>
                        <div className="interest">
                            <div><i className="fa fa-cutlery" aria-hidden="true" style={{color:'#FFD027'}}></i></div>
                            <div> Cooking</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentRight
