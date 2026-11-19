import { ISkill } from '../component/skill/ISkill';

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    {
      category: 'Infrastructure & Cloud',
      items: [
        { title: 'Linux' },
        { title: 'AWS' },
        { title: 'Amazon SES' },
        { title: 'Docker' },
      ],
    },
    {
      category: 'Network & Protocols',
      items: [
        { title: 'TCP Socket' },
        { title: 'MQTT' },
        { title: 'SMTP' },
        { title: 'HTTP/REST' },
      ],
    },
    {
      category: 'Databases',
      items: [{ title: 'MariaDB' }, { title: 'PostgreSQL' }, { title: 'Redis' }],
    },
    {
      category: 'Languages & Frameworks',
      items: [{ title: 'Java' }, { title: 'Spring Boot' }],
    },
  ],
};

export default skill;
