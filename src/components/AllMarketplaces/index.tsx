import React, { useState, useMemo } from 'react'
import Search from '../Search'
import Store from './Store';

import { Container } from './style';


type Props = {
    data: [
        {
            name: string;
            pictureUrl: string;
        }
    ]
}

const AllMarketplaces = ({ data }: Props) => {

    const [selectedList, setSelectedList] = useState<Array<{ name: string }>>([{
        name: ""
    }]);

    const [searchValue, setSearchValue] = useState("");

    const filtered = useMemo(() => {
        const lowerSearch = searchValue.toLowerCase();
        return data.filter((item) => item.name.toLowerCase().includes(lowerSearch))
    }, [searchValue, data])

    return (
        <>
            <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                All Marketplaces
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Marketplaces</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Search value={searchValue} onChange={(e) => setSearchValue(e.target.value)} color="white" />
                            <Container>
                                {filtered && filtered.map((item, index) => (
                                    <Store key={index} setSelectedList={setSelectedList} selectedList={selectedList} item={item} />
                                ))}
                            </Container>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllMarketplaces