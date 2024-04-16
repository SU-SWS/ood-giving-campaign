import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { Row, type RowGapType, type RowColumnRatioType } from '@/components/Row';
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
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    horizontalAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'center' | 'bottom';
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
    boundingWidth = 'full',
    width,
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
    >
      <Row
        isList={isList}
        gap={gap}
        columnRatio={columnRatio}
      >
        <CreateBloks blokSection={items} isListItems={isList} />
      </Row>
    </WidthBox>
  );
};
