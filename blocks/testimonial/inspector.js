import { __ } from '@wordpress/i18n';
import { InspectorControls} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { TextControl, ToggleControl, PanelBody, SelectControl, Button, Dashicon, TabPanel, BaseControl, TextareaControl,   } from '@wordpress/components';
import { BoxShadowControl } from '/src/components/boxShadow.js';
import { TypographyControl } from '/src/components/typographyControl.js';
import { ResponsiveRangeControl } from '/src/components/responsiveRangeControl.js';
import { ResponsiveDimentionControl } from '/src/components/responsiveDimentionControl.js';
import { ResponsiveAlignControl } from '/src/components/responsiveAlignControl.js';
import { CustomBorderControl } from '/src/components/borderControl.js';
import { ColorPickerControl } from '/src/components/customColorPicker.js';
import icons from "/src/components/icons";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

export default function inspector(props) {
	
		const { attributes, setAttributes } = props;
        const [activeGeneralPanel, setActiveGeneralPanel] = useState('content');
        const [activeStylePanel, setActiveStylePanel] = useState('testimonialStyle');
        const [activeAdvancedPanel, setActiveAdvancedPanel] = useState('responsive');

        const toggleGeneralPanel = (panelName) => {
            setActiveGeneralPanel((prevPanel) => (prevPanel === panelName ? null : panelName));
        };

        const toggleStylePanel = (panelName) => {
            setActiveStylePanel((prevPanel) => (prevPanel === panelName ? null : panelName));
        };

        const toggleAdvancedPanel = (panelName) => {
            setActiveAdvancedPanel((prevPanel) => (prevPanel === panelName ? null : panelName));
        };

        const { 
			layouts,
			rating,
            icon,
            title,
			designation,
            description,
			showImage,
            showIcon,
            showTitle,
            hideDesktop,
            hideTablet,
            hideMobile,
            showDescription,
			showDesignation,
			showRating,
			link,
			checkNewTab,
            testimonialBgColor,
            testimonialBorder,
            testimonialBorderRadius,
            testimonialMargin,
            testimonialPadding,
            testimonialBoxShadow,
            iconBgColor,
			iconColor,
			iconBorderRadius,
			iconMargin,
			iconWidth,
			iconSize,
			ratingAlignment,
			ratingSize,
			ratingMargin,
			ratingColor,
			desAlignment,
			desColor,
			desMargin,
			desTypography,
			imageAlignment,
			imageBorder,
			imageBorderRadius,
			imageMargin,
			imageBoxShadow,
			imageHeight,
			imageWidth,
			titleAlignment,
			titleColor,
			titleMargin,
			titleTypography,
			degAlignment,
			degColor,
			degMargin,
			degTypography,
        } = attributes;

		const onChangeContent = ( newContent ) => {
			setAttributes( {
				image: newContent.url,
			} );
		};
		const onSelect = ( tabName ) => {
			return tabName;
		};
        function onIconChange(newIcon) {
            setAttributes({ icon: newIcon });
        }

  return (
	<InspectorControls key="inspector">
		<div className='orbi-panel-control'>
            <TabPanel
                className="orbi-tab-panel"
                activeClass="active-tab"
                onSelect={ onSelect }
                tabs={ [
                    {
                        name: 'general',
                        title: 'General',
                        className: 'orbi-tab general',
                    },
                    {
                        name: 'style',
                        title: 'Style',
                        className: 'orbi-tab style',
                    },
                    {
                        name: 'advanced',
                        title: 'Advanced',
                        className: 'orbi-tab advanced',
                    },
                ] }
            >
                { ( tab ) => 
                    <div className= {"orbi-tab-controls " + tab.name }>
                        { 
                        "general" === tab.name && 
                        <>
                        <PanelBody
                        title={__("Content", "orbi-blocks")}
                        opened={activeGeneralPanel === 'content'}
                        onToggle={() => toggleGeneralPanel('content')}
                        >
                            <div className='orbi-select-control' style={{marginTop: "20px"}}>
                                <label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Template Style", "orbi-blocks")}</label>
                                <SelectControl
                                        value={ layouts }
                                        options={ [
                                            { label: 'Layout One', value: 'Layout1' },
                                            { label: 'Layout Two', value: 'Layout2' },
                                            { label: 'Layout Three', value: 'Layout3' },
                                            { label: 'Layout Four (Pro)', value: 'Layout4' },
                                            { label: 'Layout Five (Pro)', value: 'Layout5' },
                                            { label: 'Layout Six (Pro)', value: 'Layout6' },
                                            { label: 'Layout Seven (Pro)', value: 'Layout7' },
                                            { label: 'Layout Eight (Pro)', value: 'Layout8' },
                                            { label: 'Layout Nine (Pro)', value: 'Layout9' },
                                            { label: 'Layout Ten (Pro)', value: 'Layout10' },
                                        ] }
                                        onChange={ ( value ) => { setAttributes( { layouts: value } );}}
                                />
                            </div>
                            <div className='orbi-select-control'>
                                <label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Rating", "orbi-blocks")}</label>
                                <SelectControl
                                        value={ rating }
                                        options={ [
                                            { label: '5',  },
                                            { label: '4',  },
                                            { label: '3',  },
                                            { label: '2',  },
                                            { label: '1',  },
                                            { label: '0', },
                                        ] }
                                        onChange={ ( value ) => { setAttributes( { rating: value } );}}
                                />
                            </div>
                            <TextControl
                                className="orbi-control-label"
                                label={__("Name", "orbi-blocks")}
                                value={ title }
                                onChange={ ( value ) => { setAttributes( { title: value } );}}
                            />
                            <TextControl
                                className="orbi-control-label"
                                label={__("Designation", "orbi-blocks")}
                                value={ designation }
                                onChange={ ( value ) => { setAttributes( { designation: value } );}}
                            />
                            <TextareaControl
                                className="orbi-control-label"
                                label={__("Description", "orbi-blocks")}
                                value={ description }
                                onChange={ ( value ) => { setAttributes( { description: value } );}}
                            />
                            { layouts !== "Layout2" &&(
                            <BaseControl label="Icon" className="orbi-control-label orbi-icon-picker">
                                    <FontIconPicker 
                                        icons={ icons }
                                        value={ icon } 
                                        onChange={onIconChange}
                                    />
                            </BaseControl>
                            )}									
                            <BaseControl label="Choose Image" className="orbi-control-label">
                                <MediaUploadCheck>
                                { ! attributes.image &&
                                    <MediaUpload
                                                onSelect={ onChangeContent }
                                                type="image"
                                                value={ attributes.image }
                                                render={ ( { open } ) => (
                                                <Button className="orbi_image_upload_btn" onClick={ open } aria-label="Upload Image">
                                                        <Dashicon icon="format-image" onClick={ open } /> 
                                                </Button>
                                                    ) }>
                                    </MediaUpload>
                                }
                                    { !! attributes.image &&
                                        <div className="image-avatar" style={{backgroundImage: `url("${attributes.image}")`}}	>
                                            <span className="image-remove dashicons dashicons-trash" onClick={ onChangeContent }></span>
                                        </div>
                                    }
                                </MediaUploadCheck>
                            </BaseControl>
                            <TextControl
                                className="orbi-control-label"
                                label={__("Link", "orbi-blocks")}
                                value={ link }
                                placeholder="https://your-link.com"
                                onChange={ ( value ) => { setAttributes( { link: value } );}}
                            />
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Open In New Tab", "orbi-blocks")}
                                checked={checkNewTab}
                                onChange={(checkNewTab) => setAttributes({ checkNewTab })}
                            />
                        </PanelBody>
                        <PanelBody title={ __( "Settings", "orbi-blocks" ) }
                        opened={activeGeneralPanel === 'settings'} onToggle={() => toggleGeneralPanel('settings')}
                        >
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Show Image", "orbi-blocks")}
                                checked={showImage}
                                onChange={(showImage) => setAttributes({ showImage })}
                            />
                            { layouts !== "Layout2" &&(
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Show Icon", "orbi-blocks")}
                                checked={showIcon}
                                onChange={(showIcon) => setAttributes({ showIcon })}
                            />
                            )}
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Show Name", "orbi-blocks")}
                                checked={showTitle}
                                onChange={(showTitle) => setAttributes({ showTitle })}
                            />
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Show Designation", "orbi-blocks")}
                                checked={showDesignation}
                                onChange={(showDesignation) => setAttributes({ showDesignation })}
                            />
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Show Description", "orbi-blocks")}
                                checked={showDescription}
                                onChange={(showDescription) => setAttributes({ showDescription })}
                            />
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Show Rating", "orbi-blocks")}
                                checked={showRating}
                                onChange={(showRating) => setAttributes({ showRating })}
                            />
                        </PanelBody>
                        <PanelBody 
                        title={__("Go Premium for More Features", "orbi-blocks")} 
                        opened={activeGeneralPanel === 'proNotice'}
                        onToggle={() => toggleGeneralPanel('proNotice')}
                        className='orbi-pro-notice-body'
                        >
                            <div className='orbi-pro-features'>
                            GET THE  <a href="https://info.com/" target="_blank">PRO VERSION</a> FOR MORE STUNNING ELEMENTS.
                            </div>
                        </PanelBody>
                        </>
                        }
                        { 
                        "style" === tab.name && 
                        <>
                        <PanelBody
                        title={__("Testimonial Style", "orbi-blocks")}
                        opened={activeStylePanel === 'testimonialStyle'} onToggle={() => toggleStylePanel('testimonialStyle')}
                        >
                            <ColorPickerControl
                                    values={testimonialBgColor}
                                    onChange={(value) => {
                                        setAttributes({
                                            testimonialBgColor: { ...value },
                                        });
                                    }}
                                    label="Background Color"
                            />
                            <CustomBorderControl
                                values={testimonialBorder}
                                onChange={(value) => {
                                    setAttributes({
                                        testimonialBorder: { ...value },
                                    });
                                }}
                            />
                            <ResponsiveDimentionControl
                                multinum={testimonialBorderRadius}
                                onChange={(value) => {
                                    setAttributes({
                                        testimonialBorderRadius: { ...value },
                                    });
                                }}
                                label="Border Radius"
                            />
                            <ResponsiveDimentionControl
                                multinum={testimonialPadding}
                                onChange={(value) => {
                                    setAttributes({
                                        testimonialPadding: { ...value },
                                    });
                                }}
                                label="Padding"
                            />
                            <ResponsiveDimentionControl
                                multinum={testimonialMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        testimonialMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                            <BoxShadowControl
                                shadow={testimonialBoxShadow}
                                onChange={(value) => {
                                    setAttributes({
                                        testimonialBoxShadow: { ...value },
                                    });
                                }}
                            />
                        </PanelBody>
                        <PanelBody
                        title={__("Rating Style", "orbi-blocks")}
                        opened={activeStylePanel === 'ratingStyle'} onToggle={() => toggleStylePanel('ratingStyle')}
                        >
                            <ResponsiveAlignControl 
                                choose={ratingAlignment}
                                onChange={(value) => {
                                    setAttributes({
                                        ratingAlignment: { ...value },
                                    });
                                }}
                                label="Alignment" 
                            />
                            <ColorPickerControl
                                    values={ratingColor}
                                    onChange={(value) => {
                                        setAttributes({
                                            ratingColor: { ...value },
                                        });
                                    }}
                                    label="Color"
                            />
                            <ResponsiveRangeControl
                                values={ratingSize}
                                onChange={(value) => {
                                    setAttributes({
                                        ratingSize: { ...value },
                                    });
                                }}
                                label="Size"
                                min={0}
                                max={1000}
                            />
                            <ResponsiveDimentionControl
                                multinum={ratingMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        ratingMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                        </PanelBody>
                        { layouts !== "Layout2" &&(
                        <PanelBody
                        title={__("Quote Style", "orbi-blocks")}
                        opened={activeStylePanel === 'quoteStyle'} onToggle={() => toggleStylePanel('quoteStyle')}
                        >
                            { layouts == "Layout3" &&(
                            <ColorPickerControl
                                values={iconBgColor}
                                onChange={(value) => {
                                    setAttributes({
                                        iconBgColor: { ...value },
                                    });
                                }}
                                label=" Background Color"
                            />
                            )}
                            <ColorPickerControl
                                    values={iconColor}
                                    onChange={(value) => {
                                        setAttributes({
                                            iconColor: { ...value },
                                        });
                                    }}
                                    label="Color"
                            />
                            <ResponsiveRangeControl
                                values={iconSize}
                                onChange={(value) => {
                                    setAttributes({
                                        iconSize: { ...value },
                                    });
                                }}
                                label="Size"
                                min={0}
                                max={300}
                            />
                            <ResponsiveRangeControl
                                values={iconWidth}
                                onChange={(value) => {
                                    setAttributes({
                                        iconWidth: { ...value },
                                    });
                                }}
                                label="Width"
                                min={0}
                                max={300}
                            />
                            <ResponsiveDimentionControl
                                multinum={iconBorderRadius}
                                onChange={(value) => {
                                    setAttributes({
                                        iconBorderRadius: { ...value },
                                    });
                                }}
                                label="Border Radius"
                            />
                            <ResponsiveDimentionControl
                                multinum={iconMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        iconMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                        </PanelBody>
                        )}
                        <PanelBody
                        title={__("Description Style", "orbi-blocks")}
                        opened={activeStylePanel === 'desStyle'} onToggle={() => toggleStylePanel('desStyle')}
                        >
                            <ResponsiveAlignControl 
                                choose={desAlignment}
                                onChange={(value) => {
                                    setAttributes({
                                        desAlignment: { ...value },
                                    });
                                }}
                                label="Alignment" 
                            />
                            <ColorPickerControl
                                    values={desColor}
                                    onChange={(value) => {
                                        setAttributes({
                                            desColor: { ...value },
                                        });
                                    }}
                                    label="Color"
                            />
                            <TypographyControl
                                typography={desTypography}
                                onChange={(value) => {
                                    setAttributes({
                                        desTypography: { ...value },
                                    });
                                }}
                            />
                            <ResponsiveDimentionControl
                                multinum={desMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        desMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                        </PanelBody>
                        <PanelBody
                        title={__("Image Style", "orbi-blocks")}
                        opened={activeStylePanel === 'imageStyle'} onToggle={() => toggleStylePanel('imageStyle')}
                        >
                            <ResponsiveAlignControl 
                                choose={imageAlignment}
                                onChange={(value) => {
                                    setAttributes({
                                        imageAlignment: { ...value },
                                    });
                                }}
                                label="Alignment" 
                            />
                            <ResponsiveRangeControl
                                values={imageWidth}
                                onChange={(value) => {
                                    setAttributes({
                                        imageWidth: { ...value },
                                    });
                                }}
                                label="Width"
                                min={0}
                                max={1000}
                            />
                            <ResponsiveRangeControl
                                values={imageHeight}
                                onChange={(value) => {
                                    setAttributes({
                                        imageHeight: { ...value },
                                    });
                                }}
                                label="Height"
                                min={0}
                                max={1000}
                            />
                            <CustomBorderControl
                                values={imageBorder}
                                onChange={(value) => {
                                    setAttributes({
                                        imageBorder: { ...value },
                                    });
                                }}
                            />
                            <ResponsiveDimentionControl
                                multinum={imageBorderRadius}
                                onChange={(value) => {
                                    setAttributes({
                                        imageBorderRadius: { ...value },
                                    });
                                }}
                                label="Border Radius"
                            />
                            <ResponsiveDimentionControl
                                multinum={imageMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        imageMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                            <BoxShadowControl
                                shadow={imageBoxShadow}
                                onChange={(value) => {
                                    setAttributes({
                                        imageBoxShadow: { ...value },
                                    });
                                }}
                            />
                        </PanelBody>
                        <PanelBody
                        title={__("Name Style", "orbi-blocks")}
                        opened={activeStylePanel === 'nameStyle'} onToggle={() => toggleStylePanel('nameStyle')}
                        >
                            <ResponsiveAlignControl 
                                choose={titleAlignment}
                                onChange={(value) => {
                                    setAttributes({
                                        titleAlignment: { ...value },
                                    });
                                }}
                                label="Alignment" 
                            />
                            <ColorPickerControl
                                    values={titleColor}
                                    onChange={(value) => {
                                        setAttributes({
                                            titleColor: { ...value },
                                        });
                                    }}
                                    label="Color"
                            />
                            <TypographyControl
                                typography={titleTypography}
                                onChange={(value) => {
                                    setAttributes({
                                        titleTypography: { ...value },
                                    });
                                }}
                            />
                            <ResponsiveDimentionControl
                                multinum={titleMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        titleMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                        </PanelBody>
                        <PanelBody
                        title={__("Designation Style", "orbi-blocks")}
                        opened={activeStylePanel === 'degStyle'} onToggle={() => toggleStylePanel('degStyle')}
                        >
                            <ResponsiveAlignControl 
                                choose={degAlignment}
                                onChange={(value) => {
                                    setAttributes({
                                        degAlignment: { ...value },
                                    });
                                }}
                                label="Alignment" 
                            />
                            <ColorPickerControl
                                    values={degColor}
                                    onChange={(value) => {
                                        setAttributes({
                                            degColor: { ...value },
                                        });
                                    }}
                                    label="Color"
                            />
                            <TypographyControl
                                typography={degTypography}
                                onChange={(value) => {
                                    setAttributes({
                                        degTypography: { ...value },
                                    });
                                }}
                            />
                            <ResponsiveDimentionControl
                                multinum={degMargin}
                                onChange={(value) => {
                                    setAttributes({
                                        degMargin: { ...value },
                                    });
                                }}
                                label="Margin"
                            />
                        </PanelBody>
                        </>
                        }
                        { 
                        "advanced" === tab.name && 
                        <>
                        <PanelBody
                            title={__("Responsive", "orbi-blocks")}
                            opened={activeAdvancedPanel === 'responsive'}
                            onToggle={() => toggleAdvancedPanel('responsive')}
                        >
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Hide Desktop", "orbi-blocks")}
                                checked={hideDesktop}
                                onChange={(hideDesktop) => setAttributes({ hideDesktop })}
                            />
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Hide Tablet", "orbi-blocks")}
                                checked={hideTablet}
                                onChange={(hideTablet) => setAttributes({ hideTablet })}
                            />
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Hide Mobile", "orbi-blocks")}
                                checked={hideMobile}
                                onChange={(hideMobile) => setAttributes({ hideMobile })}
                            />
                        </PanelBody>
                        </>
                        }
                    </div> 
                }
            </TabPanel>
		</div>
    </InspectorControls>
)
}