import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('1 - Testando renderização inicial', () => {
  it('Buscando titulo e inputs e seus valores iniciais.', () => {
    render(<App/>)
    const title = screen.getByLabelText(/Projeto Star Wars/i);

    expect(title).toBeInTheDocument();
  })
})
