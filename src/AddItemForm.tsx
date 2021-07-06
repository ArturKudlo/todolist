import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<boolean>(false)
    const errorMessage = "Title is required!"

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItem();
        }
    }
    const addItem = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }


    return (
        <div>
            <TextField
                value={title}
                onChange={ onChangeHandler }
                onKeyPress={ onKeyPressHandler }
                variant={"outlined"}
                error={error}
                helperText={error && errorMessage}
                label={"Title"}
                size={"small"}
                // style={error ? {border: "3px solid red"} : {}}
            >

            </TextField>
            {/*<input*/}
            {/*    value={title}*/}
            {/*    onChange={ onChangeHandler }*/}
            {/*    onKeyPress={ onKeyPressHandler }*/}
            {/*    style={error ? {border: "3px solid red"} : {}}*/}
            {/*/>*/}
            <IconButton
                size={"small"}
                onClick={addItem}
                color={"primary"}
            >
                <AddBox fontSize={"large"}/>
            </IconButton>
            {/*<button onClick={addItem}>+</button>*/}
            {/*<div style={error ? {color: "red"} : {display: "none"}}>*/}
            {/*    {errorMessage}*/}
            {/*</div>*/}
        </div>
    )
}
export default  AddItemForm;