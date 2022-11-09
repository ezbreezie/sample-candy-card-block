/**
 * Registers the Candy Card block
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Dependencies
 */
import Edit from './edit';
import save from './save';
import blockData from './block.json';


registerBlockType( blockData.name, {
    attributes: {
        title: {
            source: 'text',
            selector: '.candy-card-title'
        },
        body: {
            type: 'array',
            source: 'children',
            selector: '.candy-card-body'
        },
        imageAlt: {
            attribute: 'alt',
            selector: '.candy-card-image'
        },
        imageUrl: {
            attribute: 'src',
            selector: '.candy-card-image'
        }
    },
	edit: Edit,
	save
} );
