import { useEffect, useState } from 'react'
import classes from './Paginator.module.css'

const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    const partsCount = Math.ceil(pagesCount / props.partSize)
    const [partNumber, setPartNumber] = useState(1)
    const leftPartPageNumber = (partNumber - 1) * props.partSize + 1
    const rightPartPageNumber = partNumber * props.partSize

    return <div className={classes.paginator}>
        <div>
            {
                partNumber > 1  && 
                <button onClick={ () => { setPartNumber(partNumber - 1) }}> PREV </button>
            }
            
            {
                pagesArray
                .filter(pageNumber => pageNumber >= leftPartPageNumber && pageNumber <= rightPartPageNumber)
                .map(pageNumber => {
                    return <span key={pageNumber} 
                        className={props.currentPage === pageNumber ? classes.selectedPage : classes.pageNumber}
                        onClick={(event) => { props.onPageChanged(pageNumber) }}> {pageNumber}
                    </span>
                    }
                )
            }

            {useEffect(()=>setPartNumber(Math.ceil(props.currentPage/props.partSize)), [props.currentPage])}

            {
                partsCount > partNumber  && 
                <button onClick={ () => { setPartNumber(partNumber + 1) }}> NEXT </button>
            }
        </div>
    </div>       
}

export default Paginator