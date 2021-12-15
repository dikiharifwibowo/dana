import React, { useState, useEffect, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
let PageSize = 16;

const BlogPost = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    let dataPageFirst = props.postRecords.slice(0, 16)
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return props.postRecords.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    
    return (
        <React.Fragment>
            <div class="container section blog">
                <div class="columns is-multiline">
                { currentTableData.length ?
                    currentTableData.map((item, index) => {
                        return (
                            <div class="column toaster is-3 ">
                                <div  key={index} class="img-card" style={{backgroundImage: `url(${props.imageRandom})` }}>
                                    <div class="share">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="share-social-outline"></ion-icon>
                                    </div>
                                    <div class="content">
                                        <p class="title is-5">Lorem ipsum</p>
                                        <p class="subtitle is-6">{ props.staticRandom.substring(0, 40, )+`...` }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    :
                    dataPageFirst.map((item, index) => {
                        return (
                            <div class="column toaster is-3 ">
                                <div  key={index} class="img-card" style={{backgroundImage: `url(${props.imageRandom})` }}>
                                    <div class="share">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="share-social-outline"></ion-icon>
                                    </div>
                                    <div class="content">
                                        <p class="title is-5">Lorem ipsum</p>
                                        <p class="subtitle is-6">{ props.staticRandom.substring(0, 40)+`...` }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                    
                </div>
                <Pagination
                    className="pagination-bar column is-half is-offset-one-quarter d-content-center"
                    currentPage={currentPage}
                    totalCount={props.postRecords.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>

        </React.Fragment>
    )
}

export default BlogPost