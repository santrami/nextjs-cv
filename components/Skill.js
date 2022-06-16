import React, {useState} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Skill({skill, progressStatus}) {
    const [progressInitial, setProgressInitial] = useState(0)
    

    return (
        <div className="container">
            <h5>{skill.skill}</h5>
            <ProgressBar now={!progressStatus ? progressInitial : skill.percentage}
                variant={skill.variant} />
        </div>
    )
}
