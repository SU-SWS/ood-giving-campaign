/**
 * A NextJS Embed Component
 *
 * Credit where credit is deserved.
 * @see: https://github.com/christo-pr/dangerously-set-html-content
 *
 * Use this widget with caution. There are no safeguards on what it can do. It
 * is also not good practice to inject and manipulate the page outside of
 * REACT as that can lead to irregularities and troubles.
 */
import React, { useRef, useEffect } from 'react';
import { WidthBox, type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';

export interface EmbedProps extends  React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  src?: string;
  content?: string;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
  className?: string;
}

const Embed = ({
id, src, content, boundingWidth, spacingTop, spacingBottom, className, width, ...props
}:EmbedProps) => {

  const myEmbed = useRef(null);

  useEffect(() => {
    // If there is no content or src, return.
    if (!content && !src) return;
    const domElement = myEmbed.current;
    // Clear the container.
    domElement.innerHTML = '';

    if (src.length > 1) {
      // Create a script tag.
      const script = document.createElement('script');
      // Set the src to the src provided.
      script.src = src;
      domElement.appendChild(script);
    }

    if (content.length > 1) {
      // Create a 'tiny' document and parse the html string.
      // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
      const miniDom = document.createRange().createContextualFragment(content);
      // Force the scripts in the embed script field to load sync.
      const scripts = miniDom.querySelectorAll('script');
      if (scripts.length >= 1) {
        for (const item of scripts) {
          if (item.src && item.src.length > 1) {
            item.async = false;
            item.defer = false;
          }
        }
      }
    // Append the new content.
    domElement.appendChild(miniDom);
    }

    return () => {
      // Clean up the script tag.
      domElement.innerHTML = '';
    };
  }, [content, src]);

  if (content) {
    return (
      <WidthBox
        {...props}
        boundingWidth={boundingWidth}
        width={width}
        pt={spacingTop}
        pb={spacingBottom}
        className={className}
      >
        <div ref={myEmbed} />
      </WidthBox>
    );
  }

  return (<p className='bg-red text-white text-3xl'>You must provide either an src or content to the embed</p>);
};

export default Embed;
