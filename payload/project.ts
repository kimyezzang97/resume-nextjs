import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '코오롱 DataWare(META#) 솔루션 업그레이드',
      where: '유니온시스템즈',
      startedAt: '2026-03',
      endedAt: '2026-08',
      descriptions: [
        {
          content: 'DataWare 기술 환경 업그레이드에 따른 기존 기능 분석 및 코드 수정',
        },
        {
          content: 'Ext JS 기반 관리 화면 개선 및 Spring Boot API 연동',
        },
        {
          content: '업무용어 관리 기능 개발',
        },
      ],
    },
    {
      title: '삼성전자 Next MOSAIC 설문조사 시스템',
      where: '토라웨어',
      startedAt: '2025-05',
      endedAt: '2026-03',
      descriptions: [
        {
          content: 'Spring Boot 기반 설문조사 API 개발 및 Vue 화면 연동',
        },
        {
          content: '삼성SDS LLM 팀과 협업한 AI API 연동 및 통합검색 인덱싱 연계',
        },
        {
          content: 'SonarQube 정적 분석을 통한 코드 품질 점검',
        },
      ],
    },
    {
      title: '화동닷컴·화동옥션 유지보수',
      where: '토라웨어',
      startedAt: '2025-02',
      endedAt: '2025-04',
      descriptions: [
        {
          content: '운영 요청에 따른 Spring·JSP 기반 화면 및 기능 유지보수',
        },
        {
          content: '마케팅 메일의 HTML 콘텐츠 및 발송 로직 수정',
        },
      ],
    },
    {
      title: '재난 예·경보 플랫폼 GS 인증 취득',
      where: '한국아이오티기술원',
      startedAt: '2023-07',
      endedAt: '2023-08',
      descriptions: [
        {
          content: 'GS 인증 시험에서 발견된 API·예외 처리 결함 수정 및 재검증',
        },
        {
          content: 'DB 주요 정보에 SEED 암호화 적용 및 암·복호화 로직 수정',
        },
        {
          content: 'Windows Scheduler를 활용한 프로그램 자동 실행 환경 구성',
        },
      ],
    },
    {
      title: '재난 예·경보 플랫폼 개발 및 유지보수',
      where: '한국아이오티기술원',
      startedAt: '2022-09',
      endedAt: '2024-01',
      descriptions: [
        {
          content: 'Java TCP Socket 기반 전광판 통신 구현 및 외부 전광판 연동',
        },
        {
          content: 'XML 기반 CAP 프로토콜을 통한 외부 재난 방송 시스템 연동',
        },
        {
          content: '공주시 버스정보시스템(BIS) 연동',
        },
        {
          content: '외부 SMS 서비스(KT 스마트메시지·인포뱅크) 연동',
        },
        {
          content: 'Linux 서버 초기 세팅 및 애플리케이션 실행 환경 구성',
        },
      ],
    },
    {
      title: 'PHP 시스템의 Spring Boot 전환',
      where: '한국아이오티기술원',
      startedAt: '2022-09',
      endedAt: '2022-12',
      descriptions: [
        {
          content: '재난 예·경보 플랫폼의 PHP 백엔드를 Java·Spring Boot 기반 REST API로 전환',
        },
      ],
    },
  ],
};

export default project;
