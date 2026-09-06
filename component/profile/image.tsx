import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-right text-center">
      <img
        style={{ width: '180px', maxWidth: '100%', height: 'auto' }}
        className="img-fluid rounded"
        src={src}
        alt="Profile"
      />
    </div>
  );
}
