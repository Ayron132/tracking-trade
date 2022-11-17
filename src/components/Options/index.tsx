import React, { useState } from 'react'

import { Container, Title, DateButton } from './style'
import Calendar from '../Calendar'
import AllMarketplaces from '../AllMarketplaces'
import { useAuth } from '../../context/AuthContext'

type Props = {}

const Options = (props: Props) => {

    const [currentDate, setCurrentDate] = useState({
        year: "2022",
        month: "01",
        day: "06",
    })

    const { marketplaces } = useAuth();

    return (
        <Container className='mb-4'>
            <div className="container">
                <div className="row ">
                    <div className="col-sm">
                        <Title>Period</Title>
                        <div className="btn-group w-100" role="group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked/>
                            <label className="btn btn-primary" htmlFor="btnradio1">Hour</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                            <label className="btn btn-primary" htmlFor="btnradio2">Day</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                            <label className="btn btn-primary" htmlFor="btnradio3">Week</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <Title>Date</Title>
                        <button className="btn btn-primary text-nowrap w-100" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">{`${currentDate.year}-${currentDate.month}-${currentDate.day}`}</button>
                        <ul className="dropdown-menu p-0" aria-labelledby="dropdownMenuClickableInside">
                            <li>
                                <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <Title>Form of payment</Title>
                        <div className="btn-group w-100 text-nowrap" role="group">
                            <input type="radio" className="btn-check"  id="btnradio4"  name="btnradio1" defaultChecked />
                            <label className="btn btn-primary" htmlFor="btnradio4">Spot Price</label>

                            <input type="radio" className="btn-check"  id="btnradio5"  name="btnradio1"/>
                            <label className="btn btn-primary" htmlFor="btnradio5">Installment Price</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <Title>Marketplaces</Title> 
                        <AllMarketplaces data={marketplaces.marketpalces}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Options