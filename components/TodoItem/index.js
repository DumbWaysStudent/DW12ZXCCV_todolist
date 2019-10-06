import React from 'react'
import { 
    ListItem,
    Text,
    Body,
    Icon,
    Right,
    Button,
    CheckBox
} from 'native-base';

export default function index({id,name,onDelete,isCompleted,onCheckedIsComplete}) {
    return (
        <ListItem icon>
            <Body>
                <CheckBox 
                    checked={isCompleted}
                    onPress={() => onCheckedIsComplete(id)} 
                 />
            </Body>
            <Body>
                <Text>{name}</Text>
            </Body>
            <Right>

                <Button danger onPress={() => onDelete(id)}>
                    <Icon style={styles.icon} active name="trash" />
                </Button>
            </Right>
        </ListItem>
    )
}

const styles = {
    button : {
        marginRight: 10,
    }
}