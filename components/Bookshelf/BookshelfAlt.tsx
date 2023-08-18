import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Paragraph, Text } from '../Typography';
import { BookAlt } from './BookAlt';

export const BookshelfAlt = () => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <Container bgColor="white" py={7} className="relative 3xl:px-100">
      <FlexBox className="overflow-hidden mx-auto relative top-8 gap-20 2xl:gap-48" alignItems="end">
        <LayoutGroup>
          <BookAlt
            title="Impact on campus"
            body="Before we can solve the problems of the world, we must begin with the issues closest to us. This means meeting the needs of the communities in and around Stanford. The changes we make in our own backyard will ripple out into the world."
            i={1}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/2042x1359/5b3f36eca9/21664-19-0027_cmyk-1.jpg"
            buttonClassName=""
            contentClassName=""
          />
          <BookAlt
            title="Impact on community"
            body="Before we can solve the problems of the world, we must begin with the issues closest to us. This means meeting the needs of the communities in and around Stanford. The changes we make in our own backyard will ripple out into the world."
            i={2}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/2053x1369/11ebaf97b0/20220203_capstone_n6a7538_cmyk-2.jpg"
            buttonClassName=""
            contentClassName=""
          />
          <BookAlt
            title="Impact on the nation"
            body="Before we can solve the problems of the world, we must begin with the issues closest to us. This means meeting the needs of the communities in and around Stanford. The changes we make in our own backyard will ripple out into the world."
            i={3}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/2907x1848/07079af822/mayer-tawfik-py2v6tuygqw-unsplash_cmyk-1.jpg"
            buttonClassName=""
            contentClassName=""
          />
          <BookAlt
            title="Impact on the world"
            body="Before we can solve the problems of the world, we must begin with the issues closest to us. This means meeting the needs of the communities in and around Stanford. The changes we make in our own backyard will ripple out into the world."
            i={4}
            expanded={expanded}
            setExpanded={setExpanded}
            imgSrc="https://a-us.storyblok.com/f/1005200/3089x2048/f97d5d20f7/21664-15-0018.jpg"
            buttonClassName=""
            contentClassName=""
          />
        </LayoutGroup>
      </FlexBox>
    </Container>
  );
};
