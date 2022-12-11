import React from "react";

const CardBlock = ({ CardInfo }) => {
    let url = '#';
    return (

        <div className="col mb-5">
            <div className="card h-100">
                {/* Product image*/}
                <img className="card-img-top" src={CardInfo.Image} alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">{CardInfo.Name}</h5>
                        {/* Product description*/}
                        {CardInfo.Description}
                    </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={url}>Watch video</a></div>
                </div>
            </div>
        </div>

    )
}

export default CardBlock;