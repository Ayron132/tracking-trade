import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import About from '../About'
import Calendar from '../Calendar'

import { Container, Content, Icon, Item, Percentage, Description, PriceAndDate, Select, Table } from './style'

type Props = {
    name: string;
    presence: number;
    ip: number | string;
    ipRRP: number;
    sp: number | string;
    spRRP: number;
    view: string;
}

const MarketplaceList = () => {
   

    const { marketplaceList } = useAuth();

    const data = marketplaceList.list

    const date = marketplaceList.date.split("-");

    const [currentDate, setCurrentDate] = useState(
        {
            year: date[0],
            month: date[1],
            day: date[2],
        });
    return (
        <Container>
            <Content>
                <Description>
                    <div className='d-flex align-items-center'>
                        <h5 className="font-weight-bold">Offer</h5>
                        <About text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." position='right' />
                    </div>
                    <div className='d-flex mb-4'>
                        <PriceAndDate>
                            Date
                            <button className="btn btn-primary text-nowrap  " type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">{`${currentDate.year}-${currentDate.month}-${currentDate.day}`}</button>
                            <ul className="dropdown-menu p-0" aria-labelledby="dropdownMenuClickableInside">
                                <li>
                                    <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
                                </li>
                            </ul>
                        </PriceAndDate>
                        <PriceAndDate>
                            Price
                            <Select className="form-select border-0">
                                <option value="0">Made</option>
                                <option value="1">Minimum</option>
                                <option value="2">Maximum</option>
                            </Select>
                        </PriceAndDate>
                    </div>
                </Description>
                <Table className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="h6" scope="col">Marketplace</th>
                                <th className="h6" scope="col">Presence</th>
                                <th className="h6" scope="col">SP(R$)</th>
                                <th className="h6" scope="col">%RRP</th>
                                <th className="h6" scope="col">IP(R$)</th>
                                <th className="h6" scope="col">%RRP</th>
                                <th className="h6" scope="col">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item: Props, index: number) => (
                                <tr key={index}>
                                    <td >
                                        {item.name}
                                    </td>
                                    <td>
                                        <Item>{`${item.presence}%`}</Item>
                                    </td>
                                    <td>
                                        <Item>{item.sp.toLocaleString()}</Item>
                                    </td>
                                    <td>
                                        <Percentage colorPercentage={(item.spRRP / 100)}>{`${item.spRRP}%`}</Percentage>
                                    </td>
                                    <td>
                                        <Item>{item.ip.toLocaleString()}</Item>
                                    </td>
                                    <td>
                                        <Percentage colorPercentage={(item.ipRRP / 100)}>{`${item.ipRRP}%`}</Percentage>
                                    </td>
                                    <td>
                                        <Item>
                                            {item.view ?
                                                <a href='https://www.google.com.br'><Icon src='/launch.svg' /></a>
                                                :
                                                <Icon src='/noLink.svg' />
                                            }
                                        </Item>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Table>
            </Content>
        </Container >
    )
}

export default MarketplaceList