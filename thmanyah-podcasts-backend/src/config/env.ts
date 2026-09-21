import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: Number(process.env.PORT ?? 3001),
  env: process.env.NODE_ENV ?? 'development',
  awsRegion: process.env.AWS_REGION ?? 'local',
  dynamoEndpoint: process.env.DYNAMODB_ENDPOINT,
  itunesProviderUrl: process.env.ITUNES_URL,
  tablePodcasts: process.env.TABLE_PODCASTS ?? 'Podcasts',
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? 'LOCAL',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? 'LOCAL'
  }
} as const;
