const featuredStories = () => {

  return (
    <p>Feature Stories.</p>
  );

  // {!!filteredStoryList?.length && (
  //   <>
  //   {hasFeaturedStories && <Heading as="h3" srOnly>Other stories</Heading>}
  //     <Grid as="ul" pt={6} className="list-unstyled *:mb-0 gap-y-45 md:gap-y-90 2xl:gap-y-95">
  //       {filteredStoryList.map((story) => {
  //         const {
  //           cardTitle,
  //           title,
  //           cardTeaser,
  //           dek,
  //           cardImage,
  //           heroImage,
  //           bgImage,
  //           tabColor,
  //           initiatives,
  //           themes,
  //         } = story.content;

  //         return (
  //           <li key={story.uuid}>
  //             <StoryCard
  //               isListView
  //               isDark
  //               heading={cardTitle || title}
  //               // If there is no featured stories then there is only one ul with h2 latest stories
  //               headingLevel={hasFeaturedStories ? 'h4' : 'h3'}
  //               body={cardTeaser || dek}
  //               imageSrc={cardImage?.filename || heroImage?.filename || bgImage?.filename}
  //               imageFocus={cardImage?.focus || heroImage?.focus || bgImage?.focus}
  //               tabColor={paletteAccentColors[tabColor?.value]}
  //               href={`/${story.full_slug}`}
  //               animation="slideUp"
  //               taxonomy={[...initiatives, ...themes]}
  //             />
  //           </li>
  //         );
  //       })}
  //     </Grid>
  //   </>
  // )}

};
export default featuredStories;
