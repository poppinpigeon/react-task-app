import React, { FC, useState } from "react";
import DropDownForm from "./DropDownForm/DropDownForm";
import { IoIosAdd } from "react-icons/io";
import { listButton, taskButton } from "./ActionButton.css";

type TActionButtonProps = {
    boardId: string;
    listId: string;
    list?: boolean;
}

const ActionButton : FC<TActionButtonProps> = ({
    boardId,
    listId,
    list
}) => {

    const [isFormOpen, setIsFormOpen] = useState(true);
    const buttonText = list ? 'Create new list' : 'Create new task';

    return isFormOpen ? (
        <DropDownForm 
            setIsFormOpen={setIsFormOpen} 
            list={list ? true : false} 
            boardId={boardId} 
            listId={listId}
        />
    )
    :
    (
        <div className={list ? listButton : taskButton} onClick={() => setIsFormOpen(true)}>
            <IoIosAdd/>
            <p>{buttonText}</p>
        </div>
    )
}

export default ActionButton;