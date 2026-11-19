import BasePayload, { ResumePayload } from '../payload';

import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import improvement from './improvement';
import { _global } from './_global';

/**
 * 인프라 직무 지원용 이력서 (/infra)
 *
 * 학력·자격증·기타 등 공통 항목은 기본 payload를 그대로 사용하고,
 * 직무에 따라 강조점이 달라지는 항목만 이 폴더에서 덮어쓴다.
 */
const InfraPayload: ResumePayload = {
  ...BasePayload,
  profile,
  introduce,
  skill,
  experience,
  improvement,
  _global,
};

export default InfraPayload;
