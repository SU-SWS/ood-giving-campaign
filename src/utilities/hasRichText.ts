import { render } from 'storyblok-rich-text-react-renderer-ts';
import { getNumBloks } from './getNumBloks';

/**
 * Returns a boolean if the Storyblok rich text field (wysiwyg) has any content.
 *
 * @param {object} section - The wysiwyg to check for content.
 * @returns {boolean} - Whether or not the wysiwyg has content.
 */

export const hasRichText = (wysiwyg) => getNumBloks(render(wysiwyg)) > 0;
