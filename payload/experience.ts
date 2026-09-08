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
          summary: '코오롱 데이터 솔루션 커스텀 개발',
          startedAt: '2026-03',
          endedAt: '2026-09',
          descriptions: [
            '코오롱 데이터웨어 META# 솔루션 업그레이드',
            '기존 소스 구조와 주요 기능을 분석하고 신규 버전에 맞춰 코드 개선',
            '전사 표준단어 관리 로직의 테스트 코드 작성',
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
          summary: '삼성전자 내부 시스템 개발 및 경매 사이트 운영',
          startedAt: '2025-02',
          descriptions: [
            '삼성전자 내부 설문조사 시스템 개발',
            '삼성SDS LLM 팀과 협업해 AI 기능 연동',
            'SonarQube 정적 분석을 통한 코드 품질 점검',
            '화동옥션 사이트 유지보수',
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
          summary: 'B2G 재난 예경보 플랫폼 백엔드 API 개발 및 유지보수',
          startedAt: '2022-09',
          descriptions: [
            'PHP 프로젝트를 Spring Boot 기반 REST API로 전환',
            '외부 장비 및 공공 시스템 연동 개발',
            'GS 인증 1등급 취득',
            'Linux 서버 초기 세팅 및 실행 환경 구성',
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
