import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 40px;
`;

const ArtItem = styled.div`
  margin-bottom: 20px;
  border: 2px solid #00ff00;
  padding: 20px;
  border-radius: 10px;
`;

const Art = () => (
  <Section>
    <h2>Art</h2>
    <ArtItem>
      <h3>Art Piece 1</h3>
      <p>Description of art piece 1.</p>
    </ArtItem>
    <ArtItem>
      <h3>Art Piece 2</h3>
      <p>Description of art piece 2.</p>
    </ArtItem>
  </Section>
);

export default Art;
