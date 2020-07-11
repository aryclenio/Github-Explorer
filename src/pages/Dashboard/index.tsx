import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import github from '../../assets/github.svg';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={github} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form action="">
        <input placeholder="Insert repository name" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src="https://google.com.br" alt="Ary" />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Efkjdsnf jfdsnfnds jfsndknfds</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
