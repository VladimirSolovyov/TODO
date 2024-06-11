import React, { useEffect, useState } from 'react'
import { Container, Typography, Paper } from '@mui/material'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'

export interface ITask {
	id: number
	text: string
	completed: boolean
}

const App: React.FC = () => {
	const [tasks, setTasks] = useState<ITask[]>([])
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('active')

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks')
		if (storedTasks) setTasks(JSON.parse(storedTasks))
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = (task: ITask) => {
		setTasks([...tasks, task])
	}

	const completeTask = (id: number) => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const clearCompleted = () => {
		setTasks(tasks.filter(task => !task.completed))
	}

	const filteredTasks = tasks.filter(task => {
		if (filter === 'active') return !task.completed
		if (filter === 'completed') return task.completed
		return true
	})

	return (
		<Container maxWidth='sm'>
			<Paper style={{ padding: 16, marginTop: 16 }}>
				<Typography>Список дел</Typography>
				<TodoInput addTask={addTask} />
				<TodoList tasks={filteredTasks} completeTaks={completeTask} />
				<FilterButtons setFilter={setFilter} clearCompleted={clearCompleted} />
			</Paper>
		</Container>
	)
}

export default App
