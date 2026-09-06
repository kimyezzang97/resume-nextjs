import { ISkill } from '../component/skill/ISkill';

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    {
      category: 'Languages',
      items: [{ title: 'Java' }, { title: 'JavaScript' }],
    },
    {
      category: 'Frameworks & Libraries',
      items: [{ title: 'Spring Boot' }, { title: 'JPA' }, { title: 'MQTT' }],
    },
    {
      category: 'Infrastructure & Databases',
      items: [{ title: 'RDBMS' }, { title: 'AWS' }, { title: 'Redis' }, { title: 'Docker' }],
    },
  ],
};

export default skill;
