import { Masthead } from '@/components/Masthead';

export type TaxonomyLayoutProps = {
  children: React.ReactNode,
};

/**
 * The page component.
 */
export default async function TaxonomyLayout({children}: TaxonomyLayoutProps) {
  return (
    <>
      <Masthead className='bg-black h-[8.6rem]'/>
      <main className='rs-my-8 cc w-full'>
        {children}
      </main>
    </>
  );
};
