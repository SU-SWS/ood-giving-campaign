import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Section } from '../Section';
import { Heading } from '../Typography';

export const HomepageHero = () => {
  const lines: string[] = [
    'Here and now',
    'is where we',
    'make the',
    'world better.',
    'On purpose.',
  ];

  const meshGradient = 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)';

  const darkMeshGradient = 'radial-gradient(at 86% 46%, hsla(342, 91%, 61%, 1) 0, hsla(342, 91%, 61%, 0) 50%), radial-gradient(at 13% 79%, hsla(325, 85%, 57%, 1) 0, hsla(325, 85%, 57%, 0) 50%), radial-gradient(at 72% 27%, hsla(268, 89%, 65%, 1) 0, hsla(268, 89%, 65%, 0) 50%), radial-gradient(at 79% 3%, hsla(65, 86%, 57%, 1) 0, hsla(65, 86%, 57%, 0) 50%), radial-gradient(at 61% 13%, hsla(201, 85%, 62%, 1) 0, hsla(201, 85%, 62%, 0) 50%), radial-gradient(at 8% 81%, hsla(111, 88%, 63%, 1) 0, hsla(111, 88%, 63%, 0) 50%), radial-gradient(at 46% 70%, hsla(321, 90%, 57%, 1) 0, hsla(321, 90%, 57%, 0) 50%)';

  const darkMesh2 = 'radial-gradient(at 65% 67%, hsla(46, 85%, 65%, 1) 0, hsla(46, 85%, 65%, 0) 50%), radial-gradient(at 100% 33%, hsla(185, 89%, 68%, 1) 0, hsla(185, 89%, 68%, 0) 50%), radial-gradient(at 5% 99%, hsla(279, 89%, 52%, 1) 0, hsla(279, 89%, 52%, 0) 50%), radial-gradient(at 12% 33%, hsla(345, 89%, 62%, 1) 0, hsla(345, 89%, 62%, 0) 50%)';

  const layerGradient = 'radial-gradient(100% 88.5% at 83% 0%, rgba(250, 240, 137, 0.9) 0%, rgba(247, 225, 127, 0.83) 7.58%, rgba(242, 210, 120, 0.75) 15.17%, rgba(238, 195, 112, 0.68) 22.75%, rgba(233, 180, 105, 0.6) 30.33%, rgba(227, 165, 99, 0.53) 37.92%, rgba(223, 150, 92, 0.45) 45.5%, rgba(218, 134, 85, 0.38) 53.08%, rgba(216, 117, 79, 0.3) 60.67%, rgba(216, 96, 72, 0.22) 68.25%, rgba(219, 66, 68, 0.15) 75.83%, rgba(177, 56, 94, 0) 91%), linear-gradient(180deg, #ffffb5 0%, #ffffff 0%, #f6d860 0%, #ed894b 0%, #d53a42 28%, #b1385e 43%, #2f2d29 100%, #6a324f 57%)';

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
    <Container width="full">
      <Section className="!su-rs-pb-7 !su-rs-pt-10" style={{ backgroundColor: '#000', backgroundImage: darkMesh2 }}>
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
