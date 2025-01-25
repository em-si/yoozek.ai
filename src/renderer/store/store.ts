import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Message } from "../../types";

type State = {
    messages: Record<Message["id"], Message>
}

type Action = {
    setMessage: (message: Message) => void
}

const initialState: State = {
    messages: {
        [uuidv4()]: {
            role: "assistant",
            text: "Siema, tutaj Yoozek, jak Ci mogę pomóc?!"
        }
    }
}

export const useYoozekStore = create<State & Action>()(
    (set): State & Action => ({
            ...initialState,
            setMessage: (message: Message) => set(state => ({
                messages: {
                    ...state.messages,
                    [message.id ?? uuidv4()]: message
                }
            }))
        }
    ),
);