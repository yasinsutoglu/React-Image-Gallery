
import React from "react";
import data from "../helper/data.js"
import Picture from "./Picture.jsx";
import "../styles/style.css";


class Homepage extends React.Component {
    render() {
    // console.log(data)

        return (
           
            <div className="home">
                 <h2>Albums</h2>
                <div className="cards">
                    {data.map((picture, i)=>  {
                    const {photographer, src:{large} } = picture

                    return (
                    <Picture key={i} img={large} photographer= {photographer}/>
                            )
                    })}
                </div>
            </div>
        )
    }
}

export default Homepage