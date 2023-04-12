/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Section } from '../Section';
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
      <Section className="!su-rs-pb-7 !su-rs-pt-10" style={{ backgroundColor: '#2F2D29', backgroundImage: darkMesh5 }}>
        <Heading as="h1" size={9} leading="none" font="druk">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            {lines.map((text, index) => (
              <motion.div variants={itemVariants} key={`line${index + 1}`}>
                {text}
              </motion.div>
            ))}
          </motion.div>
        </Heading>
      </Section>
    </Container>
  );
};
