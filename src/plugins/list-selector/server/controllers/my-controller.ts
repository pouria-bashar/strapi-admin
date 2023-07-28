import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('list-selector')
      .service('myService')
      .getWelcomeMessage();
  },
});
