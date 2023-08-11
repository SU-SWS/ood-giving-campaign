import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Paragraph, Text } from '../Typography';
import { Book } from './Book';

export const Bookshelf = () => {
  const [expanded, setExpanded] = useState<false | number>(4);

  return (
    <Container py={10}>
      <FlexBox className="overflow-hidden w-11/12 mx-auto relative top-8" alignItems="end">
        <LayoutGroup>
          <Book
            name="Khushmita Dhabhai"
            i={1}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/755x477/659626090b/pallas-cat-manul-8.jpg"
            buttonClassName="bg-sky hocus-visible:bg-sky-dark h-600"
            contentClassName="from-sky/30 h-600"
          >
            <Text>
              Professor of Lorem Ipsum Dolar Sit
            </Text>
            <Text weight="semibold" font="serif" size={1} leading="display" className="rs-mt-2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius.”
            </Text>
            <Paragraph noMargin variant="card" className="rs-mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras bibendum est magna, et iaculis eros faucibus varius.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          </Book>
          <Book
            name="Misan Rewane"
            i={2}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/2560x1708/08583a88a2/neukom_profjulianabidadanure_1464.jpg"
            buttonClassName="bg-spirited hocus-visible:bg-spirited-dark h-[63rem]"
            contentClassName="from-spirited/30 h-[63rem]"
          >
            <Text>
              Professor of Lorem Ipsum Dolar Sit
            </Text>
            <Text weight="semibold" font="serif" size={1} leading="display" className="rs-mt-2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius.”
            </Text>
            <Paragraph noMargin variant="card" className="rs-mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras bibendum est magna.
            </Paragraph>
          </Book>
          <Book
            name="Govi Goba"
            i={3}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/548x547/b3f12028fc/image.jpg"
            buttonClassName="bg-palo-verde-dark hocus-visible:bg-palo-alto h-[58rem]"
            contentClassName="from-palo-verde-dark/30 h-[58rem]"
          >
            <Text>
              Professor of Lorem Ipsum Dolar Sit
            </Text>
            <Text weight="semibold" font="serif" size={1} leading="display" className="rs-mt-2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius.”
            </Text>
            <Paragraph noMargin variant="card" className="rs-mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras bibendum est magna.
            </Paragraph>
          </Book>
          <Book
            name="Lerone A. Martin"
            i={4}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/548x545/3236b55dee/column-15.jpg"
            buttonClassName="bg-poppy hocus-visible:bg-poppy-dark h-[66rem]"
            contentClassName="from-poppy/30 h-[66rem]"
          >
            <Text>
              Professor of Lorem Ipsum Dolar Sit
            </Text>
            <Text weight="semibold" font="serif" size={1} leading="display" className="rs-mt-2">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius.”
            </Text>
            <Paragraph noMargin variant="card" className="rs-mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
              et iaculis eros faucibus varius. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras bibendum est magna.
            </Paragraph>
          </Book>
        </LayoutGroup>
      </FlexBox>
      <div
        className="w-full flex justify-center shrink-0 -z-10 relative h-0 border-b-[1.6rem] border-b-black-10 border-l-[2rem] border-l-transparent border-r-[2rem] border-r-transparent before:content-[''] before:absolute before:top-16 before:bg-gradient-to-t before:from-fog-light before:to-white before:shadow-md before:h-26 before:w-[calc(100%+4rem)] before:z-[2] after:content-[''] after:h-80 after:w-[calc(100%+4rem)] after:absolute after:top-42 after:block after:bg-gradient-to-b after:from-black-40/70 after:via-black-10/20 after:via-30% after:to-transparent after:-z-1 after:[clip-path:polygon(0%_0%,100%_0%,97%_100%,3%_100%)]"
      />
    </Container>
  );
};
