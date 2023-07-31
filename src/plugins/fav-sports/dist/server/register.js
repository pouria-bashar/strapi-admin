"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    // registeration phase
    strapi.customFields.register({
        name: 'sports',
        plugin: 'fav-sports',
        type: 'string'
    });
};
