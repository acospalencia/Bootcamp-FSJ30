import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        // Si el login es exitoso, redirige al usuario
        navigate('/dashboard');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="mb-4 text-center">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="Ingresa tu correo"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
