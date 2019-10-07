import React,{Component} from 'react';
import {
    Container,
    Content,
    Body,
    Item,
    List,
    Button,
    Text,
    Input
} from 'native-base'

import TodoItem from '../../components/TodoItem';

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
    
    handleChangeText = (el) => {
        this.setState({todo : el})        
    }

    handleButtonSubmit = () => {
        const todo = { isCompleted : true, name : this.state.todo }
        const newTodos = [...this.state.todos,todo];
        this.setState({
            todos : newTodos
        },() => this.setState({todo : ''}))
    }


    render () {
        const {todos,todo} = this.state
        return (
            <Container>
                <Content>
                    <Body style={styles.wrap}>
                        <Item regular style={styles.input}>
                            <Input 
                                placeholder="New Todo"
                                value={todo}
                                onChangeText={text => this.handleChangeText(text)}
                            />
                        </Item>
                        <Button
                            style={styles.button}
                            bordered
                            onPress={this.handleButtonSubmit}
                        >
                        <Text>ADD</Text>
                        </Button>
                    </Body>
                    <List>
                        {todos.map((todo,index) => {
                            return (
                                <TodoItem key={index} {...todo} />
                            )
                        })}
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = {
    wrap : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems  : 'center',
        padding : 10
    },
    button : {
        flex : 2
    },
    input : {
        flex : 8
    }
}

export default Todos;

