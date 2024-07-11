import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element';
import { TextControl, ToggleControl, PanelBody, Button, BaseControl, } from '@wordpress/components';
import '/assets/css/style.css';
import React from "react"; 
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import { ColorPickerControl } from './customColorPicker.js';
import icons from "./icons.js";

export function PriceTableRepeater(props) {

    const { attributes, setAttributes } = props;
    const { info = [], } = attributes;
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panelName) => {
        setActivePanel((prevPanel) => (prevPanel === panelName ? null : panelName));
    };

    const infoList = (value) => {
        return(
            value.sort((a, b) => a.index - b.index).map(infoItem => {
                return(
                    <div className="orbi-icon-picker">
                        <PanelBody
                            title={__(`${infoItem.feature}`, "orbi-blocks")}
                            opened={activePanel === `${infoItem.index}`} onToggle={() => togglePanel(`${infoItem.index}`)}
                        >
                            <BaseControl label="Feature" className="orbi-control-label">
                                <TextControl
                                    value={ infoItem.feature }
                                    onChange={ feature => {
                                    const newObject = Object.assign({}, infoItem, {
                                        feature: feature
                                    });
                                    setAttributes({
                                        info: [...info.filter(
                                            item => item.index != infoItem.index
                                        ), newObject]
                                    });
                                    } } 
                                />
                            </BaseControl>
                        <BaseControl label="Icon" className="orbi-control-label orbi-icon-picker">
                            <FontIconPicker 
                                icons={ icons }
                                value={ infoItem.icon } 
                                onChange={ icon => {
                                    const newObject = Object.assign({}, infoItem, {
                                        icon: icon
                                    });
                                    setAttributes({
                                        info: [...info.filter(
                                            item => item.index != infoItem.index
                                        ), newObject]
                                    });
                                    } }
                            />
                        </BaseControl>
                        <ColorPickerControl
                            values={infoItem.color}
                            onChange={ color => {
                                const newObject = Object.assign({}, infoItem, {
                                    color: color
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } }
                            label="Color"
                        />
                        <ColorPickerControl
                            values={infoItem.iconColor}
                            onChange={ iconColor => {
                                const newObject = Object.assign({}, infoItem, {
                                    iconColor: iconColor
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } }
                            label="Icon Color"
                        />
                        <ColorPickerControl
                            values={infoItem.bgColor}
                            onChange={ bgColor => {
                                const newObject = Object.assign({}, infoItem, {
                                    bgColor: bgColor
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } }
                            label="Background Color"
                        />
                        <ToggleControl
                            className="orbi-control-label"
                            label={__("Item Active", "orbi-blocks")}
                            onChange={ active => {
                                const newObject = Object.assign({}, infoItem, {
                                    active: active
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } } 
                            checked={infoItem.active}
                        />
                        <ToggleControl
                            className="orbi-control-label"
                            label={__("Add Url", "orbi-blocks")}
                            onChange={ addUrl => {
                                const newObject = Object.assign({}, infoItem, {
                                    addUrl: addUrl
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } } 
                            checked={infoItem.addUrl}
                        />
                        {infoItem.addUrl && (
                            <>
                            <BaseControl label="Link" className="orbi-control-label">
                                <TextControl
                                    value={ infoItem.link }
                                    placeholder="https://your-link.com"
                                    onChange={ link => {
                                    const newObject = Object.assign({}, infoItem, {
                                        link: link
                                    });
                                    setAttributes({
                                        info: [...info.filter(
                                            item => item.index != infoItem.index
                                        ), newObject]
                                    });
                                    } } 
                                />
                            </BaseControl>
                            <ToggleControl
                                className="orbi-control-label"
                                label={__("Open In New Tab", "orbi-blocks")}
                                onChange={ checkNewTab => {
                                    const newObject = Object.assign({}, infoItem, {
                                        checkNewTab: checkNewTab
                                    });
                                    setAttributes({
                                        info: [...info.filter(
                                            item => item.index != infoItem.index
                                        ), newObject]
                                    });
                                    } } 
                                checked={infoItem.checkNewTab}
                            />
                            </>
                        )}
                        </PanelBody>
                        <Button
                            className="remove-item"
                            onClick={ () => {
                                const newInfo = info.filter(item => item.index != infoItem.index).map(i => {
                                    if(i.index > infoItem.index){
                                        i.index -= 1;
                                    }
                                    return i;
                                } );
                                setAttributes({ info: newInfo });
                            } }
                            isLink isDestructive
                        >
                            Remove
                        </Button>
                    </div>
                )
            })
        )
    }
    return (
        <Fragment>
            {infoList(info)}
            <Button className="orbi-add-icons" onClick={ titleone => {
                setAttributes({
                    info: [...info, {
                        index: info.length,
                        icon: "fas fa-check",
                        color: "",
                        iconColor: "",
                        bgColor: "",
                        link: "",
                        feature: "Feature List Item",
                    }]
                });
            }}>
                Add Item
            </Button>
        </Fragment>
    )
}