import React from 'react';

function Assignment(props){
    var imageStyle = {
        "background-image": "url("+props.image+")",
    };
    return(
        <div className={"flex-container assignment"+props.number}>
            <div class={"container assignment"+props.number}>
                <div className="assignment-info">
                    <a href={props.link}>
                        <div class="assignment-background">
                            <div class="assignment-image" style={imageStyle}></div>
                            <div class="section-title">
                                <h2>{props.title}</h2>
                            </div>
                        </div>
                    </a>
                    <div class="assignment-description">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div class="read-more">

                </div>
            </div>
        </div>
    )
} export default Assignment;