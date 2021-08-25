import React from 'react';
import style from './Users.module.css';
import stylePaginate from '../ReactPaginate/ReactPaginate.module.css'
import userPhotoDefault from '../../assets/img/user.png'
import { Preloader } from "../../common/Preloader/Preloader";
import ReactPaginate from "react-paginate";

export function Users({people, loading, totalPages, changePage}) {
    if (loading) {
        return <div className={style.preloader}><Preloader/></div>
    }
    return (
        <div>
            <ul className={style.list}>
                {people.map(p => {
                    const name = p['name'] != null ? p['name'] : '';
                    const midName = p['midname'] != null ? p['midname'] : '';
                    const surname = p['surname'] != null ? p['surname'] : '';
                    const fullName = `${name} ${midName} ${surname}`;

                    return (
                        <li key={p.id} className={style.item}>
                            <img alt={'User'} src={p['image_ref'] !== null ? `https://213.184.245.66:5010${p['image_ref']}` : userPhotoDefault}
                                 className={style.img}
                            />
                            <p className={style.fullName}>{fullName}</p>
                        </li>
                    );
                })}
            </ul>
            <ReactPaginate pageCount={totalPages}
                           onPageChange={changePage}
                           containerClassName={stylePaginate.pagination}
                           previousLabel={'<'}
                           previousClassName={stylePaginate.pagePrevious}
                           previousLinkClassName={stylePaginate.pagePreviousLink}
                           nextLabel={'>'}
                           nextClassName={stylePaginate.pageNext}
                           nextLinkClassName={stylePaginate.pageNextLink}
                           pageClassName={stylePaginate.pageItem}
                           pageLinkClassName={stylePaginate.pageLink}
                           activeLinkClassName={stylePaginate.currentPage}
                           disabledClassName={stylePaginate.disabled}
            />
        </div>
    );
}