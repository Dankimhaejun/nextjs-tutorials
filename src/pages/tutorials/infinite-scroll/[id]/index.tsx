import NotFound from '@/components/common/not-found';
import {NextPage} from 'next';
import dynamic from 'next/dynamic';

interface PageProps {
  id: string;
}

const Page: NextPage<PageProps> = (props: PageProps) => {
  const InfiniteScroll = dynamic(async () => {
    try {
      const Dynamic = await import(`@/components/tutorials/infinite-scroll/${props.id}`);
      return Dynamic;
    } catch {
      return NotFound;
    }
  });

  return <InfiniteScroll />;
};

export default Page;

export const getServerSideProps = ({params}: {params: PageProps}) => {
  const id = params.id;
  return {
    props: {id},
  };
};