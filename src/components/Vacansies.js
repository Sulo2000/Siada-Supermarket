import React from 'react'

export default function Vacancies() {
  return (
    <div className='vacancies__container' data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        <div className='vacancie__item' data-aos="zoom-out-right">
            <h2>Call Center Operator</h2>
            <p>Description.<p/>
                <p>“Tsiran” supermarket chain is searching for organized and active employees in the call center aged up to 35.</p>
                 <p>Shift work schedule: 8 hours, 6 days</p> 
                Responsibilities…</p>
            <button>Apply</button>
        </div>
        <div className='vacancie__item' data-aos="zoom-out-left">
            <h2>Drive-Courier</h2>
            <p>Description:</p>
                <p>"Tsiran" supermarket chain is hiring conscientious, reliable, experienced
                couriers with their own vehicles to deliver the orders of the supermarket.</p>
                <p>The work schedule in shifts: 8 hours, 6 days…</p>
            <button>Apply</button>
        </div>
        <div className='vacancie__item' data-aos="zoom-out-right">
            <h2>Picker</h2>
            <p>Description:</p>
                <p>Occupancy type: permanent</p>
                <p>Salary: 100.000 + bonuses</p>
                <p>Working hours՝ shifts (8 hours from 08:00-24:00)…</p>
            <button>Apply</button>
        </div>
        <div className='vacancie__item' data-aos="zoom-out-left">
            <h2>Content Manager</h2>
            <p>The chain of supermarkets "Tsiran"  hires employees for the following job:   </p>
                <p>Duties:</p>
                <p>Content creation for the website.</p>
                <p>Working hours: Monday-Saturday, 09: 00-18:00…</p>
            <button>Apply</button>
        </div>
    </div>
  )
}
