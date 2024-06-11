import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { ITask } from '../App'

interface ITodoInputProps {
	addTask: (task: ITask) => void
}

const TodoInput: React.FC<ITodoInputProps> = ({ addTask }) => {
	const [text, setText] = useState('')

	const handleAdd = () => {
		if (text.trim()) {
			addTask({ id: Date.now(), text, completed: false })
			setText('')
		}
	}

	return (
		<Box display='flex' justifyContent='space-between' alignItems='center'>
			<TextField
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Что нужно сделать?'
				fullWidth
				variant='outlined'
				style={{ marginRight: 8 }}
			/>
			<Button variant='contained' color='primary' onClick={handleAdd}>
				Добавить
			</Button>
		</Box>
	)
}

export default TodoInput
