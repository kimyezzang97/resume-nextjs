import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import improvement from './improvement';
import openSource from './openSource';
import presentation from './presentation';
import education from './education';
import article from './article';
import etc from './etc';
import license from './license';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';
import { IImprovement } from '../component/improvement/IImprovement';
import { IPresentation } from '../component/presentation/IPresentation';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  experience,
  improvement,
  presentation,
  article,
  education,
  license,
  etc,
  footer,

  _global,
};

export interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  improvement: IImprovement.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  license: IEtc.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default Payload;
