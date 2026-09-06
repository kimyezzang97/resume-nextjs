import favicon from '../asset/favicon.ico';
import { IGlobal } from '../component/common/IGlobal';

const title = '김예찬 | 백엔드 개발자 이력서';
const description =
  '기존 시스템을 분석하고 외부 시스템을 안정적으로 연결하는 백엔드 개발자 김예찬입니다.';
export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: 'https://kimyezzang97.github.io/resume-nextjs',
      profile: { firstName: '예찬', lastName: '김', username: 'kimyezzang97', gender: 'male' },
    },
  },
};
