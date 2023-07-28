import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'sports',
    plugin: 'fav-sports',
    type: 'string'
  })
};
