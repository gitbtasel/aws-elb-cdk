#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsElbCdkStack } from '../lib/aws-elb-cdk-stack';

const app = new cdk.App();
new AwsElbCdkStack(app, 'AwsElbCdkStack');

