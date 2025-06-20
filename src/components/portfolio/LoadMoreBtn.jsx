import React from 'react'

const LoadMoreBtn = ({loadMore}) => {
    return (
        <div className="load-more">
            <button className="btn btn-primary " onClick={loadMore}>
                Load More
            </button>
        </div>
    )
}
export default LoadMoreBtn
