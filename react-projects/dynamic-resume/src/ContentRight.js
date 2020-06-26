import React, { Component } from 'react'

class ContentRight extends Component {
    state = {
        skillsetItems: ['Teamwork', 'Leadership', 'Flexibility', 'Language', 'Electronics', 'Programming', 'Problem Solving'],
        problemSolvingSkills: [
            { title: 'Programming', content: 'C, Javascript, Python' },
            { title: 'Microsoft', content: 'Word, Excel (+excel macros), Powerpoint' },
            { title: 'Lorem', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit.' },
            { title: 'Language', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit.' },
            { title: 'Lorem', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit.' }
        ],
        interestItems: [
            { interest: 'Reading', icon: 'fa fa-book' },
            { interest: 'Music', icon: 'fa fa-music' },
            { interest: 'Technologies', icon: 'fa fa-podcast' },
            { interest: 'Cooking', icon: 'fa fa-cutlery' },
        ],
        inputSkill: false,
        newSkill: '',
        mode: ''
    }
    calcLevel = (level) => {
        let remainingLevel = 5 - level
        let arr = []
        for (let i = 0; i < level; i++) arr.push(<div></div>)
        for (let i = 0; i < remainingLevel; i++) arr.push(<div style={{ backgroundColor: 'rgb(201, 192, 192)' }}></div>)
        return arr
    }
    returnLanguage = (language, level) => {
        return (
            <div className="english" style={{ width: '210px' }}><span
                className="mr-5">{language}</span><span className="small-box">
                    {this.calcLevel(level)}
                </span>
            </div>
        )
    }
    deleteSkill = (index) => {
        const newList = [...this.state.skillsetItems].filter((el, indx) => indx !== index)
        this.setState({ skillsetItems: newList })
    }
    addSkills = () => {
        const newSkill = this.state.newSkill;
        const currentSkills = [...this.state.skillsetItems]
        this.setState({ inputSkill: true, skillsetItems: [...this.state.skillsetItems, newSkill] })
        this.setState({ newSkill: '' })
    }

    render() {
        return (
            <div className="content-right">
                <div className="skills">
                    <div className="skillSetAddable">
                        <h4 style={{ color: '#FFD027' }}><u>SKILLS</u></h4>
                        <div>
                            <input type="text" className="inputNewSkills" value={this.state.newSkill} onChange={(e) => this.setState({ newSkill: e.target.value })} />
                            <span><button className="addSkillsButton" onClick={this.addSkills}>Add Skills</button></span>
                        </div>
                    </div>
                    <div className="skillset">
                        {this.state.skillsetItems.map((skill, index) => <li onClick={() => this.deleteSkill(index)}>{skill}</li>)}
                    </div>
                </div>
                <h4 style={{ color: '#FFD027', marginTop: '1.2rem', marginBottom: '0.8rem' }}><u>PROBLEM SOLVING SKILLS</u></h4>
                {this.state.problemSolvingSkills.map(item => <div><h5><b>{item.title}</b></h5><p>{item.content}</p></div>)}

                <h4 style={{ color: '#FFD027', marginBottom: '0.8rem' }} className="languages"><u>LANGUAGES</u></h4>
                {this.returnLanguage('Thai', 5)}
                {this.returnLanguage('English', 4)}
                {this.returnLanguage('Japanese', 1)}

                <div className="Interests">
                    <h4 style={{ color: '#FFD027', marginTop: '1.2rem', marginBottom: '0.8rem' }}><u>INTERESTS</u></h4>
                    <div className="interest-items">
                        {this.state.interestItems.map(item =>
                            <div className="interest">
                                <div><i className={item.icon} aria-hidden="true" style={{ color: '#FFD027' }}></i></div>
                                <div>{item.interest}</div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentRight
