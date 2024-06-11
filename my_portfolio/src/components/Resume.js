import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 40px;
`;

const ResumeItem = styled.div`
  margin-bottom: 20px;
`;

const Resume = () => (
  <Section>
    <h2>Professional Summary</h2>
    <p>Innovative and results-driven database specialist with a track record of leveraging technology to solve complex problems and drive business success. Excels in fast-paced environments that value precision, passion, and strategic thinking.</p>
    
    <h2>Experience</h2>
    <div className="resume-container">
      <div className="main-content">
        <ResumeItem>
          <h3>Data Engineer / Analyst</h3>
          <p>StoneX Group, NY | 06-2023 - 04-2024</p>
          <ul>
            <li>Independently developed a scalable data warehouse using Azure, enhancing the team’s organizational and analytical capabilities.</li>
            <li>Employed SSIS to facilitate the movement and filtration of large-scale trade blotters for regulatory data pulls, improving the efficiency and accuracy of reporting.</li>
            <li>Collaborated with cross-functional teams to drive a data-driven culture, enabling informed decision-making and supporting compliance with regulatory requirements.</li>
          </ul>
        </ResumeItem>

        <ResumeItem>
          <h3>Business Intelligence Analyst</h3>
          <p>Zippin, Remote | 06-2022 - 03-2023</p>
          <ul>
            <li>Manipulated and moved data in robust ways to answer business questions and build efficiencies.</li>
            <li>Conducted deep-dive analysis into customer transaction data, reducing lost payments by as much as 20%.</li>
            <li>Utilized machine learning models to accurately predict game day sales for an NFL Stadium customer, streamlining revenue reporting from 3 days to 2 hours.</li>
            <li>Developed product analytics dashboards to assess new product launches and identified process bottlenecks, improving customer receipt time by 25%.</li>
          </ul>
        </ResumeItem>
      </div>

      <div className="sidebar">
        <h2>Skills</h2>
        <ResumeItem>
          <h3>Programming</h3>
          <ul>
            <li>SQL</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <h3>Business Intelligence</h3>
          <ul>
            <li>Power BI</li>
            <li>Grafana</li>
            <li>Tableau</li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <h3>Database Management</h3>
          <ul>
            <li>MSSQL, MySQL, PL/SQL</li>
            <li>Azure Data Factory</li>
            <li>BigQuery</li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <h3>Other Tools</h3>
          <ul>
            <li>Salesforce / Jira</li>
            <li>Power Apps/Automate</li>
            <li>Git/GitHub</li>
          </ul>
        </ResumeItem>
      </div>
    </div>

    <h2>Education</h2>
    <p>Business Analytics and Information Systems B.S., Boston College | 05-2022</p>
    <p>Graduated from the Carroll School of Management with a focus on Database Systems, Systems Analysis, Data Visualization, Predictive Analytics, and AI.</p>
  </Section>
);

export default Resume;
