import { __ } from '@wordpress/i18n';
import { SelectControl, Button, Dashicon, RangeControl, Popover, BaseControl, ColorPicker } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from "react"; 

const colorDefaultValue = {
	enable: false,
	color: "",
};

export function ColorPickerControl({ values, onChange, label="" },props) {
	const { attributes, setAttributes } = props;
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [colorValue, setColorValue] = useState({
		enable: values?.enable || false,
		color: values?.color || "",
	});

	return (
		<div className="color-picker-control">
			<div className="control-label-wrapper">
			<div className='orbi-color-controls'>
				<label for="orbi-color-control-label" className='orbi-color-label'>{__(label, "orbi-blocks")}</label>
				<div className="button-wrapper">
					{colorValue.enable && (
						<Button
						style={{padding: "0 10px"}}
							onClick={() => {
								setColorValue({
									...colorDefaultValue,
								});
								onChange({
									...colorDefaultValue,
								});
								setPopoverOpen(false);
							}}
						>
							<Dashicon className='orbi-reset' icon="image-rotate" />
						</Button>
					)}
					<Button
					className='orbi-color-toggle'
						onClick={() => {
							onChange({ ...colorValue, enable: true });
							setColorValue({ ...colorValue, enable: true });
							setPopoverOpen(!popoverOpen);
						}}
						isPressed={popoverOpen === true}
						variant="secondary"
					>
						<span className='orbi-defined-color' style={{background: colorValue.color}}></span>
					</Button>
				</div>
			</div>
				{popoverOpen && (
					<Popover>
                    <ColorPicker
                        color={colorValue.color}
                        onChange={(value) => {
                            setColorValue({
                                ...colorValue,
                                color: value,
                            });
                            onChange({
                                ...colorValue,
                                color: value,
                            });
                        }}
                        enableAlpha
                    />
					</Popover>
				)}
			</div>
		</div>
	);
}