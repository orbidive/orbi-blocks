<?php
/**
 * Plugin Name:       Orbi Blocks
 * Description:       Collection of customizable blocks for the WordPress Gutenberg Block Editor to create a great website.
 * plugin URI:
 * Version:           0.0.4
 * Author:            Orbidive
 * Author URI:
 * License:           GPLv3
 * License URI:       https://opensource.org/licenses/GPL-3.0
 * Text Domain:       orbi-blocks
 **/

 if (!defined('ABSPATH') ) : exit(); endif; // no direct access allowed

 define('ORBI_BLOCKS_VERSION', '0.0.4');
 define('ORBI_BLOCKS_FILE', __FILE__);
 define('ORBI_BLOCKS_DIR_PATH', plugin_dir_path(ORBI_BLOCKS_FILE));
 define('ORBI_BLOCKS_DIR_URL', plugin_dir_url(ORBI_BLOCKS_FILE));
 define('ORBI_BLOCKS_MIN_PHP_VERSION', '5.4');

 /**
  * unique category
  */
 function orbi_blocks_categories($categories)
 {
     // category at the beginning
     $custom_category = array(
         'slug'  => 'orbi-blocks',
         'title' => __('Orbi Blocks', 'orbi-blocks'),
     );
 
     // Check if the category already exists and remove it
     $categories = array_filter(
         $categories,
         function ($category) {
             return 'orbi-blocks' !== $category['slug'];
         }
     );
 
     // Merge the category at the beginning
     array_unshift($categories, $custom_category);
 
     return $categories;
 }

 require ORBI_BLOCKS_DIR_PATH . 'blocks/compile-style.php';

 // Categories
 if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
     add_filter('block_categories_all', 'orbi_blocks_categories', PHP_INT_MAX );
 } else {
     add_filter('block_categories', 'orbi_blocks_categories', PHP_INT_MAX );
 }
 
 /**block scripts*/
 add_action( 'enqueue_block_editor_assets', function(){
     wp_enqueue_script(
         'orbi-blocks-editor-script',
         ORBI_BLOCKS_DIR_URL .('build/index.js'),
         [
             'wp-i18n', 
             'wp-element', 
             'wp-blocks', 
             'wp-components', 
             'wp-editor', 
             'wp-data', 
             'wp-plugins',
         ],
         ORBI_BLOCKS_VERSION,
         true
     ); 
 
    wp_localize_script(
        'orbi-blocks-editor-script',
        'js_data',
        array(
            'placeholder_url' => plugins_url( 'assets/images/placeholder.png', __FILE__ ),
        )
    );
 } );
 
 add_action( 'init', function(){
     wp_enqueue_style(
         'orbi-blocks-editor-style',
         ORBI_BLOCKS_DIR_URL .('assets/css/style.css'), 
         array(), 
         ORBI_BLOCKS_VERSION
     ); 
 } );
 
 add_action( 'init', function () {
    register_block_type(
         'orbi-blocks/team',
         [
             'style' => 'orbi-blocks-editor-style',
             'editor-script' => 'orbi-blocks-editor-script',
         ]
    );
    register_block_type(
		'orbi-blocks/testimonial',
		[
			'style' => 'orbi-blocks-editor-style',
			'editor-script' => 'orbi-blocks-editor-script',
		]
	);
    register_block_type(
		'orbi-blocks/service',
		[
			'style' => 'orbi-blocks-editor-style',
			'editor-script' => 'orbi-blocks-editor-script',
		]
	);
    register_block_type(
		'orbi-blocks/cta',
		[
			'style' => 'orbi-blocks-editor-style',
			'editor-script' => 'orbi-blocks-editor-script',
		]
	);
    register_block_type(
		'orbi-blocks/price-table',
		[
			'style' => 'orbi-blocks-editor-style',
			'editor-script' => 'orbi-blocks-editor-script',
		]
	);
 } );


 function orbi_block_assets(){
    // Styles.
	wp_enqueue_style(
		'orbi-blocks-all-min',
		ORBI_BLOCKS_DIR_URL .('assets/css/all.min.css'), 
        array(), 
        ORBI_BLOCKS_VERSION
	);
	wp_enqueue_style(
		'orbi-blocks-fonticonpicker-base',
		ORBI_BLOCKS_DIR_URL .('assets/css/fonticonpicker.base-theme.react.css'),
        array(), 
        ORBI_BLOCKS_VERSION
	); 
	wp_enqueue_style(
		'orbi-blocks-fonticonpicker-material',
		ORBI_BLOCKS_DIR_URL .('assets/css/fonticonpicker.material-theme.react.css'), 
        array(), 
        ORBI_BLOCKS_VERSION
	); 
}
// Hook: Frontend assets.
add_action('enqueue_block_assets', 'orbi_block_assets');