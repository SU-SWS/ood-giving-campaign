import { useState } from 'react';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Heading, Paragraph, Text } from '../Typography';
import { Book } from './Book';
import { getProcessedImage } from '@/utilities/getProcessedImage';

export const Bookshelf = () => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <Container py={10}>
      <FlexBox className="gap-10 overflow-hidden" alignItems="end">
        <Book
          name="Khushmita Dhabhai"
          i={1}
          expanded={expanded}
          setExpanded={setExpanded}
          buttonClassName="bg-sky hocus:bg-sky-dark h-600"
          contentClassName="from-sky/30 h-600"
        >
          <img
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/755x477/659626090b/pallas-cat-manul-8.jpg', '300x300')}
            alt=""
            className="w-300 h-300 rounded-full"
          />
          <div>
            <Heading size={3} font="serif" weight="bold" className="mb-0">Khushmita Dhabhai</Heading>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
            et iaculis eros faucibus varius. Lorem ipsum dolor sit amet.
            </Paragraph>
          </div>
        </Book>
        <Book
          name="Alvin Pearman"
          i={2}
          expanded={expanded}
          setExpanded={setExpanded}
          buttonClassName="bg-spirited hocus:bg-spirited-dark h-[63rem]"
          contentClassName="from-spirited/30 h-[63rem]"
        >
          <img
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/755x477/659626090b/pallas-cat-manul-8.jpg', '300x300')}
            alt=""
            className="w-300 h-300 rounded-full"
          />
          <div>
            <Heading size={3} font="serif" weight="bold" className="mb-0">Alvin Pearman</Heading>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
            et iaculis eros faucibus varius. Lorem ipsum dolor sit amet.
            </Paragraph>
          </div>
        </Book>
        <Book
          name="Govi Goba"
          i={3}
          expanded={expanded}
          setExpanded={setExpanded}
          buttonClassName="bg-palo-verde-dark hocus:bg-palo-alto h-[58rem]"
          contentClassName="from-palo-verde-dark/30 h-[58rem]"
        >
          <img
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/755x477/659626090b/pallas-cat-manul-8.jpg', '300x300')}
            alt=""
            className="w-300 h-300 rounded-full"
          />
          <div>
            <Heading size={3} font="serif" weight="bold" className="mb-0">Govi Goba</Heading>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est magna,
            et iaculis eros faucibus varius. Lorem ipsum dolor sit amet.
            </Paragraph>
          </div>
        </Book>
      </FlexBox>
    </Container>
  );
};
