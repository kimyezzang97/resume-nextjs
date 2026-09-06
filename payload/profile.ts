import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: { title: '김예찬', small: '백엔드 개발자' },
  contact: [
    { title: 'wwww0510@naver.com', link: 'mailto:wwww0510@naver.com', icon: faEnvelope },
    { title: 'Please contact me by email', icon: faPhone },
    { title: 'github.com/kimyezzang97', link: 'https://github.com/kimyezzang97', icon: faGithub },
    { title: '1997년생 · 남', icon: faUser },
  ],
  notice: { title: '' },
};

export default profile;
