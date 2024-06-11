import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

// Utility function to add a task
const addTask = (taskText: string) => {
	const input = screen.getByPlaceholderText('Что нужно сделать?')
	fireEvent.change(input, { target: { value: taskText } })
	const addButton = screen.getByText('Добавить')
	fireEvent.click(addButton)
}

test('добавление задачи', () => {
	render(<App />)
	addTask('Новая задача')
	expect(screen.getByText('Новая задача')).toBeInTheDocument()
})

test('выполнение задачи', () => {
	render(<App />)
	addTask('Новая задача')
	const checkbox = screen.getByRole('checkbox')
	fireEvent.click(checkbox)
	expect(checkbox).toBeChecked()
})

test('фильтрация задач', () => {
	render(<App />)
	addTask('Активная задача 1')
	addTask('Активная задача 2')
	const checkboxes = screen.getAllByRole('checkbox')
	fireEvent.click(checkboxes[0])

	const activeFilterButton = screen.getByText('Активные')
	fireEvent.click(activeFilterButton)
	expect(screen.queryByText('Активная задача 1')).not.toBeInTheDocument()
	expect(screen.getByText('Активная задача 2')).toBeInTheDocument()

	const completedFilterButton = screen.getByText('Выполненные')
	fireEvent.click(completedFilterButton)
	expect(screen.getByText('Активная задача 1')).toBeInTheDocument()
	expect(screen.queryByText('Активная задача 2')).not.toBeInTheDocument()
})

test('очистка выполненных задач', () => {
	render(<App />)
	addTask('Задача 1')
	addTask('Задача 2')
	const checkboxes = screen.getAllByRole('checkbox')
	fireEvent.click(checkboxes[0])

	const clearCompletedButton = screen.getByText('Очистить выполненные')
	fireEvent.click(clearCompletedButton)

	expect(screen.queryByText('Задача 1')).not.toBeInTheDocument()
	expect(screen.getByText('Задача 2')).toBeInTheDocument()
})
