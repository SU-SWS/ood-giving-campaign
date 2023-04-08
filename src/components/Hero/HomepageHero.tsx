import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Section } from '../Section';
import { Heading } from '../Typography';

export const HomepageHero = () => {
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
      y: 0,
      WebkitTextStroke: '0',
      color: '#fff',
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0.8,
      WebkitTextStroke: '2px #ddd',
      color: '#2F2D29',
      y: 40,
    },
  };

  return (
    <Container width="full">
      <Section className="!su-rs-py-7">
        <Heading as="h1" size={9} leading="none" font="druk">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} key="line1">
              Here and now
            </motion.div>
            <motion.div variants={itemVariants} key="line2">
              is where we
            </motion.div>
            <motion.div variants={itemVariants} key="line3">
              make the
            </motion.div>
            <motion.div variants={itemVariants} key="line4">
              world better.
            </motion.div>
            <motion.div variants={itemVariants} key="line5">
              On purpose.
            </motion.div>
          </motion.div>
        </Heading>
      </Section>
    </Container>
  );
};
