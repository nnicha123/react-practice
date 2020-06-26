import React, { Component } from 'react'

class ContentLeft extends Component {
    render() {
        return (
            <div className="content-left">
                <div className="experience">
                    <div className="splan">
                        <h4 style={{ color: '#FFD027' }}><u>WORK EXPERIENCE</u></h4>
                        <h4 className="title"><b>Strategic Planner</b></h4>
                        <h4 className="place">Nissan Motor Asia Pacific</h4>
                        <h5 className="date" style={{ color: '#FFD027' }}>08/2019-04/2020</h5>
                        <ul className="responsibility">
                            <li>Responsible for previewing company business plans, to build up the team's engagement in the
                            projects
                            and give guidelines for improving.
                        </li>
                            <li>Monitor and suggest ideas for company's business plan improvement and create proposals to do
                            so.
                        </li>
                            <li>Provide proposal to improve the training program for new trainees and create database
                            improvement plans to improve staff information database</li>
                        </ul>
                    </div>
                    <div className="tsusho">
                        <h4 className="title"><b>Software Engineer</b></h4>
                        <h4 className="place">Toyota Tsusho Denso Electronics</h4>
                        <h5 className="date" style={{ color: '#FFD027' }}>11/2018-08/2019</h5>
                        <ul className="responsibility">
                            <li>Responsible for creating and modelling ECU system software based on the customer
                            specification
                            sheets.
                        </li>
                            <li>Extra responsibility involves improving the company's training system by creating embedded
                            programming classes regarding MISRA C and C programming
                        </li>
                        </ul>
                    </div>
                    <div className="tsusho-intern">
                        <h4 className="title"><b>Research Engineer</b></h4>
                        <h4 className="place">Toyota Tsusho Denso Electronics</h4>
                        <h5 className="date" style={{ color: '#FFD027' }}>06/2017-08/2017</h5>
                        <ul className="responsibility">
                            <li>Research ECU through simulink simulations as well as simscape and try to model using PID.
                        </li>
                            <li>Explore the possibilities of involving the simscape program to the daily work process of the
                            company.
                        </li>
                        </ul>
                    </div>
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
