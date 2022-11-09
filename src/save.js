/**
 * Save function
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './style.scss';
import './editor.scss';


export default function save({ attributes }) {
    const cardImage = ( src, alt ) => {
        if( ! src ) {
            return null;
        }

        if( alt ) {
            return (
                <img 
                    className="candy-card-image" 
                    src={ src }
                    alt={ alt }
                /> 
            );
        } else {
            return (
                <img 
                    className="candy-card-image" 
                    src={ src }
                    alt=""
                    aria-hidden="true"
                /> 
            );
        }
    };

    return (
        <div className="candy-card">
            { cardImage(attributes.imageUrl, attributes.imageAlt) }
            <div className="candy-card-content">
                <h3 className="candy-card-title">{ __( attributes.title, 'candyshop' ) }</h3>
                <div className="candy-card-body">
                    { __( attributes.body, 'candyshop' ) }
                </div>
            </div>
        </div>
    );
}
