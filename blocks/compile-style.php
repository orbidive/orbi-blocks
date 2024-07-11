<?php 
 if (!defined('ABSPATH') ) : exit(); endif; // no direct access allowed

if (!function_exists('orbi_compile_style')):
    function orbi_compile_style($options) {
        $selector = $options['selector'];
        $type = $options['type'];
        // Check if $type is an object
        if ( ( !is_array($type) || empty($type) ) && ( !array_key_exists('selector', $options) || !array_key_exists('type', $options))) {
            error_log('Invalid type argument. Expected an array.');
            return ''; // or handle the error in some way
        }
        $allCss = array_reduce(array_keys($type), function($css, $property) use ($type) {
            $value = $type[$property];
            // Handle special cases or expressions
            if ($property === 'padding') {
                $padding = '';
                if (!empty($value['top']) && !empty($value['right']) && !empty($value['bottom']) && !empty($value['left'])) {
                    $padding = "padding: {$value['top']}{$value['unit']} {$value['right']}{$value['unit']} {$value['bottom']}{$value['unit']} {$value['left']}{$value['unit']}; ";
                } else {
                    if (!empty($value['top'])) {
                        $padding .= "padding-top: {$value['top']}{$value['unit']}; ";
                    }
                    if (!empty($value['right'])) {
                        $padding .= "padding-right: {$value['right']}{$value['unit']}; ";
                    }
                    if (!empty($value['bottom'])) {
                        $padding .= "padding-bottom: {$value['bottom']}{$value['unit']}; ";
                    }
                    if (!empty($value['left'])) {
                        $padding .= "padding-left: {$value['left']}{$value['unit']}; ";
                    }
                }
                return $css . $padding;
            } elseif ($property === 'margin') {
                $margin = '';
                if (!empty($value['top']) && !empty($value['right']) && !empty($value['bottom']) && !empty($value['left'])) {
                    $margin = "margin: {$value['top']}{$value['unit']} {$value['right']}{$value['unit']} {$value['bottom']}{$value['unit']} {$value['left']}{$value['unit']}; ";
                } else {
                    if (!empty($value['top'])) {
                        $margin .= "margin-top: {$value['top']}{$value['unit']}; ";
                    }
                    if (!empty($value['right'])) {
                        $margin .= "margin-right: {$value['right']}{$value['unit']}; ";
                    }
                    if (!empty($value['bottom'])) {
                        $margin .= "margin-bottom: {$value['bottom']}{$value['unit']}; ";
                    }
                    if (!empty($value['left'])) {
                        $margin .= "margin-left: {$value['left']}{$value['unit']}; ";
                    }
                }
                return $css . $margin;
            } elseif ($property === 'box-shadow') {
                $boxShadow = '';
                if (!empty($value['color']['color']) && ($value['color']['color'] !== 'undefined' ) && ($value['color']['enable'] !== false) && ($value['horizontal'] !== 'undefined') && ($value['vertical'] !== 'undefined') && ($value['blur']!== 'undefined') && ($value['spread']!== 'undefined') ) {
                    $boxShadow = "box-shadow: {$value['color']['color']} {$value['horizontal']}px {$value['vertical']}px {$value['blur']}px {$value['spread']}px ".($value['position'] === 'inset' ? 'inset' : '' ).'; ';
                } 
                return $css . $boxShadow;
            } elseif ($property === 'typography') {
                $typography = '';
                if ($value['enable'] === true ) {

                    if (array_key_exists('val' , $value['fontSize']['desktop'] )) {
                        if (($value['fontSize']['desktop']['val'] !== 'undefined' ) && !empty($value['fontSize']['desktop']['val'])) {
                            $typography .= "font-size: {$value['fontSize']['desktop']['val']}{$value['fontSize']['desktop']['unit']}; ";
                        }
                    }

                    if (array_key_exists('val' , $value['lineHeight']['desktop'] )) {
                        if (($value['lineHeight']['desktop']['val'] !== 'undefined' ) && !empty($value['lineHeight']['desktop']['val'])) {
                            $typography .= "line-height: {$value['lineHeight']['desktop']['val']}{$value['lineHeight']['desktop']['unit']}; ";
                        }
                    }

                    if (array_key_exists('val' , $value['letterSpacing']['desktop'] )) {
                        if (($value['letterSpacing']['desktop']['val'] !== 'undefined' ) && !empty($value['letterSpacing']['desktop']['val'])) {
                            $typography .= "letter-spacing: {$value['letterSpacing']['desktop']['val']}{$value['letterSpacing']['desktop']['unit']}; ";
                        }
                    }

                    if (array_key_exists('val' , $value['wordSpacing']['desktop'] )) {
                        if (($value['wordSpacing']['desktop']['val'] !== 'undefined' ) && !empty($value['wordSpacing']['desktop']['val'])) {
                            $typography .= "word-spacing: {$value['wordSpacing']['desktop']['val']}{$value['wordSpacing']['desktop']['unit']}; ";
                        }
                    }
                    if (($value['fontDecoration'] !== 'undefined' ) && !empty($value['fontDecoration'])) {
                        $typography .= "text-decoration: {$value['fontDecoration']}; ";
                    }

                    if ( is_array($value['fontFamily']) && array_key_exists('value' , $value['fontFamily'])) {
                        if (($value['fontFamily']['value'] !== 'undefined' ) && !empty($value['fontFamily']['value'])) {
                            $typography .= "font-family: {$value['fontFamily']['value']}; ";
                        }
                    }
                    if (($value['fontStyle'] !== 'undefined' ) && !empty($value['fontStyle'])) {
                        $typography .= "font-style: {$value['fontStyle']}; ";
                    }
                    if (($value['fontTransform'] !== 'undefined' ) && !empty($value['fontTransform'])) {
                        $typography .= "text-transform: {$value['fontTransform']}; ";
                    }
                    if (($value['fontWeight'] !== 'undefined' ) && !empty($value['fontWeight'])) {
                        $typography .= "font-weight: {$value['fontWeight']}; ";
                    }
                } 
                return $css . $typography;
            } elseif ($property === 'border') {
                $border = '';
                if (!empty($value['type']) && ($value['type'] !== 'undefined' ) && ($value['type'] !== 'default') && ($value['type'] !== 'none') ) {
                    if (!empty($value['color']['color']) && ($value['color']['color'] !== 'undefined' )) {
                        $border .= "border-color: {$value['color']['color']}; ";
                    } 
                    if (!empty($value['type']) && ($value['type'] !== 'undefined' )) {
                        $border .= "border-style: {$value['type']}; ";
                    } 
                    
                    if (!empty($value['width']['desktop']['top']) && ($value['width']['desktop']['top'] !== 'undefined')) {
                        $border .= "border-top-width: {$value['width']['desktop']['top']}{$value['width']['desktop']['unit']}; ";
                    }
                    if (!empty($value['width']['desktop']['right']) && ($value['width']['desktop']['right'] !== 'undefined')) {
                        $border .= "border-right-width: {$value['width']['desktop']['right']}{$value['width']['desktop']['unit']}; ";
                    }
                    if (!empty($value['width']['desktop']['bottom']) && ($value['width']['desktop']['bottom'] !== 'undefined')) {
                        $border .= "border-bottom-width: {$value['width']['desktop']['bottom']}{$value['width']['desktop']['unit']}; ";
                    }
                    if (!empty($value['width']['desktop']['left']) && ($value['width']['desktop']['left'] !== 'undefined')) {
                        $border .= "border-left-width: {$value['width']['desktop']['left']}{$value['width']['desktop']['unit']}; ";
                    }
                } else if (!empty($value['type']) && ($value['type'] !== 'undefined' ) && ($value['type'] === 'none') ) {
                    $border .= "border: none; ";
                }
                return $css . $border;
            } elseif ($property === 'border-radius') {
                $borderRadius = '';
                if (!empty($value['top']) && !empty($value['right']) && !empty($value['bottom']) && !empty($value['left'])) {
                    $borderRadius = "border-radius: {$value['top']}{$value['unit']} {$value['right']}{$value['unit']} {$value['bottom']}{$value['unit']} {$value['left']}{$value['unit']}; ";
                } else {
                    if (!empty($value['top'])) {    
                        $borderRadius .= "border-top-left-radius: {$value['top']}{$value['unit']}; ";
                    }
                    if (!empty($value['right'])) {
                        $borderRadius .= "border-top-right-radius: {$value['right']}{$value['unit']}; ";
                    }
                    if (!empty($value['bottom'])) {
                        $borderRadius .= "border-bottom-right-radius: {$value['bottom']}{$value['unit']}; ";
                    }
                    if (!empty($value['left'])) {
                        $borderRadius .= "border-bottom-left-radius: {$value['left']}{$value['unit']}; ";
                    }
                }
                return $css . $borderRadius;
            } elseif ($property === 'border-width') {
                $borderWidth = '';
                if (!empty($value['top']) && !empty($value['right']) && !empty($value['bottom']) && !empty($value['left'])) {
                    $borderWidth = "border-width: {$value['top']}{$value['unit']} {$value['right']}{$value['unit']} {$value['bottom']}{$value['unit']} {$value['left']}{$value['unit']}; ";
                } else {
                    if (!empty($value['top'])) {
                        $borderWidth .= "border-top-width: {$value['top']}{$value['unit']}; ";
                    }
                    if (!empty($value['right'])) {
                        $borderWidth .= "border-right-width: {$value['right']}{$value['unit']}; ";
                    }
                    if (!empty($value['bottom'])) {
                        $borderWidth .= "border-bottom-width: {$value['bottom']}{$value['unit']}; ";
                    }
                    if (!empty($value['left'])) {
                        $borderWidth .= "border-left-width: {$value['left']}{$value['unit']}; ";
                    }
                }
                return $css . $borderWidth;
            } elseif ($property === 'dual-color') {
                $dualColor = '';
                if ( ($value['colorOpt'] === 'color') &&!empty($value['colorOne']['color']) && ($value['colorOne']['color'] !== 'undefined' ) ) {
                    $dualColor = "background-color: {$value['colorOne']['color']}; ";
                } elseif( ($value['colorOpt'] === 'gradient')){
                    if( ($value['type'] === 'linear-gradient') && !empty($value['colorOne']['color']) && ($value['colorOne']['color'] !== 'undefined' ) && !empty($value['colorTwo']['color']) && ($value['colorTwo']['color'] !== 'undefined' ) ){
                        $dualColor = "background-color: transparent; background-image: linear-gradient ({$value['angle']}deg, {$value['colorOne']['color']} {$value['locationOne']}%, {$value['colorTwo']['color']} {$value['locationTwo']}%); ";
                    } elseif( ($value['type'] === 'radial-gradient') && !empty($value['colorOne']['color']) && ($value['colorOne']['color'] !== 'undefined' ) && !empty($value['colorTwo']['color']) && ($value['colorTwo']['color'] !== 'undefined' ) ){
                        $dualColor = "background-color: transparent; background-image: radial-gradient (at {$value['position']}, {$value['colorOne']['color']} {$value['locationOne']}%, {$value['colorTwo']['color']} {$value['locationTwo']}%); ";
                    }
                }
                return $css . $dualColor;
            } elseif ($property === 'background' || $property === 'background-color') {
                $backColor = '';
                if ( $value['enable'] === true && !empty($value['color']) && $value['color'] !== 'undefined' ) {
                    $backColor = "background-color: {$value['color']}; ";
                } 
                return $css . $backColor;
            } elseif ($property === 'color') {
                $Color = '';
                if ( ($value['enable'] === true) && !empty($value['color']) && ($value['color'] !== 'undefined' ) ) {
                    $Color = "color: {$value['color']}; ";
                } 
                return $css . $Color;
            }
            if (!empty($value) && !is_array($value) && !empty($value) && ($value !== 'undefined' ) && ($value !== 'undefinedundefined' ) && ($value !== 'undefinedpx' )) {
                return $css . "{$property}: {$value}; ";
            }
            return $css;
        }, '');
        if (!empty($allCss) && $allCss !== 'undefined' ) {
            return "{$selector} { {$allCss} }";
        } else {
            return '';
        }
    }
endif;