import React from 'react'

export default function index({key,name}) {
    return (
        <ListItem key={key}><Text>{name}</Text></ListItem>
    )
}
