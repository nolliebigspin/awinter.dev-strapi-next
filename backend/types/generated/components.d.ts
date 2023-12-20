import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
    icon: 'archive';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['BLANK', 'SELF']> &
      Attribute.Required &
      Attribute.DefaultTo<'SELF'>;
  };
}

export interface SegmentsCta extends Schema.Component {
  collectionName: 'components_segments_ctas';
  info: {
    displayName: 'CTA';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    headline: Attribute.String & Attribute.Required;
    text: Attribute.RichText;
    claim: Attribute.String;
    button: Attribute.Component<'atoms.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.button': AtomsButton;
      'segments.cta': SegmentsCta;
    }
  }
}
