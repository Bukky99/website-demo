import React from 'react';

function SingleService(service) {
    console.log('service', service)
    return(
        <div className="col-md-4">
            <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className={`fas ${service.icon} fa-stack-1x fa-inverse`}></i>
            </span>
            <h4 className="my-3">{service.title}</h4>
            <p>{service.description}</p>
        </div>
    )
}

export default SingleService;