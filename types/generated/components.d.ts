import type { Schema, Attribute } from '@strapi/strapi';

export interface FavoriteSportsFavoriteSports extends Schema.Component {
  collectionName: 'components_favorite_sports_favorite_sports';
  info: {
    displayName: 'Favorite Sports';
    icon: 'briefcase';
  };
  attributes: {
    SportPicker: Attribute.String &
      Attribute.CustomField<'plugin::fav-sports.sports'>;
  };
}

export interface FooterElementsFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Terms: Attribute.String;
    Conditions: Attribute.RichText;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'favorite-sports.favorite-sports': FavoriteSportsFavoriteSports;
      'footer-elements.footer': FooterElementsFooter;
      'hero.hero': HeroHero;
    }
  }
}
