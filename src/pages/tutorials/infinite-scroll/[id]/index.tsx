import NotFound from '@/components/common/not-found';
import dynamic from 'next/dynamic';

export default function Page(props: {id: string}) {
  console.log('props', props);
  const InfiniteScroll = dynamic(async () => {
    try {
      const Dynamic = await import(`@/components/tutorials/infinite-scroll/${props.id}`);
      return Dynamic;
    } catch {
      return NotFound;
    }
  });
  console.log('InfiniteScroll', InfiniteScroll);
  return <InfiniteScroll />;
}

export const getServerSideProps = ({params}: {params: {id: string}}) => {
  const id = params.id;
  return {
    props: {id},
  };
};
