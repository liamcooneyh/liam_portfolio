import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Section = styled.section`
  margin-bottom: 40px;
`;

const ProjectItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
`;

const CodeBox = styled.div`
  background-color: #2e2e2e;
  color: #00ff00;
  padding: 10px;
  border-radius: 5px;
  overflow-y: scroll;
  max-height: 300px; /* Adjust the height as needed */
  margin-top: 20px;
  font-size: 14px; /* Set a smaller font size */
`;

const Projects = () => {
  const [project, setProject] = useState(null);
  const [readme, setReadme] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/liamcooneyh/blurbier');
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    const fetchReadme = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/liamcooneyh/blurbier/readme', {
          headers: {
            Accept: 'application/vnd.github.v3.raw'
          }
        });
        const data = await response.text();
        setReadme(data);
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    const fetchCode = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/liamcooneyh/blurbier/main/app.py');
        const data = await response.text();
        setCode(data);
      } catch (error) {
        console.error('Error fetching code:', error);
      }
    };

    fetchProject();
    fetchReadme();
    fetchCode();
  }, []);

  return (
    <Section>
      <h2>Projects</h2>
      {project && (
        <ProjectItem>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          <h4>README:</h4>
          <CodeBox>
            <SyntaxHighlighter language="markdown" style={atomDark} customStyle={{ fontSize: '14px' }}>
              {readme}
            </SyntaxHighlighter>
          </CodeBox>
          <h4>Code (app.py):</h4>
          <CodeBox>
            <SyntaxHighlighter language="python" style={atomDark} customStyle={{ fontSize: '14px' }}>
              {code}
            </SyntaxHighlighter>
          </CodeBox>
        </ProjectItem>
      )}
    </Section>
  );
};

export default Projects;
