export type PageProps = {
  children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

const Page = ({children}:PageProps) => {
  return children;
};

export default Page;