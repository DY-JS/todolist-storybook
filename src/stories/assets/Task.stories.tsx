import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Task} from "../../Task";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        //changeTaskStatus: () => console.log('bbbbbbbbbbbb'),
        //changeTaskTitle: action('changeTaskTitle'),
        //removeTask: action('removeTask'),
        task: {id: 'asada2', isDone: true, title: 'JS'},
        todolistId: '12ewsg'
    },
    argTypes: {
        changeTaskStatus: {
            description: 'qeewreq',
            action: 'clicked'
        },
        changeTaskTitle: {
            description: 'qeewreq',
            action: 'clicked'
        },
        removeTask: {
            description: 'qeewreq',
            action: 'clicked'
        }
    }
};
export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TaskIsDoneStory: Story = {}

export const TaskIsNotDoneStory: Story = {
    args: {
        task: {id: 'asada2234', isDone: false, title: 'CSS'}
    }
}