import React, { Component } from "react";
import Games from "./data.json";
const GameData = Games.map(

    (Games) =>
    {
        return(
            <div className="col-6" key={Games.Item}>
                <div className="card">
                
                    <img src={Games.image} alt="" />
                    <div className="card">
                        <p className="card text-white bg-dark mb-0" >{Games.description}</p>

                    </div>
                </div>
                </div>
                    );
    }

);

class Content extends Component
{
    render()
    {
        return(
            <div className="album py-5">
                <div className="container">
                    <div className="row row-cols-sm-1 cols-md-1 g-1">
                        
                    {GameData}
                    </div>
                
                </div>
            </div>
           
        );
    }
}

export default Content;