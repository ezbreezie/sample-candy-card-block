/**
 * Edit function
 *
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText, MediaUpload, PlainText } from '@wordpress/block-editor';

// Destructure block vars
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;


import './style.scss';
import './editor.scss';


export default function Edit({ attributes, className, setAttributes }) {
    const getImageButton = ( openEvent ) => {
        if( attributes.imageUrl ) {
            return (
                <img 
                    src={ attributes.imageUrl }
                    onClick={ openEvent }
                    className="candy-card-image"
                />
            );
        }
        else {
            return (
                <div className="button-container">
                    <Button 
                        onClick={ openEvent }
                        className="button button-large"
                    >
                        Select a Sweet Image
                    </Button>
                </div>
            );
        }
    };


	return (
        <div { ...useBlockProps() }>
            <MediaUpload
                onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
                type="image"
                value={ attributes.imageID }
                render={ ({ open }) => getImageButton(open) }
                className="candy-card-image"
            />
            <PlainText
                onChange={ content => setAttributes({ title: content }) }
                value={ attributes.title }
                placeholder={ __( 'Candy Card Header', 'candy-card-block' ) }
                className="candy-card-title"
            />
            <RichText
                onChange={ content => setAttributes({ body: content }) }
                value={ attributes.body }
                className="candy-card-body"
                placeholder={ __( 'Bonbon wafer cheesecake muffin macaroon. Icing gummies gummies cookie cheesecake.', 'candy-card-block' ) }
            />
        </div>
	);
}
