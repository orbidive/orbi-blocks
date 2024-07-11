import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState  } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { TextControl, ToggleControl, PanelBody, SelectControl, Button, Dashicon, TabPanel, BaseControl   } from '@wordpress/components';
import { IconRepeater } from '/src/components/iconRepeater.js';
import { BoxShadowControl } from '/src/components/boxShadow.js';
import { TypographyControl } from '/src/components/typographyControl.js';
import { ResponsiveRangeControl } from '/src/components/responsiveRangeControl.js';
import { ResponsiveDimentionControl } from '/src/components/responsiveDimentionControl.js';
import { ResponsiveAlignControl } from '/src/components/responsiveAlignControl.js';
import { CustomBorderControl } from '/src/components/borderControl.js';
import { ColorPickerControl } from '/src/components/customColorPicker.js';

export default function inspector(props) {
	
		const { attributes, setAttributes } = props;
		const [activeGeneralPanel, setActiveGeneralPanel] = useState('content');
        const [activeStylePanel, setActiveStylePanel] = useState('boxStyle');
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
			yourId,
			showImage,
			showName,
			showDesignation,
			showicons,
			hideDesktop,
            hideTablet,
            hideMobile,
			info = [],
			teamBoxBgColor,
			teamBoxBorderType,
			teamBoxBorderRadius,
			teamBoxPadding,
			teamBoxMargin,
			teamBoxShadow,
			teamBoxBgHoverColor,
			teamImageWidth,
			teamImageHeight,
			teamImageBorderType,
			teamImageBorderRadius,
			teamImageMargin,
			teamImageShadow,
			teamTitleAlignment,
            teamTitleTagName ,
			teamTitleColor,
			teamTitleTypography,
			teamTitleMargin,
			teamTitleHoverColor,
			teamDesignationAlignment,
			teamDesignationColor,
			teamDesignationTypography,
			teamDesignationMargin,
			teamDesignationHoverColor,
			teamSocialIconAlignment,
			teamSocialIconBgColor, 
			teamSocialIconColor,
			teamSocialIconWidth,
			teamSocialIconSize,
			teamSocialIconBorderType,
			teamSocialIconBorderRadius,
			teamSocialIconMargin,
			teamSocialIconHoverBgColor,
			teamSocialIconHoverColor,
			teamSocialIconHoverBorderType,
			teamSocialIconHoverBorderRadius,
        } = attributes;

		const onChangeContent = ( newContent ) => {
			setAttributes( {
				image: newContent.url,
			} );
		};
		const onSelect = ( tabName ) => {
			return tabName;
		};

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
														) } >
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
										label={__("Name", "orbi-blocks")}
										value={attributes.title}
										onChange={ ( value ) => { setAttributes( { title: value } );}}
									/>
									<TextControl
										className="orbi-control-label"
										label={__("Designation", "orbi-blocks")}
										value={attributes.designation}
										onChange={ ( value ) => { setAttributes( { designation: value } );}}
									/>
										<IconRepeater {...props}/>
									<div className='orbi-pro-notice'>
										More than 4 are available in <a href="https://info.com/" target="_blank">Pro Version!</a>
									</div>
								</PanelBody>
								<PanelBody 
								title={ __( 'Settings' ) } 
								opened={activeGeneralPanel === 'settings'}
								onToggle={() => toggleGeneralPanel('settings')}
								>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Image", "orbi-blocks")}
										checked={showImage}
										onChange={(showImage) => setAttributes({ showImage })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Name", "orbi-blocks")}
										checked={showName}
										onChange={(showName) => setAttributes({ showName })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Designation", "orbi-blocks")}
										checked={showDesignation}
										onChange={(showDesignation) => setAttributes({ showDesignation })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Social Icon", "orbi-blocks")}
										checked={showicons}
										onChange={(showicons) => setAttributes({ showicons })}
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
								title={__("Box Style", "orbi-blocks")} 
								opened={activeStylePanel === 'boxStyle'}
								onToggle={() => toggleStylePanel('boxStyle')} 
								>
									<ColorPickerControl
										values={teamBoxBgColor}
										onChange={(value) => {
											setAttributes({
												teamBoxBgColor: { ...value },
											});
										}}
										label="Background Color"
									/>
									<ColorPickerControl
										values={teamBoxBgHoverColor}
										onChange={(value) => {
											setAttributes({
												teamBoxBgHoverColor: { ...value },
											});
										}}
										label="Hover Background Color"
									/>
									<CustomBorderControl
										values={teamBoxBorderType}
										onChange={(value) => {
											setAttributes({
												teamBoxBorderType: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={teamBoxBorderRadius}
										onChange={(value) => {
											setAttributes({
												teamBoxBorderRadius: { ...value },
											});
										}}
										label="Border Radius"
									/>
									<ResponsiveDimentionControl
										multinum={teamBoxPadding}
										onChange={(value) => {
											setAttributes({
												teamBoxPadding: { ...value },
											});
										}}
										label="Padding"
									/>
									<ResponsiveDimentionControl
										multinum={teamBoxMargin}
										onChange={(value) => {
											setAttributes({
												teamBoxMargin: { ...value },
											});
										}}
										label="Margin"
									/>
									<BoxShadowControl
										shadow={teamBoxShadow}
										onChange={(value) => {
											setAttributes({
												teamBoxShadow: { ...value },
											});
										}}
									/>
								</PanelBody>
								<PanelBody 
								title={__("Image Style", "orbi-blocks")} 
								opened={activeStylePanel === 'imgStyle'}
								onToggle={() => toggleStylePanel('imgStyle')}  
								>
									<ResponsiveRangeControl
										values={teamImageWidth}
										onChange={(value) => {
											setAttributes({
												teamImageWidth: { ...value },
											});
										}}
										label="Image Width"
										min={0}
										max={1500}
									/>
									<ResponsiveRangeControl
										values={teamImageHeight}
										onChange={(value) => {
											setAttributes({
												teamImageHeight: { ...value },
											});
										}}
										label="Image Height"
										min={0}
										max={1500}
									/>
									<CustomBorderControl
										values={teamImageBorderType}
										onChange={(value) => {
											setAttributes({
												teamImageBorderType: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={teamImageBorderRadius}
										onChange={(value) => {
											setAttributes({
												teamImageBorderRadius: { ...value },
											});
										}}
										label="Border Radius"
									/>
									<ResponsiveDimentionControl
										multinum={teamImageMargin}
										onChange={(value) => {
											setAttributes({
												teamImageMargin: { ...value },
											});
										}}
										label="Margin"
									/>
									<BoxShadowControl
										shadow={teamImageShadow}
										onChange={(value) => {
											setAttributes({
												teamImageShadow: { ...value },
											});
										}}
									/>
								</PanelBody>
								<PanelBody 
								title={__("Title Style", "orbi-blocks")} 
								opened={activeStylePanel === 'titleStyle'}
								onToggle={() => toggleStylePanel('titleStyle')}   
								>
									<ResponsiveAlignControl 
										choose={teamTitleAlignment}
										onChange={(value) => {
											setAttributes({
												teamTitleAlignment: { ...value },
											});
										}}
										label="Alignment" 
									/>
									<SelectControl
										label="Size"
										value={ teamTitleTagName }
										options={ [
											{ label: 'H1', value: 'h1' },
											{ label: 'H2', value: 'h2' },
											{ label: 'H3', value: 'h3' },
											{ label: 'H4', value: 'h4' },
											{ label: 'H5', value: 'h5' },
											{ label: 'H6', value: 'h6' },
										] }
										onChange={ ( value ) => { setAttributes( { teamTitleTagName: value } );}}
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={teamTitleColor}
										onChange={(value) => {
											setAttributes({
												teamTitleColor: { ...value },
											});
										}}
										label="Color"
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={teamTitleHoverColor}
										onChange={(value) => {
											setAttributes({
												teamTitleHoverColor: { ...value },
											});
										}}
										label="Hover Color"
									/>
									<TypographyControl
										typography={teamTitleTypography}
										onChange={(value) => {
											setAttributes({
												teamTitleTypography: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={teamTitleMargin}
										onChange={(value) => {
											setAttributes({
												teamTitleMargin: { ...value },
											});
										}}
										label="Margin"
									/>
								</PanelBody>
								<PanelBody 
								title={__("Designation Style", "orbi-blocks")} 
								opened={activeStylePanel === 'degStyle'}
								onToggle={() => toggleStylePanel('degStyle')}  
								>
									<ResponsiveAlignControl 
										choose={teamDesignationAlignment}
										onChange={(value) => {
											setAttributes({
												teamDesignationAlignment: { ...value },
											});
										}}
										label="Alignment" 
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={teamDesignationColor}
										onChange={(value) => {
											setAttributes({
												teamDesignationColor: { ...value },
											});
										}}
										label="Color"
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={teamDesignationHoverColor}
										onChange={(value) => {
											setAttributes({
												teamDesignationHoverColor: { ...value },
											});
										}}
										label="Hover Color"
									/>
									<TypographyControl
										typography={teamDesignationTypography}
										onChange={(value) => {
											setAttributes({
												teamDesignationTypography: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={teamDesignationMargin}
										onChange={(value) => {
											setAttributes({
												teamDesignationMargin: { ...value },
											});
										}}
										label="Margin"
									/>
								</PanelBody>
								<PanelBody
									title={__("Social Icons Style", "orbi-blocks")}
									opened={activeStylePanel === 'iconsStyle'}
									onToggle={() => toggleStylePanel('iconsStyle')} 
								>
									<ResponsiveAlignControl 
										choose={teamSocialIconAlignment}
										onChange={(value) => {
											setAttributes({
												teamSocialIconAlignment: { ...value },
											});
										}}
										label="Alignment" 
									/>
									<TabPanel
										className="orbi-tab-panel"
										activeClass="tab-active"
										onSelect={ onSelect }
										tabs={ [
											{
												name: 'normal',
												title: 'Normal',
												className: 'orbi-button normal',
											},
											{
												name: 'hover',
												title: 'Hover',
												className: 'orbi-button hover',
											},
										] }
									>
										{ ( tab ) =>
										<div className= {"orbi-tab-controls " + tab.name }>
									{ 
									"normal" === tab.name && 
									<>
										<ColorPickerControl
											className="orbi-color-style"
											values={teamSocialIconBgColor}
											onChange={(value) => {
												setAttributes({
													teamSocialIconBgColor: { ...value },
												});
											}}
											label="Background Color"
										/>
										<ColorPickerControl
											className="orbi-color-style"
											values={teamSocialIconColor}
											onChange={(value) => {
												setAttributes({
													teamSocialIconColor: { ...value },
												});
											}}
											label="Color"
										/>
										<ResponsiveRangeControl
											values={teamSocialIconWidth}
											onChange={(value) => {
												setAttributes({
													teamSocialIconWidth: { ...value },
												});
											}}
											label="Width"
											min={0}
											max={160}
										/>
										<ResponsiveRangeControl
											values={teamSocialIconSize}
											onChange={(value) => {
												setAttributes({
													teamSocialIconSize: { ...value },
												});
											}}
											label="Size"
											min={0}
											max={160}
										/>
										<CustomBorderControl
											values={teamSocialIconBorderType}
											onChange={(value) => {
												setAttributes({
													teamSocialIconBorderType: { ...value },
												});
											}}
										/>
										<ResponsiveDimentionControl
											multinum={teamSocialIconBorderRadius}
											onChange={(value) => {
												setAttributes({
													teamSocialIconBorderRadius: { ...value },
												});
											}}
											label="Border Radius"
										/>
										<ResponsiveDimentionControl
											multinum={teamSocialIconMargin}
											onChange={(value) => {
												setAttributes({
													teamSocialIconMargin: { ...value },
												});
											}}
											label="Margin"
										/>
									</>
									}
									{ 
									"hover" === tab.name && 
									<>
										<ColorPickerControl
											className="orbi-color-style"
											values={teamSocialIconHoverBgColor}
											onChange={(value) => {
												setAttributes({
													teamSocialIconHoverBgColor: { ...value },
												});
											}}
											label="Background Color"
										/>
										<ColorPickerControl
											className="orbi-color-style"
											values={teamSocialIconHoverColor}
											onChange={(value) => {
												setAttributes({
													teamSocialIconHoverColor: { ...value },
												});
											}}
											label="Color"
										/>
										<CustomBorderControl
											values={teamSocialIconHoverBorderType}
											onChange={(value) => {
												setAttributes({
													teamSocialIconHoverBorderType: { ...value },
												});
											}}
										/>
										<ResponsiveDimentionControl
											multinum={teamSocialIconHoverBorderRadius}
											onChange={(value) => {
												setAttributes({
													teamSocialIconHoverBorderRadius: { ...value },
												});
											}}
											label="Border Radius"
										/>
									</>
									}
										</div>
										}
									</TabPanel>
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