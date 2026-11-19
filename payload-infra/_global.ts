import favicon from '../asset/favicon.ico';
import { IGlobal } from '../component/common/IGlobal';

const title = '김예찬 | 인프라 엔지니어 이력서';
const description =
  '서버 실행 환경을 구성하고, 네트워크와 데이터베이스 병목을 측정해 개선하는 엔지니어 김예찬입니다.';
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
      url: 'https://kimyezzang97.github.io/resume-nextjs/infra',
      profile: { firstName: '예찬', lastName: '김', username: 'kimyezzang97', gender: 'male' },
    },
  },
};
