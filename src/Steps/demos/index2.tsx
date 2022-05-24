import React from 'react';
import Steps from '..';
import Step from '../Step';
/**
 * transform: true
 */
export default function MenuDemos1() {
  return (
    <Steps current={2}>
      <Step title="Waiting" subTitle="subtitle" description="this is description" />
      <Step title="In Process" subTitle="subtitle" description="this is description" />
      <Step title="Finished" subTitle="subtitle" description="this is description" />
    </Steps>
  );
}
