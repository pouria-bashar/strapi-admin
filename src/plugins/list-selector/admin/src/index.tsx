import { prefixPluginTranslations } from '@strapi/helper-plugin';
import UrlImage from './components/Select';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import mutateEditViewHook from "./mutateEditViewHook";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.addFields({
      Component: UrlImage,
      type: pluginId
    });

    app.registerPlugin(plugin);

    app.customFields.register({
      name: name,
      pluginId: 'list-selector',
      type: 'string',
      intlLabel: {
        id: 'list-selector.lable',
        defaultMessage: 'Helllo Message'
      },
      intlDescription: {
        id: 'list-selector.description',
        defaultMessage: '!! message'
      },
       components: {
          Input: async () => {
          const component = await import(/* webpackChunkName: "[request]" */ './components/Select');

          return component;
        },
       },
       options: {

       }
    })
  },

  bootstrap(app: any) {
    app.registerHook(
      "Admin/CM/pages/EditView/mutate-edit-view-layout",
      mutateEditViewHook
    )

     app.addSettingsLink('global', {
      intlLabel: {
        id: `plugin.name.${pluginId}`,
        defaultMessage: 'List Selector Settlings',
      },
      id: 'list-selector',
      to: '/settings/list-selector',

      async Component() {
        const component = await import(
          /* webpackChunkName: "i18n-settings-page" */ './pages/HomePage'
        );

        return component;
      },
    });
  },

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};