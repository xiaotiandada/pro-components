//@ts-ignore
import Previewer from 'dumi/theme-original/builtins/Previewer';
import LazyLoad from 'react-lazy-load';
import DemoProvider from '../../components/DemoProvider';

const Page: React.FC = (props) => (
  <DemoProvider>
    <LazyLoad offset={300}>
      <Previewer {...props} />
    </LazyLoad>
  </DemoProvider>
);

export default Page;