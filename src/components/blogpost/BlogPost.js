import React, { useState, useEffect, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from "react-router-dom"
let PageSize = 16;

const BlogPost = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [dataPageFirst, setdataPageFirst] = useState([]);
    const data = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return props.postRecords.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    
    let handleLovePost = (index, page) => {
        if(page==='firstPage') {
            setdataPageFirst([...dataPageFirst, dataPageFirst[index].active = !dataPageFirst[index].active ])
        } else {
            setCurrentTableData([...currentTableData, currentTableData[index].active = !currentTableData[index].active ])
        }
    };
    let handleSharePost = (index, page) => {
        if(page==='firstPage') {
            setdataPageFirst([...dataPageFirst, dataPageFirst[index].show = !dataPageFirst[index].show ])
        } else {
            setCurrentTableData([...currentTableData, currentTableData[index].show = !currentTableData[index].show ])
        }
    };
    useEffect(() => {
        setdataPageFirst(props.postRecords.slice(0, 16))
        setCurrentTableData(data)
    });
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
                                        <div class="is-flex absolute">
                                            <ion-icon class={ item.active ? `md hydrated red` : `md hydrated`} name={ item.active ? `heart` : `heart-outline`} onClick={() => handleLovePost(index)}></ion-icon>
                                            { !item.show ? 
                                                <div class="is-flex">
                                                    <ion-icon onClick={() => handleSharePost(index)} name="share-social-outline"></ion-icon>
                                                </div>
                                            : 
                                                <div class="is-flex is-flex-direction-column">
                                                    <ion-icon onClick={() => handleSharePost(index)} name="close-circle-sharp"></ion-icon>
                                                    <ion-icon name="logo-facebook"></ion-icon>
                                                    <ion-icon name="logo-instagram"></ion-icon>
                                                    <ion-icon name="logo-twitter"></ion-icon>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div class="content">
                                         <Link to={ '/blog/'+item.id }>
                                            <p class="title is-5">static title to {item.id}</p>
                                            <p class="subtitle is-6">{ props.descRandom.substring(0, 35, )+`...` }</p>
                                         </Link>
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
                                        <div class="is-flex absolute">
                                            <ion-icon class={ item.active ? `md hydrated red` : `md hydrated`} name={ item.active ? `heart` : `heart-outline`} onClick={() => handleLovePost(index, 'firstPage')}></ion-icon>
                                            { !item.show ? 
                                                <div class="is-flex">
                                                    <ion-icon onClick={() => handleSharePost(index, 'firstPage')} name="share-social-outline"></ion-icon>
                                                </div>
                                            : 
                                                <div class="is-flex is-flex-direction-column">
                                                    <ion-icon onClick={() => handleSharePost(index, 'firstPage')} name="close-circle-sharp"></ion-icon>
                                                    <ion-icon name="logo-facebook"></ion-icon>
                                                    <ion-icon name="logo-instagram"></ion-icon>
                                                    <ion-icon name="logo-twitter"></ion-icon>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div class="content">
                                        <Link to={ '/blog/'+item.id }>
                                            <p class="title is-5">static title to {item.id}</p>
                                            <p class="subtitle is-6">{ props.descRandom.substring(0, 35, )+`...` }</p>
                                         </Link>
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
                    onPageChange={page => { setCurrentPage(page); props.parentCallback() }}
                />
            </div>

        </React.Fragment>
    )
}

export default BlogPost