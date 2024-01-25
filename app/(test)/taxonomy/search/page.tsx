export type PageProps = {
  children: React.ReactNode;
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const Page = ({children}:PageProps) => {
  return children;
};

export default Page;