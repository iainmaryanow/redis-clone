import React from 'react'
import { render, screen } from '@testing-library/react'
import CommandBuilder from '../CommandBuilder'

it('renders the INCR command with default key', () => {
  const command = { type: 'INCR', key: 'item' }

  render(<CommandBuilder command={ command } />)

  expect(screen.getByText(command.type)).toBeInTheDocument()
  expect(screen.getByText('key')).toBeInTheDocument()
  expect(screen.getByDisplayValue(command.key)).toBeInTheDocument()
})

it('renders the INCR command without a default key', () => {
  const command = { type: 'INCR' }

  render(<CommandBuilder command={ command } />)

  expect(screen.getByText(command.type)).toBeInTheDocument()
  expect(screen.getByText('key')).toBeInTheDocument()
  expect(screen.getByRole('textbox')).toHaveDisplayValue('')
})

it('renders the SET command with default key and value', () => {
  const command = { type: 'SET', key: 'item', value: 'test' }

  render(<CommandBuilder command={ command } />)

  expect(screen.getByText(command.type)).toBeInTheDocument()
  expect(screen.getByText('NX')).toBeInTheDocument()
  expect(screen.getByText('XX')).toBeInTheDocument()
  expect(screen.getByText('EX')).toBeInTheDocument()
  expect(screen.getByText('PX')).toBeInTheDocument()
  expect(screen.getByText('EXAT')).toBeInTheDocument()
  expect(screen.getByText('PXAT')).toBeInTheDocument()
  expect(screen.getByText('KEEPTTL')).toBeInTheDocument()

  expect(screen.getByText('key')).toBeInTheDocument()
  expect(screen.getByDisplayValue(command.key)).toBeInTheDocument()
  expect(screen.getByText('value')).toBeInTheDocument()
  expect(screen.getByDisplayValue(command.value)).toBeInTheDocument()
})