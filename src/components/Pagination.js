import React from 'react'

function Pagination({ numbers, displayFun, currentPageIndex }) {
    let numberofpages = []
    for (let index = 1; index <= numbers; index++) {
        numberofpages.push(index)
    }

    return (
        <div className='btn-container'>
            <button onClick={() => {
                displayFun(currentPageIndex - 1 === 0 ? numbers : currentPageIndex - 1);
            }} className='prev-btn'>prev</button>
            {numberofpages.map((item, index) => {
                return (
                    <button onClick={() => {
                        displayFun(item);
                    }} key={index} className={`${index === currentPageIndex - 1 ? 'page-btn active-btn' : 'page-btn'}`}>{item}</button>
                )
            })}
            <button onClick={() => {
                displayFun(currentPageIndex + 1 > numbers ? 1 : currentPageIndex + 1);

            }} className='next-btn'>next</button>
        </div>
    )
}

export default Pagination