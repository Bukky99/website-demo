import React from "react";

function TeamMember(member){
    return(
        <div className="col-lg-4">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src={member.image} alt="..." />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.role}</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}
export default TeamMember;