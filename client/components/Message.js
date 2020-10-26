import { gql, useQuery } from '@apollo/client';
import { ErrorMessage } from './ErrorMessage';

export const MESSAGE_QUERY = gql`
  query Message {
    message
  }
`;

export function Message() {
  const { data, loading, error } = useQuery(MESSAGE_QUERY);

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;

  const { message } = data;

  return (
    <section>
      <p>{message}</p>
      <style jsx>{`
        section {
          padding: 20px;
        }
        p {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  );
}
