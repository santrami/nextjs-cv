import React from 'react'

export default function Study({ study }) {
    return (
        <li className='ps-3'>
            <h5>{ study.institution }</h5>
            <h5 className='text-secondary'> {study.grade} - {study.year}</h5>
            <br />
        </li>
    )
}
