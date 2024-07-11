/**
 * Style
 */
import { CompileStyle } from '/src/components/compileStyle'; 
export function Style(props) {
    const { attributes, setAttributes, name: blockName } = props;
    const i = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    let allFonts = [
        attributes.titleTypography.fontFamily.value,
        attributes.desTypography.fontFamily.value,
        attributes.btnTypography.fontFamily.value,
    ];
    const googleFonts = () => {
        var fonts = '';
        allFonts.map((val) => {
            if(val !== undefined && val !== "undefined" && val !== "" ){
                var font=val.replace(/\s+/g, '+');
                fonts += `@import url('https://fonts.googleapis.com/css?family=` + `${font}` + `${i}');`
            }
        });
        return fonts;
    }
    return(
        <style >
            {` ${googleFonts()}
            ${attributes.iconPosition === 'before' ? CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a i`,
                type: {
                    "margin-right": `${attributes.beforeIconSpacing.desktop.val}${attributes.beforeIconSpacing.desktop.unit}`,
                    },
            }) : CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a i`,
                type: {
                    "margin-left": `${attributes.afterIconSpacing.desktop.val}${attributes.afterIconSpacing.desktop.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card`,
                type: {
                    "dual-color": attributes.backgroundGradientColor,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:before`,
                type: {
                    "dual-color": attributes.backgroundGradientColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card`,
                type: {
                    "border": attributes.serviceBorder,
                    "border-radius": attributes.serviceBorderRadius.desktop,
                    "padding": attributes.servicePadding.desktop,
                    "margin": attributes.serviceMargin.desktop,
                    "box-shadow": attributes.serviceBoxShadow,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover`,
                type: {
                    "border": attributes.serviceBorderHover,
                    "box-shadow": attributes.serviceBoxShadowHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon`,
                type: {
                    "justify-content": `${attributes.iconAlignment.desktop}`,
                    "margin": attributes.iconMargin.desktop,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon .icon`,
                type: {
                    "dual-color": attributes.iconBgColor,
                    "color": attributes.iconColor,
                    "border": attributes.iconBorder,
                    "border-radius": attributes.iconBorderRadius.desktop,
                    "width": `${attributes.iconWidth.desktop.val}${attributes.iconWidth.desktop.unit}`,
                    "height": `${attributes.iconWidth.desktop.val}${attributes.iconWidth.desktop.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon .icon i`,
                type: {
                    "font-size": `${attributes.iconSize.desktop.val}${attributes.iconSize.desktop.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-icon .icon`,
                type: {
                    "dual-color": attributes.iconBgColorHover,
                    "color": attributes.iconColorHover,
                    "border": attributes.iconBorderHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-heading`,
                type: {
                    "text-align": `${attributes.titleAlignment.desktop}`,
                    "margin": attributes.titleMargin.desktop,
                    "typography": attributes.titleTypography
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-heading`,
                type: {
                    "color": attributes.titleColor,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-heading`,
                type: {
                    "color": attributes.titleColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-description`,
                type: {
                    "text-align": `${attributes.desAlignment.desktop}`,
                    "margin": attributes.desMargin.desktop,
                    "typography": attributes.desTypography
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-description`,
                type: {
                    "color": attributes.desColor,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-description`,
                type: {
                    "color": attributes.desColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more`,
                type: {
                    "justify-content": `${attributes.btnAlignment.desktop}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more`,
                type: {
                    "background": attributes.btnBgColor,
                    "color": attributes.btnColor,
                    "typography": attributes.btnTypography,
                    "border": attributes.btnBorder,
                    "border-radius": attributes.btnBorderRadius.desktop,
                    "padding": attributes.btnPadding.desktop,
                    "margin": attributes.btnMargin.desktop,
                    "box-shadow": attributes.btnBoxShadow,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more i`,
                type: {
                    "color": attributes.btnColor,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-read-more a.more`,
                type: {
                    "background": attributes.btnBgColorHover,
                    "color": attributes.btnColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-read-more a.more i`,
                type: {
                    "color": attributes.btnColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more:hover`,
                type: {
                    "border": attributes.btnBorderHover,
                    "box-shadow": attributes.btnBoxShadowHover,
                    },
            })}
            @media all and (max-width: 1024px){
                ${attributes.iconPosition === 'before' ? CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a i`,
                    type: {
                        "margin-right": `${attributes.beforeIconSpacing.tablet.val}${attributes.beforeIconSpacing.tablet.unit}`,
                        },
                }) : CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a i`,
                    type: {
                        "margin-left": `${attributes.afterIconSpacing.tablet.val}${attributes.afterIconSpacing.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card`,
                    type: {
                        "border-width": attributes.serviceBorder.width.tablet,
                        "border-radius": attributes.serviceBorderRadius.tablet,
                        "padding": attributes.servicePadding.tablet,
                        "margin": attributes.serviceMargin.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover`,
                    type: {
                        "border-width": attributes.serviceBorderHover.width.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon`,
                    type: {
                        "justify-content": `${attributes.iconAlignment.tablet}`,
                        "margin": attributes.iconMargin.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon .icon`,
                    type: {
                        "border-radius": attributes.iconBorderRadius.tablet,
                        "border-width": attributes.iconBorder.width.tablet,
                        "width": `${attributes.iconWidth.tablet.val}${attributes.iconWidth.tablet.unit}`,
                        "height": `${attributes.iconWidth.tablet.val}${attributes.iconWidth.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon .icon i`,
                    type: {
                        "font-size": `${attributes.iconSize.tablet.val}${attributes.iconSize.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-icon .icon`,
                    type: {
                        "border-width": attributes.iconBorderHover.width.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-heading`,
                    type: {
                        "text-align": `${attributes.titleAlignment.tablet}`,
                        "margin": attributes.titleMargin.tablet,
                        "font-size": `${attributes.titleTypography.fontSize.tablet.val}${attributes.titleTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.titleTypography.letterSpacing.tablet.val}${attributes.titleTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.titleTypography.wordSpacing.tablet.val}${attributes.titleTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.titleTypography.lineHeight.tablet.val}${attributes.titleTypography.lineHeight.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-description`,
                    type: {
                        "text-align": `${attributes.desAlignment.tablet}`,
                        "margin": attributes.desMargin.tablet,
                        "font-size": `${attributes.desTypography.fontSize.tablet.val}${attributes.desTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.desTypography.letterSpacing.tablet.val}${attributes.desTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.desTypography.wordSpacing.tablet.val}${attributes.desTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.desTypography.lineHeight.tablet.val}${attributes.desTypography.lineHeight.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more`,
                    type: {
                        "justify-content": `${attributes.btnAlignment.tablet}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more`,
                    type: {
                        "font-size": `${attributes.btnTypography.fontSize.tablet.val}${attributes.btnTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.btnTypography.letterSpacing.tablet.val}${attributes.btnTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.btnTypography.wordSpacing.tablet.val}${attributes.btnTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.btnTypography.lineHeight.tablet.val}${attributes.btnTypography.lineHeight.tablet.unit}`,
                        "border-width": attributes.btnBorder.width.tablet,
                        "border-radius": attributes.btnBorderRadius.tablet,
                        "padding": attributes.btnPadding.tablet,
                        "margin": attributes.btnMargin.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more:hover`,
                    type: {
                        "border-width": attributes.btnBorderHover.width.tablet,
                        },
                })}
            }
            @media all and (max-width: 767px){
                ${CompileStyle({
                    selector: `.wp-block .orbi-block-container-${attributes.yourId}.hidden-mobile`,
                    type: {
                        "display": "block",
                        "opacity": "0.5"
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-block-container-${attributes.yourId}.hidden-mobile`,
                    type: {
                        "display": "none",
                        },
                })}
                ${attributes.iconPosition === 'before' ? CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a i`,
                    type: {
                        "margin-right": `${attributes.beforeIconSpacing.mobile.val}${attributes.beforeIconSpacing.mobile.unit}`,
                        },
                }) : CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a i`,
                    type: {
                        "margin-left": `${attributes.afterIconSpacing.mobile.val}${attributes.afterIconSpacing.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card`,
                    type: {
                        "border-width": attributes.serviceBorder.width.mobile,
                        "border-radius": attributes.serviceBorderRadius.mobile,
                        "padding": attributes.servicePadding.mobile,
                        "margin": attributes.serviceMargin.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover`,
                    type: {
                        "border-width": attributes.serviceBorderHover.width.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon`,
                    type: {
                        "justify-content": `${attributes.iconAlignment.mobile}`,
                        "margin": attributes.iconMargin.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon .icon`,
                    type: {
                        "border-radius": attributes.iconBorderRadius.mobile,
                        "border-width": attributes.iconBorder.width.mobile,
                        "width": `${attributes.iconWidth.mobile.val}${attributes.iconWidth.mobile.unit}`,
                        "height": `${attributes.iconWidth.mobile.val}${attributes.iconWidth.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-icon .icon i`,
                    type: {
                        "font-size": `${attributes.iconSize.mobile.val}${attributes.iconSize.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card:hover .orbi-service-card-icon .icon`,
                    type: {
                        "border-width": attributes.iconBorderHover.width.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-heading`,
                    type: {
                        "text-align": `${attributes.titleAlignment.mobile}`,
                        "margin": attributes.titleMargin.mobile,
                        "font-size": `${attributes.titleTypography.fontSize.mobile.val}${attributes.titleTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.titleTypography.letterSpacing.mobile.val}${attributes.titleTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.titleTypography.wordSpacing.mobile.val}${attributes.titleTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.titleTypography.lineHeight.mobile.val}${attributes.titleTypography.lineHeight.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-description`,
                    type: {
                        "text-align": `${attributes.desAlignment.mobile}`,
                        "margin": attributes.desMargin.mobile,
                        "font-size": `${attributes.desTypography.fontSize.mobile.val}${attributes.desTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.desTypography.letterSpacing.mobile.val}${attributes.desTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.desTypography.wordSpacing.mobile.val}${attributes.desTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.desTypography.lineHeight.mobile.val}${attributes.desTypography.lineHeight.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more`,
                    type: {
                        "justify-content": `${attributes.btnAlignment.mobile}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more`,
                    type: {
                        "border-width": attributes.btnBorder.width.mobile,
                        "border-radius": attributes.btnBorderRadius.mobile,
                        "padding": attributes.btnPadding.mobile,
                        "margin": attributes.btnMargin.mobile,
                        "font-size": `${attributes.btnTypography.fontSize.mobile.val}${attributes.btnTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.btnTypography.letterSpacing.mobile.val}${attributes.btnTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.btnTypography.wordSpacing.mobile.val}${attributes.btnTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.btnTypography.lineHeight.mobile.val}${attributes.btnTypography.lineHeight.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-service-wapper-${attributes.yourId}.orbi-service-card .orbi-service-card-read-more a.more:hover`,
                    type: {
                        "border-width": attributes.btnBorderHover.width.mobile,
                        },
                })}
            }
            @media screen and (min-width: 1024px){
                ${CompileStyle({
                    selector: `.wp-block .orbi-block-container-${attributes.yourId}.hidden-desktop`,
                    type: {
                        "display": "block",
                        "opacity": "0.5"
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-block-container-${attributes.yourId}.hidden-desktop`,
                    type: {
                        "display": "none",
                        },
                })}
            }
            @media screen and (max-width: 1024px) and (min-width: 767px){
                ${CompileStyle({
                    selector: `.wp-block .orbi-block-container-${attributes.yourId}.hidden-tablet`,
                    type: {
                        "display": "block",
                        "opacity": "0.5"
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-block-container-${attributes.yourId}.hidden-tablet`,
                    type: {
                        "display": "none",
                        },
                })}
            }
            `}
        </style>
    );
}           