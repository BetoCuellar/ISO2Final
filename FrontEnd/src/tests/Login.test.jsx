import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

describe('Login Component', () => {
  test('renders login form', () => {
    render(<Login />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
  });

  test('submits form with email and password', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<Login />);
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: '1234' } });
    fireEvent.click(screen.getByText(/Ingresar/i));

    expect(alertMock).toHaveBeenCalledWith('Intentando login con email: test@example.com');

    alertMock.mockRestore();
  });
});
