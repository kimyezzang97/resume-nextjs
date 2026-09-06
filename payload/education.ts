import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,
  list: [
    {
      title: '항해플러스 백엔드 · 팀스파르타',
      subTitle: '테스트 코드, JPA, Redis, 객체 지향, 동시성',
      startedAt: '2025-04',
      endedAt: '2025-06',
    },
    {
      title: '한양사이버대학교',
      subTitle: '컴퓨터공학과',
      startedAt: '2023-03',
      endedAt: '2025-02',
    },
    {
      title: 'Java 웹 개발자 과정 ',
      subTitle: '한국소프트웨어인재개발원',
      startedAt: '2021-12',
      endedAt: '2022-06',
    },
    {
      title: '전주비전대학교',
      subTitle: '국제협력기술과(해외선교)',
      startedAt: '2016-03',
      endedAt: '2018-02',
    },
    {
      title: '군포e비즈니스고등학교',
      subTitle: '전문계열(e-디지털콘텐츠과)',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
