import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '유니온시스템즈',
      positions: [
        {
          title: '데이터아크팀/선임연구원, Web Developer',
          startedAt: '2026-03',
          endedAt: '2026-09',
          descriptions: [
            '데이터 표준화 솔루션 커스텀 개발 및 기술 환경 업그레이드',
            '표준단어·도메인·표준용어 관리 기능 개발',
            'Ext JS 기반 관리 화면 수정 및 Spring Boot 백엔드 API 연동',
          ],
          skillKeywords: ['Java', 'Spring Boot', 'MyBatis', 'PostgreSQL', 'Ext JS'],
        },
      ],
    },
    {
      title: '토라웨어',
      positions: [
        {
          title: 'DX사업부/사원, Web Developer',
          startedAt: '2025-02',
          descriptions: [
            '기업 내부 웹 시스템 개발 및 운영 사이트 유지보수',
            'Spring Boot 기반 설문조사·공지사항 API 개발 및 Vue 화면 연동',
            '삼성SDS LLM 팀과 협업하여 AI 기능 및 통합검색 인덱싱 연동',
            'Spring·JSP 기반 웹 서비스 유지보수',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Spring',
            'JSP',
            'jQuery',
            'MyBatis',
            'PostgreSQL',
            'Vue',
          ],
          endedAt: '2026-03',
        },
      ],
    },
    {
      title: '한국아이오티기술원',
      positions: [
        {
          title: '플랫폼사업부/연구원, Backend Developer',
          startedAt: '2022-09',
          descriptions: [
            'B2G 재난 예·경보 플랫폼 백엔드 API 개발 및 유지보수',
            'PHP 시스템의 Spring Boot 전환',
            '외부 장비 및 공공 시스템 연동 개발',
            'GS 인증 대응 및 보안 기능 개선',
            'Linux 서버 초기 세팅 및 애플리케이션 실행 환경 구성',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'MyBatis',
            'MariaDB',
            'TCP Socket',
            'MQTT',
            'Linux',
          ],
          endedAt: '2024-01',
        },
      ],
    },
  ],
};

export default experience;
