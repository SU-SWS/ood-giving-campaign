import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import {
  Row,
  type RowGapType,
  type RowColumnRatioType,
  type RowDisplayRowAtType,
  type RowVerticalAlignType,
} from '@/components/Row';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { CreateBloks } from '@/components/CreateBloks';
import { type MarginType } from '@/utilities/datasource';

type SbRowProps = {
  blok: {
    _uid: string;
    // Turn row into <ul> and items into <li>
    isList?: boolean;
    gap?: RowGapType;
    columnRatio?: RowColumnRatioType;
    displayRowAt?: RowDisplayRowAtType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    verticalAlign?: RowVerticalAlignType;
    items: SbBlokData[];
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isHidden?: boolean;
  };
};

export const SbRow = ({
  blok: {
    isList,
    gap,
    columnRatio,
    displayRowAt,
    boundingWidth = 'full',
    width,
    verticalAlign,
    items,
    marginTop,
    marginBottom,
    isHidden,
  },
  blok,
}: SbRowProps) => {
  if (isHidden) {
    return null;
  }

  return (
    <WidthBox
      {...storyblokEditable(blok)}
      boundingWidth={boundingWidth}
      width={width}
      mt={marginTop}
      mb={marginBottom}
      className={verticalAlign === 'stretch' ? 'flex' : ''}
    >
      <Row
        isList={isList}
        gap={gap}
        columnRatio={columnRatio}
        displayRowAt={displayRowAt}
        verticalAlign={verticalAlign}
      >
        <CreateBloks blokSection={items} isListItems={isList} />
      </Row>
    </WidthBox>
  );
};
