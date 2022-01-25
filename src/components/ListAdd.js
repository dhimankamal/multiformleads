import { Button, List, ListItem, TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';

export const ListAdd = () => {

    const [text, setText] = useState("");

    return (
        <>
        <h2>Kamal</h2>
        <List>
             <ListItem id="list"><Button className='Add' onClick={() => setText(text +" "+ "Item 1")}>Add</Button> Item 1</ListItem>
             <ListItem id="list"><Button className='Add' onClick={() => setText(text +" "+ "Item 2")}>Add</Button> Item 2</ListItem>
             <ListItem id="list"><Button className='Add' onClick={() => setText(text +" "+ "Item 3")}>Add</Button> Item 3</ListItem>
             <ListItem id="list"><Button className='Add' onClick={() => setText(text +" "+ "Item 4")}>Add</Button> Item 4</ListItem>
             <ListItem id="list"><Button className='Add' onClick={() => setText(text +" "+ "Item 5")}>Add</Button> Item 5</ListItem>
            
        </List>

        
       <TextareaAutosize value={text}>
       
       </TextareaAutosize>
        
        </>
    )
}
