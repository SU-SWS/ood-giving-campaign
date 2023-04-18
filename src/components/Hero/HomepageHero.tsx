/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { m } from 'framer-motion';
import { Container } from '../Container';
import { Heading } from '../Typography';
import { darkMesh5 } from '../../utilities/gradients';

export const HomepageHero = () => {
  const lines: string[] = [
    'Here and now',
    'is where we',
    'make the',
    'world better.',
    'On purpose.',
  ];

  const parentVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 1,
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      WebkitTextStroke: '0',
      color: '#fff',
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 1,
      WebkitTextStroke: '2px #ddd',
      color: 'rgba(255, 255, 255, 0)',
      transform: 'translateY(0.3em)',
    },
  };

  return (
    <Container width="full" className="su-relative">
      <Container pt={10} pb={7} style={{ backgroundColor: '#2F2D29', backgroundImage: darkMesh5 }}>
        <Heading as="h1" size={9} leading="none" font="druk">
          <m.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            {lines.map((text, index) => (
              <m.div variants={itemVariants} key={`line${index + 1}`}>
                {text}
              </m.div>
            ))}
          </m.div>
        </Heading>
      </Container>
    </Container>
  );
};
