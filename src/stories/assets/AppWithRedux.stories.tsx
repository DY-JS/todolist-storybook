import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import {Task} from "../../Task";
import {ReduxStoreProviderDecorators} from "../../state/ReduxStoreProviderDecorators";
import AppWithRedux from "../../AppWithRedux";

const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    tags: ['autodocs'],
    decorators: [ReduxStoreProviderDecorators]  // ReduxStoreProviderDecorators - декоратор со всеми атрибутами редакса
}

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const AppWithReduxStory: Story = {}

// const TaskWithRedux = () => {
//
//     let task = useSelector<AppRootStateType, TaskType>(state => state.tasks['todolistId1'][0])
//
//     if (!task) task = {id: 'qesw54', title: 'defaultTask', isDone: false}
//     или if (!task) return null
//
//     //return <Task task={task} todolistId={'todolistId1'}  />  //нужен Task с другим набором пропсов для редакса
//    return <></>
// }
//
// export const TaskStory: Story = {
//     render: () => <TaskWithRedux />
// }