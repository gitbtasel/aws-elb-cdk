import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import AwsElbCdk = require('../lib/aws-elb-cdk-stack');

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AwsElbCdk.AwsElbCdkStack(app, 'AwsElbCdkStack');
  // THEN
  expectCDK(stack).to(matchTemplate({
    "Resources": {}
  }, MatchStyle.EXACT))
});
