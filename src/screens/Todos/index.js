import React,{Component} from 'react';
import {
    Container,
    Content,
    Body,
    Item,
    List,
    Button,
    Text,
    Input,
    
} from 'native-base'

import TodoItem from '../../components/TodoItem';
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {id : 1 , name : "Work 😗",isCompleted: false},
                {id : 2 , name : "Swim 😎",isCompleted: false},
                {id : 3 , name : "Study 😑",isCompleted: false},
                {id : 4 , name : "Sleep 😑",isCompleted: false},
                {id : 5 , name : "Run 😑",isCompleted: false}
            ],
            todo : '',
            isEdit : false,
            todoIdIsEdit : null
        }
    }
    
    handleChangeText = el => {
        this.setState({todo : el})        
    }

    clearInput = () => {
      this.setState({todo : '',todoIdIsEdit : null,isEdit:false})
    }

    handleButtonSubmit = () => {
        const { todos,todoIdIsEdit }  = this.state
        const lengOfTodos = todos.length;
        const newTodoId = lengOfTodos + 1;
        const todo = {id : newTodoId,isCompleted : false, name : this.state.todo }
        const newTodos = [...this.state.todos,todo];
        if(!this.state.isEdit){
            this.setState({
                todos : newTodos
            },this.clearInput())
        }else{
            const refTodos = todos;
            const newTodos = refTodos.map(todo => {
                if(todo.id === todoIdIsEdit){
                    todo.name = this.state.todo
                }
                return todo;
            });
            this.setState({
                todos : newTodos
            },this.clearInput())
        }
    }

    handleDelete = (id) => {
        const refTodos = this.state.todos;
        const newTodos = refTodos.filter( todo => todo.id !== id );
        this.setState({
            todos : newTodos
        })
    }

    handleIsComplete = (id) => {
        const refTodos = this.state.todos;
        const newTodos = refTodos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        this.setState({
            todos : newTodos
        })
    }

    handleEdit = (id,name) => {
        this.setState({
            isEdit: true,
            todo : name,
            todoIdIsEdit :  id
        })
    }

    render () {
        const {todos,todo,isEdit} = this.state
        return (
            <Container>
                <Content>

                    <Body style={styles.wrap}>
                        <Item 
                            regular 
                            style={styles.input}
                        >
                            <Input 
                                placeholder="New Todo"
                                value={todo}
                                onChangeText={text => this.handleChangeText(text)}
                            />
                        </Item>
                        <Button
                            style={styles.button}
                            onPress={this.handleButtonSubmit}
                        >
                        <Text>{isEdit ? 'EDIT' : 'ADD'}</Text>
                        </Button>
                    </Body>
                    <List>
                        {todos.map(todo => {
                            return (
                                <TodoItem 
                                    key={todo.id} 
                                    {...todo}
                                    onDelete={this.handleDelete}
                                    onEdit={this.handleEdit}
                                    onCheckedIsComplete={this.handleIsComplete}
                                />
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