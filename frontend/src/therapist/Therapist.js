import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Landing from '../layout/Landing';
import Your_Patients from './Your_Patients'

function Therapist() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Landing />
                        <Your_Patients />
                    </>
                } />
            </Routes>

        </>

    )
}

export default Therapist;
