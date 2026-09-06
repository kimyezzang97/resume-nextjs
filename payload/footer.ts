import { version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';

const footer: IFooter.Payload = {
  version,
  github: 'https://github.com/kimyezzang97/resume-nextjs',
};

export default footer;
