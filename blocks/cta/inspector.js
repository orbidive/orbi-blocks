import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { TextControl, ToggleControl, PanelBody, SelectControl, Button, Dashicon, RangeControl, TabPanel, BaseControl, TextareaControl   } from '@wordpress/components';
import { BoxShadowControl } from '/src/components/boxShadow.js';
import { TypographyControl } from '/src/components/typographyControl.js';
import { ResponsiveRangeControl } from '/src/components/responsiveRangeControl.js';
import { ResponsiveDimentionControl } from '/src/components/responsiveDimentionControl.js';
import { ResponsiveAlignControl } from '/src/components/responsiveAlignControl.js';
import { CustomBorderControl } from '/src/components/borderControl.js';
import { CustomGradientControl } from '/src/components/customGradientControl.js'; 
import { ColorPickerControl } from '/src/components/customColorPicker.js';
import icons from "/src/components/icons";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

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
		const onChangeContent = ( newContent ) => {
			setAttributes( {
				image: newContent.url,
			} );
		};
        const { 
			imagePosition,
			imageAttachment,
			imageRepeat,
			imageDisplaySize,
			subTitle,
			title,
			description,
			showSubTitle,
			showTitle,
			showDescription,
			showButton,
			link,
			checkNewTab,
			hideDesktop,
            hideTablet,
            hideMobile,
			linkText,
			readMoreicon,
			iconPosition,
			beforeIconSpacing,
			afterIconSpacing,
			backgroundGradientColor,
			ctaOpacity,
			ctaBorder,
            ctaBorderRadius,
            ctaMargin,
            ctaPadding,
            ctaBoxShadow,
			subTitleAlignment,
			subTitleColor,
			subTitleMargin,
			subTitleTypography,
			titleAlignment,
			titleColor,
			titleMargin,
			titleTypography,
			desAlignment,
			desColor,
			desMargin,
			desTypography,
			btnAlignment,
			btnBgColor,
			btnBgColorHover,
			btnColor,
			btnColorHover,
			btnBorder,
            btnBorderHover,
            btnBorderRadius,
            btnMargin,
            btnPadding,
            btnBoxShadow,
            btnBoxShadowHover,
			btnTypography,
        } = attributes;

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
								<BaseControl label="Background Image" className="orbi-control-label">
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
											<div className="image-avatar" style={{backgroundImage: `url("${attributes.image}")`}} >
												<span className="image-remove dashicons dashicons-trash" onClick={ onChangeContent }></span>
											</div>
										}
									</MediaUploadCheck>
								</BaseControl>
									{ !! attributes.image &&
									<>
									<div className='orbi-select-control'>
										<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Position", "orbi-blocks")}</label>
										<SelectControl
											options={ [
												{ label: 'Default', value: 'inherit' },
												{ label: 'Center Center', value: 'center center' },
												{ label: 'Center Left', value: 'center left' },
												{ label: 'Center Right', value: 'center right' },
												{ label: 'Top Center', value: 'top center' },
												{ label: 'Top Left', value: 'top left' },
												{ label: 'Top Right', value: 'top right' },
												{ label: 'Bottom Center', value: 'bottom center' },
												{ label: 'Bottom Left', value: 'bottom left' },
												{ label: 'Bottom Right', value: 'bottom right' },
											] }
											value={imagePosition}
											onChange={ ( value ) => { setAttributes( { imagePosition: value } );}}
										/>
									</div>
									<div className='orbi-select-control'>
										<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Attachment", "orbi-blocks")}</label>
										<SelectControl
											options={ [
												{ label: 'Default', value: 'inherit' },
												{ label: 'Scroll', value: 'scroll' },
												{ label: 'Fixed', value: 'fixed' },
											] }
											value={imageAttachment}
											onChange={ ( value ) => { setAttributes( { imageAttachment: value } );}}
										/>
									</div>
									<div className='orbi-select-control'>
										<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Repeat", "orbi-blocks")}</label>
										<SelectControl
											options={ [
												{ label: 'Default', value: 'inherit' },
												{ label: 'Repeat', value: 'repeat' },
												{ label: 'No Repeat', value: 'no-repeat' },
												{ label: 'Repeat-x', value: 'repeat-x' },
												{ label: 'Repeat-y', value: 'repeat-y' },
											] }
											value={imageRepeat}
											onChange={ ( value ) => { setAttributes( { imageRepeat: value } );}}
										/>
									</div>
									<div className='orbi-select-control'>
										<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Display Size", "orbi-blocks")}</label>
										<SelectControl
											options={ [
												{ label: 'Default', value: 'inherit' },
												{ label: 'Auto', value: 'auto' },
												{ label: 'Cover', value: 'cover' },
												{ label: 'Contain', value: 'contain' },
											] }
											value={imageDisplaySize}
											onChange={ ( value ) => { setAttributes( { imageDisplaySize: value } );}}
										/>
									</div>
									</>
									}
								<TextControl
									className="orbi-control-label"
									label={__("Sub Title", "orbi-blocks")}
									value={ subTitle }
									onChange={ ( value ) => { setAttributes( { subTitle: value } );}}
								/>
								<TextControl
									className="orbi-control-label"
									label={__("Title", "orbi-blocks")}
									value={ title }
									onChange={ ( value ) => { setAttributes( { title: value } );}}
								/>
								<TextareaControl
									className="orbi-control-label"
									label={__("Description", "orbi-blocks")}
									value={ description }
									onChange={ ( value ) => { setAttributes( { description: value } );}}
								/>
							</PanelBody>
							<PanelBody 
							title={ __( 'Settings' ) } 
							opened={activeGeneralPanel === 'settings'}
							onToggle={() => toggleGeneralPanel('settings')}
							>
								<ToggleControl
									className="orbi-control-label"
									label={__("Show Sub Title", "orbi-blocks")}
									checked={showSubTitle}
									onChange={(showSubTitle) => setAttributes({ showSubTitle })}
								/>
								<ToggleControl
									className="orbi-control-label"
									label={__("Show Title", "orbi-blocks")}
									checked={showTitle}
									onChange={(showTitle) => setAttributes({ showTitle })}
								/>
								<ToggleControl
									className="orbi-control-label"
									label={__("Show Description", "orbi-blocks")}
									checked={showDescription}
									onChange={(showDescription) => setAttributes({ showDescription })}
								/>
								<ToggleControl
									className="orbi-control-label"
									label={__("Show Button", "orbi-blocks")}
									checked={showButton}
									onChange={(showButton) => setAttributes({ showButton })}
								/>
							</PanelBody>
							<PanelBody 
							title={ __( 'Button Setting' ) } 
							opened={activeGeneralPanel === 'buttonSettings'}
							onToggle={() => toggleGeneralPanel('buttonSettings')}
							>
								<TextControl
									className="orbi-control-label"
									label={__("Button Text", "orbi-blocks")}
									value={ linkText }
									onChange={ ( value ) => { setAttributes( { linkText: value } );}}
								/>
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
								<BaseControl label="Icon" className="orbi-control-label orbi-icon-picker">
									<FontIconPicker 
										icons={ icons }
										value={ readMoreicon } 
										onChange={( value ) => { setAttributes( { readMoreicon: value } );}}
									/>
								</BaseControl>
								<div className='orbi-select-control'>
									<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Icon Position", "orbi-blocks")}</label>
									<SelectControl
											value={ iconPosition }
											options={ [
												{ label: 'Before', value: 'before' },
												{ label: 'After', value: 'after' },
											] }
											onChange={ ( value ) => { setAttributes( { iconPosition: value } );}}
									/>
								</div>
								{iconPosition === 'before' && (
									<ResponsiveRangeControl
										values={beforeIconSpacing}
										onChange={(value) => {
											setAttributes({
												beforeIconSpacing: { ...value },
											});
										}}
										label="Icon Spacing"
										min={0}
										max={100}
									/>
								)} 
								{iconPosition === 'after' && (
									<ResponsiveRangeControl
										values={afterIconSpacing}
										onChange={(value) => {
											setAttributes({
												afterIconSpacing: { ...value },
											});
										}}
										label="Icon Spacing"
										min={0}
										max={100}
									/>
								)} 
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
								<CustomGradientControl 
									values={backgroundGradientColor}
									onChange={(value) => {
										setAttributes({
											backgroundGradientColor: { ...value },
										});
									}}
									label="Background Color" 
								/>
								<RangeControl
									value={ctaOpacity}
									onChange={ ( value ) => { setAttributes( { ctaOpacity: value } );}}
									label="Opacity"
									min={0}
									max={1}
									step={0.01}
								/>
								<CustomBorderControl
									values={ctaBorder}
									onChange={(value) => {
										setAttributes({
											ctaBorder: { ...value },
										});
									}}
								/>
								<ResponsiveDimentionControl
									multinum={ctaBorderRadius}
									onChange={(value) => {
										setAttributes({
											ctaBorderRadius: { ...value },
										});
									}}
									label="Border Radius"
								/>
								<ResponsiveDimentionControl
									multinum={ctaPadding}
									onChange={(value) => {
										setAttributes({
											ctaPadding: { ...value },
										});
									}}
									label="Padding"
								/>
								<ResponsiveDimentionControl
									multinum={ctaMargin}
									onChange={(value) => {
										setAttributes({
											ctaMargin: { ...value },
										});
									}}
									label="Margin"
								/>
								<BoxShadowControl
									shadow={ctaBoxShadow}
									onChange={(value) => {
										setAttributes({
											ctaBoxShadow: { ...value },
										});
									}}
								/>
							</PanelBody>
							<PanelBody
							title={__("Sub Title Style", "orbi-blocks")}
							opened={activeStylePanel === 'subTitleStyle'} onToggle={() => toggleStylePanel('subTitleStyle')}
							>
								<ResponsiveAlignControl 
									choose={subTitleAlignment}
									onChange={(value) => {
										setAttributes({
											subTitleAlignment: { ...value },
										});
									}}
									label="Alignment" 
								/>
								<ColorPickerControl
										values={subTitleColor}
										onChange={(value) => {
											setAttributes({
												subTitleColor: { ...value },
											});
										}}
										label="Color"
								/>
								<TypographyControl
									typography={subTitleTypography}
									onChange={(value) => {
										setAttributes({
											subTitleTypography: { ...value },
										});
									}}
								/>
								<ResponsiveDimentionControl
									multinum={subTitleMargin}
									onChange={(value) => {
										setAttributes({
											subTitleMargin: { ...value },
										});
									}}
									label="Margin"
								/>
							</PanelBody>
							<PanelBody
							title={__("Title Style", "orbi-blocks")}
							opened={activeStylePanel === 'titleStyle'} onToggle={() => toggleStylePanel('titleStyle')}
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
							title={__("Button Style", "orbi-blocks")} 
							opened={activeStylePanel === 'buttonStyle'}
							onToggle={() => toggleStylePanel('buttonStyle')} 
							>
								<ResponsiveAlignControl 
									choose={btnAlignment}
									onChange={(value) => {
										setAttributes({
											btnAlignment: { ...value },
										});
									}}
									label="Alignment" 
								/>
								<TypographyControl
									typography={btnTypography}
									onChange={(value) => {
										setAttributes({
											btnTypography: { ...value },
										});
									}}
								/>
								<ResponsiveDimentionControl
									multinum={btnBorderRadius}
									onChange={(value) => {
										setAttributes({
											btnBorderRadius: { ...value },
										});
									}}
									label="Border Radius"
								/>
								<ResponsiveDimentionControl
									multinum={btnPadding}
									onChange={(value) => {
										setAttributes({
											btnPadding: { ...value },
										});
									}}
									label="Padding"
								/>
								<ResponsiveDimentionControl
									multinum={btnMargin}
									onChange={(value) => {
										setAttributes({
											btnMargin: { ...value },
										});
									}}
									label="Margin"
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
												values={btnBgColor}
												onChange={(value) => {
													setAttributes({
														btnBgColor: { ...value },
													});
												}}
												label="Background Color"
										/>
										<ColorPickerControl
												values={btnColor}
												onChange={(value) => {
													setAttributes({
														btnColor: { ...value },
													});
												}}
												label="Text Color"
										/>
										<CustomBorderControl
											values={btnBorder}
											onChange={(value) => {
												setAttributes({
													btnBorder: { ...value },
												});
											}}
										/>
										<BoxShadowControl
											shadow={btnBoxShadow}
											onChange={(value) => {
												setAttributes({
													btnBoxShadow: { ...value },
												});
											}}
										/>
									</>
									}
									{ 
									"hover" === tab.name && 
									<>
										<ColorPickerControl
												values={btnBgColorHover}
												onChange={(value) => {
													setAttributes({
														btnBgColorHover: { ...value },
													});
												}}
												label="Background Color"
										/>
										<ColorPickerControl
												values={btnColorHover}
												onChange={(value) => {
													setAttributes({
														btnColorHover: { ...value },
													});
												}}
												label="Text Color"
										/>
										<CustomBorderControl
											values={btnBorderHover}
											onChange={(value) => {
												setAttributes({
													btnBorderHover: { ...value },
												});
											}}
										/>
										<BoxShadowControl
											shadow={btnBoxShadowHover}
											onChange={(value) => {
												setAttributes({
													btnBoxShadowHover: { ...value },
												});
											}}
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