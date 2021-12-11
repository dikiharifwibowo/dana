import React, { useState, useEffect, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

let PageSize = 16;

const Card = () => {
    const [galleryRecords, setGalleryRecords] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
            setGalleryRecords(res.data)
        })
    });
    
    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return galleryRecords.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <React.Fragment>
            <div class="container section">
                <div class="columns is-multiline">
                {currentTableData.map((item, index) => {
                    return (
                        <div class="column toaster is-3 ">
                            <div  key={index} class="img-card" style={{backgroundImage: `url(${item.url})` }}>
                                <div class="share">
                                    <ion-icon name="share-social-outline"></ion-icon>
                                </div>
                                <div class="contect">
                                    <p class="title is-5">Lorem ipsum</p>
                                    <p class="subtitle is-6">{ item.title }</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                    
                </div>
                <Pagination
                    className="pagination-bar column is-half is-offset-one-quarter d-content-center"
                    currentPage={currentPage}
                    totalCount={galleryRecords.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>

        </React.Fragment>
    )
}

export default Card