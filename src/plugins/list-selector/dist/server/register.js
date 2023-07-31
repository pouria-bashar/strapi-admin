"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    strapi.customFields.register({
        name: "mylist",
        plugin: "list-selector",
        type: "string",
    });
};
