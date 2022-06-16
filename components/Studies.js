import React from 'react'
import { studies } from '../public/profile'
import Study from './Study'

export default function Studies() {
    return (
        <div className="row" style={{ backgroundColor: "#222222aa" }}>
            <div className="col-md-12">
                <div className="card card-body text-light" style={{ backgroundColor: "#222222aa" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className='text-center'>Estudios</h3>
                            <hr style={{ height: "2px", width: "60%", margin: "0 auto" }} className='my-5' />
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='ps-6'>
                                        {
                                            studies.map((study, index) => (
                                                <Study study={study} key={index} />
                                            ))
                                        }
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
