import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name: 'Programação',
      highlight: '#57C278',
      background: '#D9F7E9'
    },
    {
      name: 'Front-End',
      highlight: '#82CFFA',
      background: '#E8F8FF'
    },
    {
      name: 'Data Science',
      highlight: '#A6D157',
      background: '#F0F8E2'
    },
    {
      name: 'Devops',
      highlight: '#E06B69',
      background: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      highlight: '#DB6EBF',
      background: '#FAE9F5'
    },
    {
      name: 'Mobile',
      highlight: '#FFBA05',
      background: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      highlight: '#FF8A29',
      background: '#FFEEDF'
    },
  ]
  
  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaborator = collaborator => {
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} onCollaboratorRegistered={onNewCollaborator} />
      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        highlightColor={team.highlight}
        backgroundColor={team.background}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
