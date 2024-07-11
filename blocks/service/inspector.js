import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { TextControl, ToggleControl, PanelBody, SelectControl, TabPanel , TextareaControl, BaseControl  } from '@wordpress/components';
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
			yourId,
			title,
			description,
			showTitle,
			showDescription,
			showIcon,
			showReadMore,
			link,
			checkNewTab,
			hideDesktop,
            hideTablet,
            hideMobile,
            icon,
			linkText,
			readMoreicon,
			iconPosition,
			beforeIconSpacing,
			afterIconSpacing,
			backgroundGradientColor,
			backgroundGradientColorHover,
			serviceBorder,
            serviceBorderHover,
            serviceBorderRadius,
            serviceMargin,
            servicePadding,
            serviceBoxShadow,
            serviceBoxShadowHover,
			iconAlignment,
			iconColor,
			iconColorHover,
			iconBorder,
			iconBorderHover,
			iconBorderRadius,
			iconMargin,
			iconBgColor,
			iconBgColorHover,
			iconWidth,
			iconSize,
			titleAlignment,
			titleColor,
			titleColorHover,
			titleMargin,
			titleTypography,
			desAlignment,
			desColor,
			desColorHover,
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
								<BaseControl label="Icon" className="orbi-control-label orbi-icon-picker">
									<FontIconPicker 
										icons={ icons }
										value={ icon } 
										onChange={onIconChange}
									/>
								</BaseControl>
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
									label={__("Show Icon", "orbi-blocks")}
									checked={showIcon}
									onChange={(showIcon) => setAttributes({ showIcon })}
								/>
								<ToggleControl
									className="orbi-control-label"
									label={__("Show Read More", "orbi-blocks")}
									checked={showReadMore}
									onChange={(showReadMore) => setAttributes({ showReadMore })}
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
										<CustomGradientControl 
											values={backgroundGradientColor}
											onChange={(value) => {
												setAttributes({
													backgroundGradientColor: { ...value },
												});
											}}
											label="Background Color" 
										/>
										<CustomBorderControl
											values={serviceBorder}
											onChange={(value) => {
												setAttributes({
													serviceBorder: { ...value },
												});
											}}
										/>
										<ResponsiveDimentionControl
											multinum={serviceBorderRadius}
											onChange={(value) => {
												setAttributes({
													serviceBorderRadius: { ...value },
												});
											}}
											label="Border Radius"
										/>
										<ResponsiveDimentionControl
											multinum={servicePadding}
											onChange={(value) => {
												setAttributes({
													servicePadding: { ...value },
												});
											}}
											label="Padding"
										/>
										<ResponsiveDimentionControl
											multinum={serviceMargin}
											onChange={(value) => {
												setAttributes({
													serviceMargin: { ...value },
												});
											}}
											label="Margin"
										/>
										<BoxShadowControl
											shadow={serviceBoxShadow}
											onChange={(value) => {
												setAttributes({
													serviceBoxShadow: { ...value },
												});
											}}
										/>
									</>
									}
									{ 
									"hover" === tab.name && 
									<>
										<CustomGradientControl 
											values={backgroundGradientColorHover}
											onChange={(value) => {
												setAttributes({
													backgroundGradientColorHover: { ...value },
												});
											}}
											label="Background Color" 
										/>
										<CustomBorderControl
											values={serviceBorderHover}
											onChange={(value) => {
												setAttributes({
													serviceBorderHover: { ...value },
												});
											}}
										/>
										<BoxShadowControl
											shadow={serviceBoxShadowHover}
											onChange={(value) => {
												setAttributes({
													serviceBoxShadowHover: { ...value },
												});
											}}
										/>
									</>
									}
									</div>
								}
								</TabPanel>
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
										<CustomGradientControl 
											values={iconBgColor}
											onChange={(value) => {
												setAttributes({
													iconBgColor: { ...value },
												});
											}}
											label="Background Color" 
										/>
										<ColorPickerControl
											values={iconColor}
											onChange={(value) => {
												setAttributes({
													iconColor: { ...value },
												});
											}}
											label="Icon Color"
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
										<CustomBorderControl
											values={iconBorder}
											onChange={(value) => {
												setAttributes({
													iconBorder: { ...value },
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
									</>
									}
									{ 
									"hover" === tab.name && 
									<>
										<CustomGradientControl 
											values={iconBgColorHover}
											onChange={(value) => {
												setAttributes({
													iconBgColorHover: { ...value },
												});
											}}
											label="Background Color" 
										/>
										<ColorPickerControl
											values={iconColorHover}
											onChange={(value) => {
												setAttributes({
													iconColorHover: { ...value },
												});
											}}
											label="Icon Color"
										/>
										<CustomBorderControl
											values={iconBorderHover}
											onChange={(value) => {
												setAttributes({
													iconBorderHover: { ...value },
												});
											}}
										/>
									</>
									}
									</div>
								}
								</TabPanel>
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
								<ColorPickerControl
									values={titleColorHover}
									onChange={(value) => {
										setAttributes({
											titleColorHover: { ...value },
										});
									}}
									label="Hover Color"
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
								<ColorPickerControl
										values={desColorHover}
										onChange={(value) => {
											setAttributes({
												desColorHover: { ...value },
											});
										}}
										label="Hover Color"
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
										<TypographyControl
											typography={btnTypography}
											onChange={(value) => {
												setAttributes({
													btnTypography: { ...value },
												});
											}}
										/>
										<CustomBorderControl
											values={btnBorder}
											onChange={(value) => {
												setAttributes({
													btnBorder: { ...value },
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