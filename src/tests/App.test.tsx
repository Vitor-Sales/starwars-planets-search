import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('1 - Testando renderização inicial', () => {
  it('Buscando titulo e inputs e seus valores iniciais.', async () => {
    render(<App/>)
    const title = screen.getByLabelText(/Projeto Star Wars/i);

    expect(title).toBeInTheDocument();
  })
})

describe('2 - Testando botões e suas ações', () => {
  it('Buscando botões',  () => {
    render(<App/>)
    const btnFilter = screen.getByRole('button', {name: 'Filter'})
    const btnRemoveAll = screen.getByRole('button', {name: /Remove All Filters/i})
    const btnOrder = screen.getByRole('button', {name: /Order/i})

    expect(btnFilter).toBeInTheDocument();
    expect(btnRemoveAll).toBeInTheDocument();
    expect(btnOrder).toBeInTheDocument();
  })
  it('Ação do botão de Filtro', async () => {
    render(<App/>)
    const btnFilter = screen.getByRole('button', {name: 'Filter'})

    await userEvent.click(btnFilter);
     
    const Tatooine = await screen.findAllByText('Tatooine');

    await expect(screen.findAllByText('Hoth')).not.toBeInTheDocument();
    expect(Tatooine).toBeInTheDocument();

  })
})
