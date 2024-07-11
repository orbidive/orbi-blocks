/**
 * Style
 */
import { CompileStyle } from '/src/components/compileStyle'; 
export function Style(props) {
    const { attributes, name: blockName } = props;
    const i = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    let allFonts = [
        attributes.ribbonTypography.fontFamily.value,
        attributes.planNameTypography.fontFamily.value,
        attributes.currencyTypography.fontFamily.value,
        attributes.priceTypography.fontFamily.value,
        attributes.durationTypography.fontFamily.value,
        attributes.saleTypography.fontFamily.value,
        attributes.featureTypography.fontFamily.value,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-price-card .orbi-price-card-read-more a i`,
                type: {
                    "margin-right": `${attributes.beforeIconSpacing.desktop.val}${attributes.beforeIconSpacing.desktop.unit}`,
                    },
            }) : CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-price-card .orbi-price-card-read-more a i`,
                type: {
                    "margin-left": `${attributes.afterIconSpacing.desktop.val}${attributes.afterIconSpacing.desktop.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card`,
                type: {
                    "background": attributes.priceBoxBgColor,
                    "border": attributes.priceBoxBorderType,
                    "border-radius": attributes.priceBoxBorderRadius.desktop,
                    "padding": attributes.priceBoxPadding.desktop,
                    "margin": attributes.priceBoxMargin.desktop,
                    "box-shadow": attributes.priceBoxShadow,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card span.orbi-price-card-ribbon`,
                type: {
                    "background": attributes.ribbonBgColor,
                    "color": attributes.ribbonColor,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card span.orbi-price-card-ribbon`,
                type: {
                    "typography": attributes.ribbonTypography,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-heading`,
                type: {
                    "text-align": `${attributes.planNameAlignment.desktop}`,
                    "typography": attributes.planNameTypography,
                    "color": attributes.planNameColor,
                    "margin": attributes.planNameMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-plan`,
                type: {
                    "text-align": `${attributes.pricePlanAlignment.desktop}`,
                    "margin": attributes.pricePlanMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sign`,
                type: {
                    "typography": attributes.currencyTypography,
                    "color": attributes.currencyColor,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-value`,
                type: {
                    "typography": attributes.priceTypography,
                    "color": attributes.priceColor,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-duration`,
                type: {
                    "typography": attributes.durationTypography,
                    "color": attributes.durationColor,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale`,
                type: {
                    "color": attributes.saleColor,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale, .price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale span.orbi-currency-sign`,
                type: {
                    "typography": attributes.saleTypography,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-icon`,
                type: {
                    "justify-content": `${attributes.iconAlignment.desktop}`,
                    "margin": attributes.iconMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-icon .icon`,
                type: {
                    "background": attributes.iconBgColor,
                    "color": attributes.iconColor,
                    "border": attributes.iconBorderType,
                    "border-radius": attributes.iconBorderRadius.desktop,
                    "box-shadow": attributes.iconShadow,
                    "width": `${attributes.iconWidth.desktop.val}${attributes.iconWidth.desktop.unit}`,
                    "height": `${attributes.iconWidth.desktop.val}${attributes.iconWidth.desktop.unit}`,
                    "font-size": `${attributes.iconSize.desktop.val}${attributes.iconSize.desktop.unit}`,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-inner-card`,
                type: {
                    "padding-top": `${attributes.featureTopSpacing.desktop.val}${attributes.featureTopSpacing.desktop.unit}`,
                    "padding-bottom": `${attributes.featureBottomSpacing.desktop.val}${attributes.featureBottomSpacing.desktop.unit}`,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature a`,
                type: {
                    "color": attributes.featureColor,
                    "typography": attributes.featureTypography,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature i`,
                type: {
                    "color": attributes.featureIconColor,
                    "font-size": `${attributes.featureIconSize.desktop.val}${attributes.featureIconSize.desktop.unit}`,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature`,
                type: {
                    "border": attributes.featureBorderType,
                    "padding": attributes.featurePadding.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more`,
                type: {
                    "text-align": `${attributes.btnAlignment.desktop}`,
                    },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a`,
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
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a i`,
                type: {
                    "color": attributes.btnColor,
                    },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a:hover`,
                type: {
                    "background": attributes.btnBgColorHover,
                    "color": attributes.btnColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a:hover i`,
                type: {
                    "color": attributes.btnColorHover,
                    },
            })}
            ${CompileStyle({
                selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a:hover`,
                type: {
                    "border": attributes.btnBorderHover,
                    "box-shadow": attributes.btnBoxShadowHover,
                    },
            })}
            
            @media all and (max-width: 1024px){
                ${attributes.iconPosition === 'before' ? CompileStyle({
                    selector: `.orbi-block-container-${attributes.yourId} .orbi-price-card .orbi-price-card-read-more a i`,
                    type: {
                        "margin-right": `${attributes.beforeIconSpacing.tablet.val}${attributes.beforeIconSpacing.tablet.unit}`,
                        },
                }) : CompileStyle({
                    selector: `.orbi-block-container-${attributes.yourId} .orbi-price-card .orbi-price-card-read-more a i`,
                    type: {
                        "margin-left": `${attributes.afterIconSpacing.tablet.val}${attributes.afterIconSpacing.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card`,
                    type: {
                        "border-width": attributes.priceBoxBorderType.width.tablet,
                        "border-radius": attributes.priceBoxBorderRadius.tablet,
                        "padding": attributes.priceBoxPadding.tablet,
                        "margin": attributes.priceBoxMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card span.orbi-price-card-ribbon`,
                    type: {
                        "font-size": `${attributes.ribbonTypography.fontSize.tablet.val}${attributes.ribbonTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.ribbonTypography.letterSpacing.tablet.val}${attributes.ribbonTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.ribbonTypography.wordSpacing.tablet.val}${attributes.ribbonTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.ribbonTypography.lineHeight.tablet.val}${attributes.ribbonTypography.lineHeight.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-heading`,
                    type: {
                        "text-align": `${attributes.planNameAlignment.tablet}`,
                        "font-size": `${attributes.planNameTypography.fontSize.tablet.val}${attributes.planNameTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.planNameTypography.letterSpacing.tablet.val}${attributes.planNameTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.planNameTypography.wordSpacing.tablet.val}${attributes.planNameTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.planNameTypography.lineHeight.tablet.val}${attributes.planNameTypography.lineHeight.tablet.unit}`,
                        "margin": attributes.planNameMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-plan`,
                    type: {
                        "text-align": `${attributes.pricePlanAlignment.tablet}`,
                        "margin": attributes.pricePlanMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sign`,
                    type: {
                        "font-size": `${attributes.currencyTypography.fontSize.tablet.val}${attributes.currencyTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.currencyTypography.letterSpacing.tablet.val}${attributes.currencyTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.currencyTypography.wordSpacing.tablet.val}${attributes.currencyTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.currencyTypography.lineHeight.tablet.val}${attributes.currencyTypography.lineHeight.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-value`,
                    type: {
                        "font-size": `${attributes.priceTypography.fontSize.tablet.val}${attributes.priceTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.priceTypography.letterSpacing.tablet.val}${attributes.priceTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.priceTypography.wordSpacing.tablet.val}${attributes.priceTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.priceTypography.lineHeight.tablet.val}${attributes.priceTypography.lineHeight.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-duration`,
                    type: {
                        "font-size": `${attributes.durationTypography.fontSize.tablet.val}${attributes.durationTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.durationTypography.letterSpacing.tablet.val}${attributes.durationTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.durationTypography.wordSpacing.tablet.val}${attributes.durationTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.durationTypography.lineHeight.tablet.val}${attributes.durationTypography.lineHeight.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale, .price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale span.orbi-currency-sign`,
                    type: {
                        "font-size": `${attributes.saleTypography.fontSize.tablet.val}${attributes.saleTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.saleTypography.letterSpacing.tablet.val}${attributes.saleTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.saleTypography.wordSpacing.tablet.val}${attributes.saleTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.saleTypography.lineHeight.tablet.val}${attributes.saleTypography.lineHeight.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-icon`,
                    type: {
                        "justify-content": `${attributes.iconAlignment.tablet}`,
                        "margin": attributes.iconMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-icon .icon`,
                    type: {
                        "border-width": attributes.iconBorderType.width.tablet,
                        "border-radius": attributes.iconBorderRadius.tablet,
                        "width": `${attributes.iconWidth.tablet.val}${attributes.iconWidth.tablet.unit}`,
                        "height": `${attributes.iconWidth.tablet.val}${attributes.iconWidth.tablet.unit}`,
                        "font-size": `${attributes.iconSize.tablet.val}${attributes.iconSize.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-inner-card`,
                    type: {
                        "padding-top": `${attributes.featureTopSpacing.tablet.val}${attributes.featureTopSpacing.tablet.unit}`,
                        "padding-bottom": `${attributes.featureBottomSpacing.tablet.val}${attributes.featureBottomSpacing.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature a`,
                    type: {
                        "font-size": `${attributes.featureTypography.fontSize.tablet.val}${attributes.featureTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.featureTypography.letterSpacing.tablet.val}${attributes.featureTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.featureTypography.wordSpacing.tablet.val}${attributes.featureTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.featureTypography.lineHeight.tablet.val}${attributes.featureTypography.lineHeight.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature i`,
                    type: {
                        "font-size": `${attributes.featureIconSize.tablet.val}${attributes.featureIconSize.tablet.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature`,
                    type: {
                        "border-width": attributes.featureBorderType.width.tablet,
                        "padding": attributes.featurePadding.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more`,
                    type: {
                        "text-align": `${attributes.btnAlignment.tablet}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a`,
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
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a:hover`,
                    type: {
                        "border-width": attributes.btnBorderHover.width.tablet,
                        },
                })}
            }

            @media all and (max-width: 767px) {
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
                    selector: `.orbi-block-container-${attributes.yourId} .orbi-price-card .orbi-price-card-read-more a i`,
                    type: {
                        "margin-right": `${attributes.beforeIconSpacing.mobile.val}${attributes.beforeIconSpacing.mobile.unit}`,
                        },
                }) : CompileStyle({
                    selector: `.orbi-block-container-${attributes.yourId} .orbi-price-card .orbi-price-card-read-more a i`,
                    type: {
                        "margin-left": `${attributes.afterIconSpacing.mobile.val}${attributes.afterIconSpacing.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card`,
                    type: {
                        "border-width": attributes.priceBoxBorderType.width.mobile,
                        "border-radius": attributes.priceBoxBorderRadius.mobile,
                        "padding": attributes.priceBoxPadding.mobile,
                        "margin": attributes.priceBoxMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card span.orbi-price-card-ribbon`,
                    type: {
                        "font-size": `${attributes.ribbonTypography.fontSize.mobile.val}${attributes.ribbonTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.ribbonTypography.letterSpacing.mobile.val}${attributes.ribbonTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.ribbonTypography.wordSpacing.mobile.val}${attributes.ribbonTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.ribbonTypography.lineHeight.mobile.val}${attributes.ribbonTypography.lineHeight.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-heading`,
                    type: {
                        "text-align": `${attributes.planNameAlignment.mobile}`,
                        "font-size": `${attributes.planNameTypography.fontSize.mobile.val}${attributes.planNameTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.planNameTypography.letterSpacing.mobile.val}${attributes.planNameTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.planNameTypography.wordSpacing.mobile.val}${attributes.planNameTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.planNameTypography.lineHeight.mobile.val}${attributes.planNameTypography.lineHeight.mobile.unit}`,
                        "margin": attributes.planNameMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-plan`,
                    type: {
                        "text-align": `${attributes.pricePlanAlignment.mobile}`,
                        "margin": attributes.pricePlanMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sign`,
                    type: {
                        "font-size": `${attributes.currencyTypography.fontSize.mobile.val}${attributes.currencyTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.currencyTypography.letterSpacing.mobile.val}${attributes.currencyTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.currencyTypography.wordSpacing.mobile.val}${attributes.currencyTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.currencyTypography.lineHeight.mobile.val}${attributes.currencyTypography.lineHeight.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-value`,
                    type: {
                        "font-size": `${attributes.priceTypography.fontSize.mobile.val}${attributes.priceTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.priceTypography.letterSpacing.mobile.val}${attributes.priceTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.priceTypography.wordSpacing.mobile.val}${attributes.priceTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.priceTypography.lineHeight.mobile.val}${attributes.priceTypography.lineHeight.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-duration`,
                    type: {
                        "font-size": `${attributes.durationTypography.fontSize.mobile.val}${attributes.durationTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.durationTypography.letterSpacing.mobile.val}${attributes.durationTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.durationTypography.wordSpacing.mobile.val}${attributes.durationTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.durationTypography.lineHeight.mobile.val}${attributes.durationTypography.lineHeight.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale, .price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-currency-sale span.orbi-currency-sign`,
                    type: {
                        "font-size": `${attributes.saleTypography.fontSize.mobile.val}${attributes.saleTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.saleTypography.letterSpacing.mobile.val}${attributes.saleTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.saleTypography.wordSpacing.mobile.val}${attributes.saleTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.saleTypography.lineHeight.mobile.val}${attributes.saleTypography.lineHeight.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-icon`,
                    type: {
                        "justify-content": `${attributes.iconAlignment.mobile}`,
                        "margin": attributes.iconMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-icon .icon`,
                    type: {
                        "border-width": attributes.iconBorderType.width.mobile,
                        "border-radius": attributes.iconBorderRadius.mobile,
                        "width": `${attributes.iconWidth.mobile.val}${attributes.iconWidth.mobile.unit}`,
                        "height": `${attributes.iconWidth.mobile.val}${attributes.iconWidth.mobile.unit}`,
                        "font-size": `${attributes.iconSize.mobile.val}${attributes.iconSize.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-inner-card`,
                    type: {
                        "padding-top": `${attributes.featureTopSpacing.mobile.val}${attributes.featureTopSpacing.mobile.unit}`,
                        "padding-bottom": `${attributes.featureBottomSpacing.mobile.val}${attributes.featureBottomSpacing.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature a`,
                    type: {
                        "font-size": `${attributes.featureTypography.fontSize.mobile.val}${attributes.featureTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.featureTypography.letterSpacing.mobile.val}${attributes.featureTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.featureTypography.wordSpacing.mobile.val}${attributes.featureTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.featureTypography.lineHeight.mobile.val}${attributes.featureTypography.lineHeight.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature i`,
                    type: {
                        "font-size": `${attributes.featureIconSize.mobile.val}${attributes.featureIconSize.mobile.unit}`,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-feature`,
                    type: {
                        "border-width": attributes.featureBorderType.width.mobile,
                        "padding": attributes.featurePadding.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more`,
                    type: {
                        "text-align": `${attributes.btnAlignment.mobile}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a`,
                    type: {
                        "font-size": `${attributes.btnTypography.fontSize.mobile.val}${attributes.btnTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.btnTypography.letterSpacing.mobile.val}${attributes.btnTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.btnTypography.wordSpacing.mobile.val}${attributes.btnTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.btnTypography.lineHeight.mobile.val}${attributes.btnTypography.lineHeight.mobile.unit}`,
                        "border-width": attributes.btnBorder.width.mobile,
                        "border-radius": attributes.btnBorderRadius.mobile,
                        "padding": attributes.btnPadding.mobile,
                        "margin": attributes.btnMargin.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.price-wapper-${attributes.yourId}.orbi-price-card .orbi-price-card-read-more a:hover`,
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
