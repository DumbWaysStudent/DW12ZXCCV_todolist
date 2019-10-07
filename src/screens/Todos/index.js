import React,{Component} from 'react';
import {
    Container,
    Content,
    Body,
    Item,
    List,
    ListItem,
    Button,
    Text,
    Input
} from 'native-base'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {name : "Work 😗",isCompleted: false},
                {name : "Swim 😎",isCompleted: false},
                {name : "Study 😑",isCompleted: false},
                {name : "Sleep 😑",isCompleted: false},
                {name : "Run 😑",isCompleted: false}
            ],
            todo : ''
        }
    }
  
    render () {
        const {todos} = this.state
        return (
            <Container>
                <List>
                    {todos.map((todo,index) => {
                        return (
                            <ListItem key={index}><Text>{todo.name}</Text></ListItem>
                        )
                    })}
                </List>
            </Container>
        )
    }
}

export default Todos;
