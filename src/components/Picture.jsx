import React from "react";
import "../styles/style.css";



function Picture({img,photographer }) {
    
    
    return (
        <div className="card">
            <div className="div-img">
                <img src={img} alt="img" />
            </div>
            <p>{photographer}</p>
        </div>
       
    )
}

export default Picture