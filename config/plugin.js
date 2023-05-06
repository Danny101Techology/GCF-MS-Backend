module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("DO_SPACES_KEY"),
      secretAccessKey: env("DO_SPACES_SECRET"),
      region: env("DO_SPACES_REGION"),
      params: {
        Bucket: env("DO_SPACES_BUCKET"),
      },
      baseUrl: `https://${env("DO_SPACES_BUCKET")}.${env("DO_SPACES_REGION")}.digitaloceanspaces.com`,
    },
  },
});
