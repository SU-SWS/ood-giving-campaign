/**
 * Generic types for Storyblok fields
 */
export type SbImageType = {
  id?: number,
  alt?: string,
  name?: string,
  focus?: string,
  title?: string,
  filename?: string,
  copyright?: string,
  fieldType?: string,
};

export type SbLinkType =
  | {
    cached_url?: string;
    linktype?: string;
    [k: string]: any;
  }
  | {
    id?: string;
    cached_url?: string;
    linktype?: 'story';
    [k: string]: any;
  }
  | {
    url?: string;
    cached_url?: string;
    linktype?: 'asset' | 'url';
    [k: string]: any;
  }
  | {
    email?: string;
    linktype?: 'email';
    [k: string]: any;
  };