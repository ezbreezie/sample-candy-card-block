<?php
/**
 * Plugin Name:       Candy Card Block
 * Description:       Pretty cute sample candy card block. 
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Bria Mears, The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       candy-card-block
 *
 * @package           candy-card-block
 */


function candy_card_block_block_init() {

    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

	register_block_type( __DIR__ . '/build' );

}
add_action( 'init', 'candy_card_block_block_init' );
