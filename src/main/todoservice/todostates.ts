import {Note,Task,Tag} from "../types/todotypes";
import { v4 as uuidv4 } from 'uuid';
import {Action} from "../types/generalTypes";

const noteActions: Action[] = [
    { uuid: uuidv4(), name: "Add note", description: "This action adds text to the note", parameters: [] },
    { uuid: uuidv4(), name: "Remove note", description: "This action removes the note", parameters: [] },
    { uuid: uuidv4(), name: "Edit note", description: "This action edits the note", parameters: [] },
    { uuid: uuidv4(), name: "Share note", description: "This action shares the note", parameters: [] }
];

const taskActions: Action[] = [
    { uuid: uuidv4(), name: "Add task", description: "This action adds a task", parameters: [] },
    { uuid: uuidv4(), name: "Remove task", description: "This action removes a task", parameters: [] },
    { uuid: uuidv4(), name: "Edit task", description: "This action edits a task", parameters: [] },
    { uuid: uuidv4(), name: "Complete task", description: "This action completes a task", parameters: [{name:"complete",value:true}] }
];

const tagActions: Action[] = [
    { uuid: uuidv4(), name: "Add tag", description: "This action adds a tag", parameters: [] },
    { uuid: uuidv4(), name: "Remove tag", description: "This action removes a tag", parameters: [] },
    { uuid: uuidv4(), name: "Edit tag", description: "This action edits a tag", parameters: [] }
];


const MyNote: Note = {
    uuid: uuidv4(),
    name: "My Note",
    description: "This is an example note",
    content: "This is the content of the example note",
    actions: [noteActions[0],noteActions[1],noteActions[2],noteActions[3]]
}
const MyTask: Task = {
    uuid: uuidv4(),
    name: "MyTask",
    description: "This is an example task",
    dueDate: new Date(),
    actions: [taskActions[0],taskActions[1],taskActions[2],taskActions[3]],
    state: false
}
const MyTag: Tag = {
    uuid: uuidv4(),
    name: "My Tag",
    color: "blue",
    actions: [tagActions[0],tagActions[1],tagActions[2]]
}
export {MyNote,MyTask,MyTag,noteActions,taskActions,tagActions};