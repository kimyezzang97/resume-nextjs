import baseProfile from '../payload/profile';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  ...baseProfile,
  name: { title: '김예찬', small: '인프라 엔지니어' },
};

export default profile;
