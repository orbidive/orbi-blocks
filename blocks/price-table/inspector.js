import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, ColorPalette} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, PlainText, RichText, BlockControls, useBlockProps } from '@wordpress/block-editor';
import { TextControl, ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, Button , IconButton, Dashicon, RangeControl, TabPanel , ButtonGroup, BaseControl, __experimentalDivider as Divider   } from '@wordpress/components';
import { PriceTableRepeater } from '/src/components/priceTableRepeater.js';
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
	const [activeStylePanel, setActiveStylePanel] = useState('priceStyle');
	const [activeAdvancedPanel, setActiveAdvancedPanel] = useState('responsive');
	function onIconChange(newIcon) {
		setAttributes({ icon: newIcon });
	}
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
		planName,
		currencySymbol,
		priceAmount,
		priceDuration,
		openSale,
		origPriceAmount,
		icon,
		showListIcon,
		listIconPosition,
		showTitle,
		showPlan,
		showIcon,
		showFeatures,
		showButton,
		showRibbon,
		ribbonStyle,
		ribbonTitle,
		hideDesktop,
		hideTablet,
		hideMobile,
		link,
		checkNewTab,
		linkText,
		readMoreicon,
		iconPosition,
		beforeIconSpacing,
		afterIconSpacing,
		priceBoxBgColor,
		priceBoxBorderType,
		priceBoxBorderRadius,
		priceBoxPadding,
		priceBoxMargin,
		priceBoxShadow,
		ribbonTypography,
		ribbonColor,
		ribbonBgColor,
		planNameAlignment,
		planNameColor,
		planNameTypography,
		planNameMargin,
		pricePlanAlignment,
		currencyColor,
		currencyTypography,
		priceColor,
		priceTypography,
		durationColor,
		durationTypography,
		saleColor,
		saleTypography,
		pricePlanMargin,
		iconAlignment,
		iconBgColor, 
		iconColor,
		iconWidth,
		iconSize,
		iconBorderType,
		iconBorderRadius,
		iconMargin,
		iconShadow,
		featureColor,
		featureIconColor,
		featureIconSize,
		featureBorderType,
		featurePadding,
		featureTypography,
		featureTopSpacing,
		featureBottomSpacing,
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
									<TextControl
										className="orbi-control-label"
										label={__("Plan Name", "orbi-blocks")}
										value={planName}
										onChange={ ( value ) => { setAttributes( { planName: value } );}}
									/>
									<TextControl
										className="orbi-control-label"
										label={__("Currency Symbol", "orbi-blocks")}
										value={currencySymbol}
										onChange={ ( value ) => { setAttributes( { currencySymbol: value } );}}
									/>
									<TextControl
										className="orbi-control-label"
										label={__("Price Amount", "orbi-blocks")}
										value={priceAmount}
										onChange={ ( value ) => { setAttributes( { priceAmount: value } );}}
									/>
									<TextControl
										className="orbi-control-label"
										label={__("Price Duration", "orbi-blocks")}
										value={priceDuration}
										onChange={ ( value ) => { setAttributes( { priceDuration: value } );}}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Sale", "orbi-blocks")}
										checked={openSale}
										onChange={(openSale) => setAttributes({ openSale })}
									/>
									{openSale && (
										<TextControl
											className="orbi-control-label"
											label={__("Orignal Price Amount", "orbi-blocks")}
											value={origPriceAmount}
											onChange={ ( value ) => { setAttributes( { origPriceAmount: value } );}}
										/>
									)}
									<BaseControl label="Icon" className="orbi-control-label orbi-icon-picker">
										<FontIconPicker 
											icons={ icons }
											value={ icon } 
											onChange={onIconChange}
										/>
									</BaseControl>
								</PanelBody>
								<PanelBody 
								title={ __( 'Feature Setting' ) } 
								opened={activeGeneralPanel === 'featureSettings'}
								onToggle={() => toggleGeneralPanel('featureSettings')}
								>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Icon", "orbi-blocks")}
										checked={showListIcon}
										onChange={(showListIcon) => setAttributes({ showListIcon })}
									/>
									<div className='orbi-select-control'>
										<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Icon Position", "orbi-blocks")}</label>
										<SelectControl
												value={ listIconPosition }
												options={ [
													{ label: 'Before', value: 'before' },
													{ label: 'After', value: 'after' },
												] }
												onChange={ ( value ) => { setAttributes( { listIconPosition: value } );}}
										/>
									</div>
									<PriceTableRepeater {...props}/>
								</PanelBody>
								<PanelBody 
								title={ __( 'Settings' ) } 
								opened={activeGeneralPanel === 'settings'}
								onToggle={() => toggleGeneralPanel('settings')}
								>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Title", "orbi-blocks")}
										checked={showTitle}
										onChange={(showTitle) => setAttributes({ showTitle })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Plan", "orbi-blocks")}
										checked={showPlan}
										onChange={(showPlan) => setAttributes({ showPlan })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Icon", "orbi-blocks")}
										checked={showIcon}
										onChange={(showIcon) => setAttributes({ showIcon })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Features", "orbi-blocks")}
										checked={showFeatures}
										onChange={(showFeatures) => setAttributes({ showFeatures })}
									/>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Button", "orbi-blocks")}
										checked={showButton}
										onChange={(showButton) => setAttributes({ showButton })}
									/>
								</PanelBody>
								<PanelBody 
								title={ __( 'Ribbon Settings' ) } 
								opened={activeGeneralPanel === 'RibbonSettings'}
								onToggle={() => toggleGeneralPanel('RibbonSettings')}
								>
									<ToggleControl
										className="orbi-control-label"
										label={__("Show Ribbon", "orbi-blocks")}
										checked={showRibbon}
										onChange={(showRibbon) => setAttributes({ showRibbon })}
									/>
									{showRibbon && (
										<>
										<div className='orbi-select-control'>
											<label for="orbi-select-control-label" className='orbi-select-control-label'>{__("Ribbon Style", "orbi-blocks")}</label>
											<SelectControl
													value={ ribbonStyle }
													options={ [
														{ label: 'Style 1', value: 'one' },
														{ label: 'Style 2', value: 'two' },
														{ label: 'Style 3', value: 'three' },
														{ label: 'Style 4', value: 'four' },
													] }
													onChange={ ( value ) => { setAttributes( { ribbonStyle: value } );}}
											/>
										</div>
										<TextControl
											className="orbi-control-label"
											label={__("Title", "orbi-blocks")}
											value={ribbonTitle}
											onChange={ ( value ) => { setAttributes( { ribbonTitle: value } );}}
										/>
										</>
									)}
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
								title={__("Price Style", "orbi-blocks")} 
								opened={activeStylePanel === 'priceStyle'}
								onToggle={() => toggleStylePanel('priceStyle')} 
								>
									<ColorPickerControl
											values={priceBoxBgColor}
											onChange={(value) => {
												setAttributes({
													priceBoxBgColor: { ...value },
												});
											}}
											label="Background Color"
									/>
									<CustomBorderControl
										values={priceBoxBorderType}
										onChange={(value) => {
											setAttributes({
												priceBoxBorderType: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={priceBoxBorderRadius}
										onChange={(value) => {
											setAttributes({
												priceBoxBorderRadius: { ...value },
											});
										}}
										label="Border Radius"
									/>
									<ResponsiveDimentionControl
										multinum={priceBoxPadding}
										onChange={(value) => {
											setAttributes({
												priceBoxPadding: { ...value },
											});
										}}
										label="Padding"
									/>
									<ResponsiveDimentionControl
										multinum={priceBoxMargin}
										onChange={(value) => {
											setAttributes({
												priceBoxMargin: { ...value },
											});
										}}
										label="Margin"
									/>
									<BoxShadowControl
										shadow={priceBoxShadow}
										onChange={(value) => {
											setAttributes({
												priceBoxShadow: { ...value },
											});
										}}
									/>
								</PanelBody>
								{showRibbon && (
								<PanelBody 
								title={__("Ribbon Style", "orbi-blocks")} 
								opened={activeStylePanel === 'ribbonStyle'}
								onToggle={() => toggleStylePanel('ribbonStyle')}   
								>
									<ColorPickerControl
										className="orbi-color-style"
										values={ribbonColor}
										onChange={(value) => {
											setAttributes({
												ribbonColor: { ...value },
											});
										}}
										label="Color"
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={ribbonBgColor}
										onChange={(value) => {
											setAttributes({
												ribbonBgColor: { ...value },
											});
										}}
										label="Background Color"
									/>
									<TypographyControl
										typography={ribbonTypography}
										onChange={(value) => {
											setAttributes({
												ribbonTypography: { ...value },
											});
										}}
									/>
								</PanelBody>
								)}
								<PanelBody 
								title={__("Plan Name Style", "orbi-blocks")} 
								opened={activeStylePanel === 'planNameStyle'}
								onToggle={() => toggleStylePanel('planNameStyle')}   
								>
									<ResponsiveAlignControl 
										choose={planNameAlignment}
										onChange={(value) => {
											setAttributes({
												planNameAlignment: { ...value },
											});
										}}
										label="Alignment" 
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={planNameColor}
										onChange={(value) => {
											setAttributes({
												planNameColor: { ...value },
											});
										}}
										label="Color"
									/>
									<TypographyControl
										typography={planNameTypography}
										onChange={(value) => {
											setAttributes({
												planNameTypography: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={planNameMargin}
										onChange={(value) => {
											setAttributes({
												planNameMargin: { ...value },
											});
										}}
										label="Margin"
									/>
								</PanelBody>
								<PanelBody 
								title={__("Price Plan Style", "orbi-blocks")} 
								opened={activeStylePanel === 'pricePlanStyle'}
								onToggle={() => toggleStylePanel('pricePlanStyle')}  
								>
									<ResponsiveAlignControl 
										choose={pricePlanAlignment}
										onChange={(value) => {
											setAttributes({
												pricePlanAlignment: { ...value },
											});
										}}
										label="Alignment" 
									/>
									<BaseControl label="Currency" className="orbi-control-label heading" >
										<ColorPickerControl
											values={currencyColor}
											onChange={(value) => {
												setAttributes({
													currencyColor: { ...value },
												});
											}}
											label="Color"
										/>
										<TypographyControl
											typography={currencyTypography}
											onChange={(value) => {
												setAttributes({
													currencyTypography: { ...value },
												});
											}}
										/>
									</BaseControl>
									<hr></hr>
									<BaseControl label="Price" className="orbi-control-label heading" >
										<ColorPickerControl
											values={priceColor}
											onChange={(value) => {
												setAttributes({
													priceColor: { ...value },
												});
											}}
											label="Color"
										/>
										<TypographyControl
											typography={priceTypography}
											onChange={(value) => {
												setAttributes({
													priceTypography: { ...value },
												});
											}}
										/>
									</BaseControl>
									<hr></hr>
									<BaseControl label="Duration" className="orbi-control-label heading" >
										<ColorPickerControl
											values={durationColor}
											onChange={(value) => {
												setAttributes({
													durationColor: { ...value },
												});
											}}
											label="Color"
										/>
										<TypographyControl
											typography={durationTypography}
											onChange={(value) => {
												setAttributes({
													durationTypography: { ...value },
												});
											}}
										/>
									</BaseControl>
									<hr></hr>
									<BaseControl label="Sale" className="orbi-control-label heading" >
										<ColorPickerControl
											values={saleColor}
											onChange={(value) => {
												setAttributes({
													saleColor: { ...value },
												});
											}}
											label="Color"
										/>
										<TypographyControl
											typography={saleTypography}
											onChange={(value) => {
												setAttributes({
													saleTypography: { ...value },
												});
											}}
										/>
									</BaseControl>
									<hr></hr>
									<ResponsiveDimentionControl
										multinum={pricePlanMargin}
										onChange={(value) => {
											setAttributes({
												pricePlanMargin: { ...value },
											});
										}}
										label="Margin"
									/>
								</PanelBody>
								<PanelBody
									title={__("Icon Style", "orbi-blocks")}
									opened={activeStylePanel === 'iconStyle'}
									onToggle={() => toggleStylePanel('iconStyle')} 
								>
									<ResponsiveAlignControl 
										choose={iconAlignment}
										onChange={(value) => {
											setAttributes({
												iconAlignment: { ...value },
											});
										}}
										label="Alignment" 
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={iconBgColor}
										onChange={(value) => {
											setAttributes({
												iconBgColor: { ...value },
											});
										}}
										label="Icon Background Color"
									/>
									<ColorPickerControl
										className="orbi-color-style"
										values={iconColor}
										onChange={(value) => {
											setAttributes({
												iconColor: { ...value },
											});
										}}
										label="Icon Color"
									/>
									<ResponsiveRangeControl
										values={iconWidth}
										onChange={(value) => {
											setAttributes({
												iconWidth: { ...value },
											});
										}}
										label="Icon Width"
										min={0}
										max={160}
									/>
									<ResponsiveRangeControl
										values={iconSize}
										onChange={(value) => {
											setAttributes({
												iconSize: { ...value },
											});
										}}
										label="Icon Size"
										min={0}
										max={160}
									/>
									<CustomBorderControl
										values={iconBorderType}
										onChange={(value) => {
											setAttributes({
												iconBorderType: { ...value },
											});
										}}
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
									<BoxShadowControl
										shadow={iconShadow}
										onChange={(value) => {
											setAttributes({
												iconShadow: { ...value },
											});
										}}
									/>
								</PanelBody>
								<PanelBody 
								title={__("Feature Style", "orbi-blocks")} 
								opened={activeStylePanel === 'featureStyle'}
								onToggle={() => toggleStylePanel('featureStyle')} 
								>
									<ColorPickerControl
										values={featureColor}
										onChange={(value) => {
											setAttributes({
												featureColor: { ...value },
											});
										}}
										label="Color"
									/>
									<ColorPickerControl
										values={featureIconColor}
										onChange={(value) => {
											setAttributes({
												featureIconColor: { ...value },
											});
										}}
										label="Icon Color"
									/>
									<TypographyControl
										typography={featureTypography}
										onChange={(value) => {
											setAttributes({
												featureTypography: { ...value },
											});
										}}
									/>
									<ResponsiveRangeControl
										values={featureIconSize}
										onChange={(value) => {
											setAttributes({
												featureIconSize: { ...value },
											});
										}}
										label="Icon Size"
										min={0}
										max={300}
									/>
									<CustomBorderControl
										values={featureBorderType}
										onChange={(value) => {
											setAttributes({
												featureBorderType: { ...value },
											});
										}}
									/>
									<ResponsiveDimentionControl
										multinum={featurePadding}
										onChange={(value) => {
											setAttributes({
												featurePadding: { ...value },
											});
										}}
										label="Padding"
									/>
									<BaseControl label="Feature Spacing" className="orbi-control-label heading" >
										<ResponsiveRangeControl
											values={featureTopSpacing}
											onChange={(value) => {
												setAttributes({
													featureTopSpacing: { ...value },
												});
											}}
											label="Top"
											min={0}
											max={300}
										/>
										<ResponsiveRangeControl
											values={featureBottomSpacing}
											onChange={(value) => {
												setAttributes({
													featureBottomSpacing: { ...value },
												});
											}}
											label="Bottom"
											min={0}
											max={300}
										/>
									</BaseControl>
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

