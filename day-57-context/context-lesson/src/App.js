import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import Layout from './components/Layout';
import { UserProvider } from './contexts/UserContext'
import Heading from './components/Heading';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <h1>Day-57 - React Context</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
