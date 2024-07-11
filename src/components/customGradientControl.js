import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from '@wordpress/block-editor';
import { ColorPickerControl } from './customColorPicker.js';
import { RangeControl, SelectControl, Dropdown, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from "react";

export function CustomGradientControl({ values, onChange, label = "" }, props) {
    const { attributes, setAttributes } = props;
    // State to manage synchronized values, including the link boolean
    const [ControlValue, setControlValue] = useState({
        colorOpt: values?.colorOpt || 'color',
        colorOne: values?.colorOne || {
            enable: false,
            color: undefined,
        },
        colorTwo: values?.colorTwo || {
            enable: false,
            color: undefined,
        },
        locationOne: values?.locationOne || 0,
        locationTwo: values?.locationTwo || 100,
        type: values?.type || 'linear-gradient',
        position: values?.position || 'center center',
        angle: values?.angle || 180,
    });
    const {colorOne, colorTwo} = ControlValue;

    // State to manage synchronized values, including the link boolean
    const [selectedTab, setSelectedTab] = useState('color');

    // Event handler for selecting a tab
    const onSelectTab = (tabName) => {
        setControlValue({
            ...ControlValue,
            colorOpt: tabName,
        });
        onChange({
            ...ControlValue,
            colorOpt: tabName,
        });
    };

    return (
        <>
            <div className="orbi-color-type-control">
                <div className='control-label-wrapper'>
                    <div className="orbi-color-type-controls">
                        <label for="orbi-color-type-control-label" className='orbi-color-type-label'>{__(label, "orbi-blocks")}</label>
                        <div className="orbi-color-type-control-tab">
                            <button
                                type="button"
                                className={`components-button orbi-gradient-tab-button ${ControlValue.colorOpt === 'color' ? 'is-active' : ''}`}
                                onClick={() => onSelectTab('color')}
                            >
                                <span className="dashicons dashicons-admin-customizer"></span>
                            </button>
                            <button
                                type="button"
                                className={`components-button orbi-gradient-tab-button ${ControlValue.colorOpt === 'gradient' ? 'is-active' : ''}`}
                                onClick={() => onSelectTab('gradient')}
                            >
                                <span className="fas fa-barcode"></span>
                            </button>
                        </div>
                    </div>
                    <div className="orbi-color-types">
                        <ColorPickerControl
                            values={ControlValue.colorOne}
                            onChange={(value) => {
                                setControlValue({
                                    ...ControlValue,
                                    colorOne: value,
                                });
                                onChange({
                                    ...ControlValue,
                                    colorOne: value,
                                });
                            }}
                            label="Color"
                        />
                        {ControlValue.colorOpt === 'gradient' && (
                            <>
                            <div className='orbi-range-controls'>
                                <div className='orbi-range-label'>
                                    {__("Location", "orbi-blocks")}
                                </div>
                                <div className='orbi-units-container'>
                                    <Dropdown
                                        className="orbi-units-dropdown"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button variant="primary" className='orbi-units-button'>%</Button>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='orbi-range-inner' style={{marginBottom: "20px"}}>
                                <RangeControl
                                    value={ControlValue.locationOne}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            locationOne: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            locationOne: value,
                                        });
                                    }}
                                    min={0}
                                    max={100}
                                />
                            </div>
                            <ColorPickerControl
                                values={ControlValue.colorTwo}
                                onChange={(value) => {
                                    setControlValue({
                                        ...ControlValue,
                                        colorTwo: value,
                                    });
                                    onChange({
                                        ...ControlValue,
                                        colorTwo: value,
                                    });
                                }}
                                label="Second Color"
                            />
                            <div className='orbi-range-controls'>
                                <div className='orbi-range-label'>
                                    {__("Location", "orbi-blocks")}
                                </div>
                                <div className='orbi-units-container'>
                                    <Dropdown
                                        className="orbi-units-dropdown"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button variant="primary" className='orbi-units-button'>%</Button>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='orbi-range-inner' style={{marginBottom: "20px"}}>
                                <RangeControl
                                    value={ControlValue.locationTwo}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            locationTwo: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            locationTwo: value,
                                        });
                                    }}
                                    min={0}
                                    max={100}
                                />
                            </div>
                            <div className='orbi-color-type'>
                                <label for="orbi-color-type-label" className='orbi-color-type-label'>{__("Type", "orbi-blocks")}</label>
                                <SelectControl
                                    options={ [
                                        { label: 'Linear', value: 'linear-gradient' },
                                        { label: 'Radial', value: 'radial-gradient' },
                                    ] }
                                    value={ControlValue.type}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            type: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            type: value,
                                        });
                                    }}
                                />
                            </div>
                            {ControlValue.type === 'radial-gradient' && (
                            <div className='orbi-color-type'>
                                <label for="orbi-color-position-label" className='orbi-color-type-label'>{__("Position", "orbi-blocks")}</label>
                                <SelectControl
                                    options={ [
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
                                    value={ControlValue.position}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            position: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            position: value,
                                        });
                                    }}
                                />
                            </div>
                            )}
                            {ControlValue.type === 'linear-gradient' && (
                            <>
                            <div className='orbi-range-controls'>
                                <div className='orbi-range-label'>
                                    {__("Angle", "orbi-blocks")}
                                </div>
                                <div className='orbi-units-container'>
                                    <Dropdown
                                        className="orbi-units-dropdown"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button variant="primary" className='orbi-units-button' style={{textTransform: "lowercase"}}>deg</Button>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='orbi-range-inner'>
                                <RangeControl
                                    value={ControlValue.angle}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            angle: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            angle: value,
                                        });
                                    }}
                                    min={0}
                                    max={360}
                                />
                            </div>
                            </>
                            )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
