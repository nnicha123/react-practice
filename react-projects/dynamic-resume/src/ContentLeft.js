import React, { Component } from 'react'

class ContentLeft extends Component {
    state = {
        info: [
            {
                title: 'Strategic Planner',
                place: 'Nissan Motor Asia Pacific',
                date: '08/2019-04/2020',
                responsibility: [
                    `Responsible for previewing company business plans, to build up the team's engagement in the projects and give guidelines for improving.`,
                    `Monitor and suggest ideas for company's business plan improvement and create proposals to do so.`,
                    `Provide proposal to improve the training program for new trainees and create database improvement plans to improve staff information database`
                ]
            },
            {
                title: 'Software Engineer',
                place: 'Toyota Tsusho Denso Electronics',
                date: '11/2018-08/2019',
                responsibility: [
                    `Responsible for creating and modelling ECU system software based on the customer specification sheets.`,
                    `Extra responsibility involves improving the company's training system by creating embedded programming classes regarding MISRA C and C programming`
                ]
            },
            {
                title: 'Research Engineer',
                place: 'Toyota Tsusho Denso Electronics',
                date: '06/2017-08/2017',
                responsibility: [
                    `Research ECU through simulink simulations as well as simscape and try to model using PID.`,
                    `Explore the possibilities of involving the simscape program to the daily work process of the company.`
                ]
            },

        ]
    }
    render() {
        return (
            <div className="content-left">
                <div className="experience">
                    <h4 style={{ color: '#FFD027' }}><u>WORK EXPERIENCE</u></h4>
                    {this.state.info.map(el =>
                        <div>
                            <h4 className="title"><b>{el.title}</b></h4>
                            <h4 className="place">{el.place}</h4>
                            <h5 className="date" style={{ color: '#FFD027' }}>{el.date}</h5>
                            <ul className="responsibility">
                                {el.responsibility.map(el => <li>{el}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="education">
                    <h4 style={{ color: '#FFD027' }}><u>EDUCATION</u></h4>
                    <h4>MEng Electronic and Electrical Engineering</h4>
                    <p>University of Southampton</p>
                    <p style={{ color: '#FFD027', lineHeight: '0' }}>09/2014-06/2018</p>
                </div>
            </div>
        )
    }
}

export default ContentLeft
