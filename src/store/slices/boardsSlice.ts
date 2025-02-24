import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

const initialState : TBoardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: 'first board',
            lists: [
                {
                    listId: 'list-0',
                    listName: 'list 0',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'task 0',
                            taskDescription: 'description',
                            taskOwner: 'owner'
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'task 1',
                            taskDescription: 'description',
                            taskOwner: 'owner'
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'list 1',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'task 0',
                            taskDescription: 'description',
                            taskOwner: 'owner'
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'task 1',
                            taskDescription: 'description',
                            taskOwner: 'owner'
                        }
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
})

export const boardsReducer = boardsSlice.reducer;