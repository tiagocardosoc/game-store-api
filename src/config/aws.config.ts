import AWS from 'aws-sdk';

export const aws = new AWS.SES({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION_AWS
})