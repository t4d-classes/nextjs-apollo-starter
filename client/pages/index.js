import { App } from '../components/App';
import { Message, MESSAGE_QUERY } from '../components/Message';
import { initializeApollo } from '../lib/apolloClient';

const IndexPage = () => (
  <App>
    Server Rendered: <Message />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MESSAGE_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
