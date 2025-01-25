import { MyNote,MyTask,MyTag,noteActions,taskActions,tagActions } from "./todostates";
import {Note,Task,Tag} from "../types/todotypes";
import { v4 as uuidv4 } from 'uuid';
import {Action} from "../types/generalTypes";
let Notes: Note[] = [MyNote];
let Tasks: Task[] = [MyTask];
let Tags: Tag[] = [MyTag];
//////////// 
//Note CRUD/
////////////
//Getters
export function getNotes(): Note[] {
    return Notes;
}
export function getNotedIdAndName(): {uuid:string,name:string}[] {
    return Notes.map(n => {return {uuid:n.uuid,name:n.name}});
}
export function getNoteById(noteId: string): Note | undefined {
    return Notes.find(n => n.uuid === noteId);
}
export function getNoteActions(noteId: string): Action[] | undefined {
    const note = Notes.find(n => n.uuid === noteId);
    return note ? note.actions : undefined;
}
export function getNoteContent(noteId: string): string | undefined {
    const note = Notes.find(n => n.uuid === noteId);
    return note ? note.content : undefined;
}
export function getNoteDescription(noteId: string): string | undefined {
    const note = Notes.find(n => n.uuid === noteId);
    return note ? note.description : undefined;
}
export function updateNoteContent(noteId: string, content: string): Note | undefined {
    const note = Notes.find(n => n.uuid === noteId);
    if (note) {
        note.content = content;
        return note;
    }
    return undefined;
}
export function updateNoteName(noteId: string, name: string): Note | undefined {
    const note = Notes.find(n => n.uuid === noteId);
    if (note) {
        note.name = name;
        return note;
    }
    return undefined;
}
export function updateNoteDescription(noteId: string, description: string): Note | undefined {
    const note = Notes.find(n => n.uuid === noteId);
    if (note) {
        note.description = description;
        return note;
    }
    return undefined;
}
//Delete
export function deleteNoteById(noteId: string): boolean {
    const index = Notes.findIndex(n => n.uuid === noteId);
    if (index !== -1) {
        Notes.splice(index, 1);
        return true;
    }
    return false;
}
//Create and Add
export function createNote(name: string, description: string, content: string): Note {
    return {
        uuid: uuidv4(),
        name,
        description,
        content,
        actions: noteActions
    };
}
export function addNoteToList(note: Note): void {
    Notes.push(note);
}
//Remove
export function removeNoteFromList(noteId: string): void {
    Notes = Notes.filter(n => n.uuid !== noteId);
}

////////////
//Task CRUD/
////////////

//Getters
export function getTasks(): Task[] {
    return Tasks;
}

export function getTaskById(taskId: string): Task | undefined {
    return Tasks.find(t => t.uuid === taskId);
}
export function getTaskIdAndName(): {uuid:string,name:string}[] {
    return Tasks.map(t => {return {uuid:t.uuid,name:t.name}});
}

export function getTasksStates(state: boolean): { uuid: string, name: string, state: boolean }[] {
    return Tasks.filter(t => t.state === state).map(t => {
        return { uuid: t.uuid, name: t.name, state: t.state };
    });
}
export function getTaskDescription(taskId: string): string | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    return task ? task.description : undefined;
}
export function getTaskDueDate(taskId: string): Date | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    return task ? task.dueDate : undefined;
}
export function getTasksActions(taskId: string): Action[] | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    return task ? task.actions : undefined;
}

//Updates
export function updateTaskState(taskId: string, state: boolean): Task | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    if (task) {
        task.state = state;
        return task;
    }
    return undefined;
}
export function updateTaskDueDate(taskId: string, dueDate: Date): Task | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    if (task) {
        task.dueDate = dueDate;
        return task;
    }
    return undefined;
}
export function updateTaskName(taskId: string, name: string): Task | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    if (task) {
        task.name = name;
        return task;
    }
    return undefined;
}

export function updateTaskDescription(taskId: string, description: string): Task | undefined {
    const task = Tasks.find(t => t.uuid === taskId);
    if (task) {
        task.description = description;
        return task;
    }
    return undefined;
}
//Delete
export function deleteTaskById(taskId: string): boolean {
    const index = Tasks.findIndex(t => t.uuid === taskId);
    if (index !== -1) {
        Tasks.splice(index, 1);
        return true;
    }
    return false;
}
//Create nad Add
export function createTask(name: string, description: string, dueDate: Date): Task {
    return{
        uuid: uuidv4(),
        name,
        description,
        dueDate,
        actions: taskActions,
        state: false
    };
}

export function addTaskToList(task: Task): void {
    Tasks.push(task);
}
//Remove
export function removeTaskFromList(taskId: string): void {
    Tasks = Tasks.filter(t => t.uuid !== taskId);
}
///////////
//Tag CRUD/
///////////
export function getTags(): Tag[] {
    return Tags;
}
export function getTagById(tagId: string): Tag | undefined {
    return Tags.find(t => t.uuid === tagId);
}

export function getTagIdAndName(): { uuid: string, name: string }[] {
    return Tags.map(t => { return { uuid: t.uuid, name: t.name } });
}

export function getTagActions(tagId: string): Action[] | undefined {
    const tag = Tags.find(t => t.uuid === tagId);
    return tag ? tag.actions : undefined;
}

export function getTagColor(tagId: string): string | undefined {
    const tag = Tags.find(t => t.uuid === tagId);
    return tag ? tag.color : undefined;
}

export function updateTagName(tagId: string, name: string): Tag | undefined {
    const tag = Tags.find(t => t.uuid === tagId);
    if (tag) {
        tag.name = name;
        return tag;
    }
    return undefined;
}

export function updateTagColor(tagId: string, color: string): Tag | undefined {
    const tag = Tags.find(t => t.uuid === tagId);
    if (tag) {
        tag.color = color;
        return tag;
    }
    return undefined;
}

export function deleteTagById(tagId: string): boolean {
    const index = Tags.findIndex(t => t.uuid === tagId);
    if (index !== -1) {
        Tags.splice(index, 1);
        return true;
    }
    return false;
}

export function createTag(name: string, color: string): Tag {
    return {
        uuid: uuidv4(),
        name,
        color,
        actions: tagActions
    };
}

export function addTagToList(tag: Tag): void {
    Tags.push(tag);
}

export function removeTagFromList(tagId: string): void {
    Tags = Tags.filter(t => t.uuid !== tagId);
}