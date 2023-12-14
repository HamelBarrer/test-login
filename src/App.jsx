import { useState } from 'react';
import { authenticationUser } from './services/authentication';

const App = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
  const { username, password } = account;

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (username === '' || password === '') {
        return;
      }

      const data = await authenticationUser(account);
      localStorage.setItem('token', data);
    } catch (error) {
      localStorage.clear();
      alert(error.message);
    }
  };

  return (
    <div className="grid place-content-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          className="border-2 border-gray-600 p-2 rounded-lg"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="border-2 border-gray-600 p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-green-700 text-white font-bold py-2 rounded-lg duration-300 hover:bg-green-800"
        >
          log in
        </button>
      </form>
    </div>
  );
};

export default App;
