import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = props =>{ 
    console.log('rerendered')
    console.log(props)
    return (
        <>
            <h1 id={props.theme.title} >{props.theme.title}</h1>

            <div class="container">
                {
                    props.theme.posts.map(post => 
                        <Card key={post.id} post={post}/>
                    )
                }
            </div>
        </>
    )}