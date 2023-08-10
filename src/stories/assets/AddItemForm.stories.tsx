import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {AddItemForm, AddItemFormPropsType} from '../../AddItemForm';
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddItemForm> = {
  title: 'Example/AddItemForm',
  component: AddItemForm,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'centered',
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    addItem: {
      description: 'Clicked button inside form',
      //action: 'Clicked button inside form',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AddItemStory: Story = {
  args: {
    addItem: action( 'Clicked button inside form'),
  },
};


const AddItemFormWithError = (args: AddItemFormPropsType) => {
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>('Title is required')

  const addItem = () => {
    if (title.trim() !== "") {
      args.addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null);
    }
    if (e.charCode === 13) {
      addItem();
    }
  }
  return <div>
    <TextField variant="outlined"
               error={!!error}
               value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               label="Title"
               helperText={error}
    />
    <IconButton color="primary" onClick={addItem}>
      <AddBox />
    </IconButton>
  </div>
}
export const AddItemFormWithErrorStory: Story = {
  render: args => <AddItemFormWithError addItem={args.addItem}/>
}

// export const AddItemWithErrorStory: Story = {
//   //render: () => <AddItemForm addItem={action( 'Clicked button inside form')}/>
//   render: (args) => {
//     let [title, setTitle] = useState("")
//     let [error, setError] = useState<string | null>("Title is required")
//
//     const addItem = () => {
//       if (title.trim() !== "") {
//         args.addItem(title);
//         setTitle("");
//       } else {
//         setError("Title is required");
//       }
//     }
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//       setTitle(e.currentTarget.value)
//     }
//
//     const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//       if (error !== null) {
//         setError(null);
//       }
//       if (e.charCode === 13) {
//         addItem();
//       }
//     }
//
//     return <div>
//       <TextField variant="outlined"
//                  error={!!error}
//                  value={title}
//                  onChange={onChangeHandler}
//                  onKeyPress={onKeyPressHandler}
//                  label="Title"
//                  helperText={error}
//       />
//       <IconButton color="primary" onClick={addItem}>
//         <AddBox />
//       </IconButton>
//     </div>
//   }
// };
