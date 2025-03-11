import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

type TAddBoardAction = {
    board: IBoard;
}

type TDeleteListAction = {
    boardId: string;
    listId: string;
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
        addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board);
        },

        deleteList: (state, {payload}: PayloadAction<TDeleteListAction>) => {
            state.boardArray = state.boardArray.map(board =>
                board.boardId === payload.boardId
                ?
                {
                    ...board,
                    lists: board.lists.filter(
                        list => list.listId !== payload.listId
                    )
                }
                :
                board
            )
        },

        setModalActive: (state, {payload}: PayloadAction<boolean>) => {
            state.modalActive = payload;
        }
    }
})

export const {addBoard, deleteList, setModalActive} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;