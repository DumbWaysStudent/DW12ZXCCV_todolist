import React from 'react'
import { ListItem,Text } from 'native-base';

export default function index({name}) {
    return (
        <ListItem><Text>{name}</Text></ListItem>
    )
}
