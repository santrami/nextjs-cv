import React, { useState, useEffect } from 'react'
import { skills, experiences } from '../public/profile'
import Skill from './Skill'
import Experience from './Experience'

export default function Skills() {
    const [progressStatus, setProgressStatus] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setProgressStatus(true)
        }, 1000)

    }, [])

    return (
        <div className="row bg-dark">
            <div className="col-md-12">
                <div className="card card-body bg-dark text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className='text-center' style={{boxShadow:"inset 0px 0px 50px #fff" }}>Habilidades</h3>
                            <ul>

                                {
                                    skills.map((skill, index) => (
                                        <Skill skill={skill}
                                            key={index}
                                            progressStatus={progressStatus}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <h3 className='text-center'>Experiencia</h3>
                            <ul>
                                {
                                    experiences.map((experience, index) => (
                                        <Experience experience={experience} key={index} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
