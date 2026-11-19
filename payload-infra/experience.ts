import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '에코벨',
      positions: [
        {
          title: 'IoT 서비스 인프라 운영 및 개발',
          summary: 'IoT 서비스 서버·스토리지 운영 및 웹 서비스 개발',
          startedAt: '2026-10',
          descriptions: [
            '데이터센터 서버 관리',
            'NAS 관리',
            'React 프론트엔드 및 Django 백엔드 개발',
          ],
          skillKeywords: ['NAS', 'React', 'Django'],
        },
      ],
    },
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
          skillKeywords: ['Java', 'Spring Boot', 'PostgreSQL'],
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
          endedAt: '2026-03',
          descriptions: [
            '화동옥션 대량 메일 발송 개선: SES 리전 이전 및 SMTP 연결 재사용으로 발송 시간 95.9% 단축',
            '메일 발송 중 SMTP 연결 끊김 시 재연결·연속 실패 시 중단 처리 추가',
            '삼성전자 내부 설문조사 시스템 개발 및 삼성SDS LLM 연동',
            'LLM 호출을 DB 작업 큐 기반 비동기 처리로 전환',
            'SonarQube 정적 분석을 통한 코드 품질 점검',
          ],
          skillKeywords: ['Amazon SES', 'SMTP', 'Java', 'Spring Boot', 'PostgreSQL'],
        },
      ],
    },
    {
      title: '한국아이오티기술원',
      positions: [
        {
          title: '플랫폼사업부/연구원, Backend Developer',
          summary: 'B2G 재난 예경보 플랫폼 서버 구성 및 외부 시스템 연동',
          startedAt: '2022-09',
          endedAt: '2024-01',
          descriptions: [
            'Linux 서버 초기 세팅 및 애플리케이션 실행 환경 구성',
            'Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성',
            'TCP Socket·MQTT 기반 외부 장비 및 공공 시스템 연동',
            '약 2,600만 행 강우량 조회를 인덱스·쿼리 개선으로 9분 45초 → 0.8초 단축',
            'DB 주요 정보 SEED 암호화 적용 및 GS 인증 1등급 취득',
            'PHP 프로젝트를 Spring Boot 기반 REST API로 전환',
          ],
          skillKeywords: ['Linux', 'TCP Socket', 'MQTT', 'MariaDB', 'Java', 'Spring Boot'],
        },
      ],
    },
    {
      title: '디아이티 (노루그룹 계열사)',
      positions: [
        {
          title: 'IT 헬프데스크',
          summary: '노루그룹 IT 헬프데스크 운영 지원',
          startedAt: '2021-06',
          endedAt: '2021-11',
          descriptions: [
            '노루그룹 임직원 대상 PC·소프트웨어 문제 원격 지원',
            '랜선 제작 및 사내 네트워크 연결 지원',
            '프린터 설치 및 설정',
            'PC 포맷 및 운영체제 설치',
          ],
        },
      ],
    },
  ],
};

export default experience;
