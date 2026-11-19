import baseImprovement from '../payload/improvement';
import { IImprovement } from '../component/improvement/IImprovement';

/**
 * 인프라 직무용: 네트워크·인프라 원인이 드러나는 메일 발송 개선을 가장 앞에 둔다.
 * 각 사례 내용은 기본 payload와 동일하게 유지한다.
 */
const order = [
  '대량 메일 발송 성능 개선',
  '강우량 조회 API 성능 개선',
  'LLM API 호출 비동기 전환',
];

const improvement: IImprovement.Payload = {
  ...baseImprovement,
  list: [...baseImprovement.list].sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title)),
};

export default improvement;
