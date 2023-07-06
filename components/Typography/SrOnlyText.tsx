import { Text, TextProps } from './Text';

export const SrOnlyText = ({ children = '(link is external)', ...props }: TextProps) => (
  <Text {...props} as="span" srOnly className="su-white-space-pre">
    {` ${children}`}
  </Text>
);
