import React from 'react';
import './card.styles.css';

export const Card = (props) => (

    <a href={props.post.url} target="_blank">
        <div class="card">
            <div class="card-header">
                <img src={props.post.image_url} />
            </div>
            <div class="card-body">
                {
                    props.post.types.split(";").map(f => {
                        return (
                            <span key={f.id} class="tag tag-teal">
                                {f}
                            </span>
                        )
                    })
                }
                <h4>
                    {props.post.title}
                </h4>
                <p>
                    {props.post.description}
                </p>
            </div>
        </div>
    </a>
)

    {/* </div>
    <div className="card-container">
        <img 
            src={props.post.image_url} 
            alt="post" 
        />
        <h2> {props.post.title} </h2>
        <p> {props.post.description} </p>
    </div> */}