import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "mylist",
    plugin: "list-selector",
    type: "string",
  });
};
