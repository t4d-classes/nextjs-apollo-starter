import { App } from '../components/App';
import { Message } from '../components/Message';

export default function ClientOnlyPage(props) {
  return (
    <App>
      Client Rendered: <Message />
    </App>
  );
}
