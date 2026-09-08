import { IImprovement } from '../component/improvement/IImprovement';

const improvement: IImprovement.Payload = {
  disable: false,
  list: [
    {
      company: '화동옥션(토라웨어)',
      title: '대량 메일 발송 성능 개선',
      summary: '약 40,000건 발송 시간 23시간 14분 → 57분 13초, 95.9% 단축',
      sections: [
        {
          title: '문제',
          descriptions: ['약 40,000명에게 뉴스레터를 순차 발송하는 데 약 23시간 14분 소요'],
        },
        {
          title: '원인',
          descriptions: [
            '한국 실행 환경에서 미국 오리건 리전의 SES를 사용해 메일마다 장거리 네트워크 왕복 발생',
            '메일 한 건마다 SMTP 연결·인증·종료를 반복해 발송 건수만큼 연결 생성',
          ],
        },
        {
          title: '해결',
          descriptions: [
            '기존 코드를 유지한 채 SES를 서울 리전으로 변경해 인프라 개선 효과를 먼저 측정',
            '서울 리전을 고정한 뒤 SMTP Transport를 배치 전체에서 재사용해 코드 개선 효과를 분리 측정',
            'JavaMail의 isConnected()로 연결 상태를 확인하고 연결이 끊어진 경우에만 재연결',
          ],
        },
        {
          title: '측정 결과',
          descriptions: [
            '리전 변경: 약 23시간 14분 → 약 2시간 1분, 91.3% 단축·처리량 약 11.5배 향상',
            '연결 재사용: 약 2시간 1분 → 약 57분 13초, 52.6% 추가 단축·처리량 약 2.11배 향상',
            '전체 개선: 약 23시간 14분 → 약 57분 13초, 95.9% 단축·처리량 약 24.3배 향상',
          ],
        },
      ],
      notes: [
        '기존에는 SMTP 연결이 끊어진 상태에서도 반복문이 계속 실행되었으나, 최대 3회 재연결 후 연속 실패 시 작업을 중단하도록 개선',
      ],
      technologies: ['Java 8', 'JavaMail 1.6.7', 'Amazon SES', 'SMTP'],
    },
  ],
};

export default improvement;
