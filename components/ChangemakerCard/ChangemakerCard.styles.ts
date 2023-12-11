export const root = 'relative [perspective:100rem] w-full max-w-[29rem] sm:max-w-300 lg:max-w-[35rem] mx-auto break-words transition-transform focus-visible:outline-none';
export const cardInner = 'relative w-full h-full aspect-w-1 aspect-h-2 [transform-style:preserve-3d] transform-gpu duration-1000';
export const cardFront = 'group/front absolute w-full h-full top-0 left-0';
export const content = 'group-aria-hidden/front:opacity-0 delay-100 transition-opacity rs-px-0 absolute w-full h-2/5 bottom-0 left-0';
export const button = 'group/button absolute w-full h-full top-0 left-0 transition-all delay-200';
export const buttonFront = 'group-aria-hidden/front:invisible';
export const buttonBack = 'group-aria-hidden/back:invisible';
export const flipIcon = 'absolute bottom-40 right-36 text-white w-65 h-65 border-2 border-white rounded-full p-16 group-hover/button:border-dashed group-hover/button:rotate-45 group-focus/button:border-dashed group-focus/button:rotate-45';
export const cardBack = 'group/back backface-hidden absolute w-full h-full top-0 left-0 px-20 py-30 3xl:py-48 3xl:px-36 bg-gradient-to-b from-gc-black/70 to-gc-black/90 [transform:rotateY(180deg)] gc-changemaker children:children:children:!mb-1em';
export const imageWrapper = 'overflow-hidden aspect-w-1 aspect-h-2';
export const heading = 'mb-02em transition-opacity delay-100';
