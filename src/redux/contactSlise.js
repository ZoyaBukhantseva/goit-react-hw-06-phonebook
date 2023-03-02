import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialContacts = [];

const contctsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
       
        addContact: {
           reducer: (state, {payload}) =>  {
            state.push(payload);
           },
           prepare: data => {
            return {
                payload: {
                    id: nanoid(),
                    ...data,
                }
            }
        }
    },
        delContact(state,action){return state.filter(el => el.id !== action.payload)},
    }
});

export const { addContact, delContact } = contctsSlice.actions;
export default contctsSlice.reducer;