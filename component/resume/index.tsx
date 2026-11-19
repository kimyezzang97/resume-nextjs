/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../education';
import { Etc } from '../etc';
import { Experience } from '../experience';
import { Improvement } from '../improvement';
import { Footer } from '../footer';
import { Introduce } from '../introduce';
import { OpenSource } from '../openSource';
import { Presentation } from '../presentation';
import { Profile } from '../profile';
import { Skill } from '../skill';
import { Style } from '../common/Style';
import { Article } from '../article';
import { ResumePayload } from '../../payload';

export function ResumePage({ payload }: { payload: ResumePayload }) {
  return (
    <>
      <NextSeo {...payload._global.seo} />
      <Head>
        <title>{payload._global.headTitle}</title>
        <link rel="shortcut icon" href={payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={payload.profile} />
        <Introduce.Component payload={payload.introduce} />
        <Skill.Component payload={payload.skill} />
        <Experience.Component payload={payload.experience} />
        <Improvement.Component payload={payload.improvement} />
        <OpenSource.Component payload={payload.openSource} />
        <Presentation.Component payload={payload.presentation} />
        <Article.Component payload={payload.article} />
        <Education.Component payload={payload.education} />
        <Etc.Component payload={payload.license} />
        <Etc.Component payload={payload.etc} />
        <Footer.Component payload={payload.footer} />
      </Container>
    </>
  );
}
