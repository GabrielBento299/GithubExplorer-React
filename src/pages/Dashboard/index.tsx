import { InputErorr, Title, Form, Repositories } from './styles';

import { useState, useEffect, FormEvent } from 'react';

import { Link } from 'react-router-dom';

import { FiChevronRight, FiSearch } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Reposityory {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard = () => {

  const [inputError, setInputError] = useState('');
  
  const [repositories, setRepositories] = useState<Reposityory[]>(() => {
    const storagedRepositories = localStorage.getItem('@GitgubExplorer:repositories')
    
    if(storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
  });
  const [newRepo, setNewRepo] = useState('')

  useEffect(() => {
    localStorage.setItem('@GitgubExplorer:repositories', 
    JSON.stringify(repositories));
  },[repositories])

  async function handleAddRepository(e: FormEvent) {
    e.preventDefault();

    if(!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      const repository = response.data;
  
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch(err) {
      setInputError('Erro na busca por esse repositorio');
    }
  }

  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no Github</Title>
     
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input 
            placeholder="Digite aqui"
            value={newRepo}
            onChange={({target}) => setNewRepo(target.value)} 
        />

        <button type="submit">
            Pesquisar <FiSearch color={'#FFF'} />
        </button>
      </Form>

      {inputError && <InputErorr>{inputError}</InputErorr>}

      <Repositories>
        {repositories.map((repository => (
               <Link to={`/repositories/${repository.full_name}`} key={repository.full_name}>
               <img src={repository.owner.avatar_url} alt={repository.owner.login} />
               <div>
                 <strong>{repository.full_name}</strong>
                 <p>{repository.description}</p>
               </div>
             <FiChevronRight size={30} />
             </Link>
          )))}
      </Repositories>
    </>
  )
}

export default Dashboard;