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

export interface SegmentsAnchor extends Schema.Component {
  collectionName: 'components_segments_anchors';
  info: {
    displayName: 'Anchor';
    icon: 'apps';
  };
  attributes: {
    anchor: Attribute.String & Attribute.Required;
  };
}

export interface SegmentsBlocks extends Schema.Component {
  collectionName: 'components_segments_blocks';
  info: {
    displayName: 'Block';
    icon: 'archive';
    description: '';
  };
  attributes: {
    block: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.button': AtomsButton;
      'segments.anchor': SegmentsAnchor;
      'segments.blocks': SegmentsBlocks;
    }
  }
}
