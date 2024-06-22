// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions =  {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg|png|jpg|jpeg|gif)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;
