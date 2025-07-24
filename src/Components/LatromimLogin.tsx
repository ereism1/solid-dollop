"use client"
import React, { useState } from 'react';
import './LatromiLogin.css';

const LatromiLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = () => {
    const baseURL = 'https://corelog.avaconcloud.com/web';
    const authURL = baseURL + '/Services/Authentication.svc/rest/authenticate2';

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          const authResult = JSON.parse(xhttp.responseText);
          if (authResult.status !== 100) {
            setErrorMessage('Erro: ' + authResult.message);
            setSuccessMessage('');
            setAuthToken(null);
          } else {
            setSuccessMessage('Autenticado com sucesso!');
            setErrorMessage('');
            setAuthToken(authResult.authToken);
            alert('Autenticado');

            window.location.assign(baseURL + "/?authtk=" + authResult.authToken);
          }
        } else {
          setErrorMessage(
            'Erro: ' + (xhttp.responseText || 'Abra o console para mais detalhes.')
          );
          setSuccessMessage('');
        }
      }
    };

    xhttp.open('POST', authURL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify({ username, password }));
  };

    

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Faça seu Acesso</h1>
        <p>Entre com suas credenciais</p>
      </div>

      <div className="form-group">
        <label htmlFor="username">Usuário</label>
        <input className='input'
          type="text"
          id="username"
          placeholder ="Digite seu usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input className='input'
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button className="btn-login" onClick={handleLogin}>
        Entrar
      </button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

    
    </div>
  );
};

export default LatromiLogin;
