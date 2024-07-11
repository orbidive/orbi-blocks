/**
 * Style
 */
import { CompileStyle } from '/src/components/compileStyle'; 
export function Style(props) {
    const { attributes, name: blockName } = props;
    const i = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    let allFonts = [
        attributes.subTitleTypography.fontFamily.value,
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
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a i`,
            type: {
                "margin-right": `${attributes.beforeIconSpacing.desktop.val}${attributes.beforeIconSpacing.desktop.unit}`,
                },
        }) : CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a i`,
            type: {
                "margin-left": `${attributes.afterIconSpacing.desktop.val}${attributes.afterIconSpacing.desktop.unit}`,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-inner-card`,
            type: {
                "background-image": `url('${attributes.image}')`,
                "background-position": attributes.imagePosition,
                "background-attachment": attributes.imageAttachment,
                "background-repeat": attributes.imageRepeat,
                "background-size": attributes.imageDisplaySize,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-inner-card:before`,
            type: {
                "dual-color": attributes.backgroundGradientColor,
                "opacity": attributes.ctaOpacity,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card`,
            type: {
                "margin": attributes.ctaMargin.desktop,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-inner-card`,
            type: {
                "border": attributes.ctaBorder,
                "border-radius": attributes.ctaBorderRadius.desktop,
                "box-shadow": attributes.ctaBoxShadow,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-content-card`,
            type: {
                "padding": attributes.ctaPadding.desktop,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card  .orbi-cta-card-subtitle`,
            type: {
                "text-align": `${attributes.subTitleAlignment.desktop}`,
                "color": attributes.subTitleColor,
                "margin": attributes.subTitleMargin.desktop,
                "typography": attributes.subTitleTypography
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-heading`,
            type: {
                "text-align": `${attributes.titleAlignment.desktop}`,
                "margin": attributes.titleMargin.desktop,
                "typography": attributes.titleTypography
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-heading`,
            type: {
                "color": attributes.titleColor,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-description`,
            type: {
                "text-align": `${attributes.desAlignment.desktop}`,
                "margin": attributes.desMargin.desktop,
                "typography": attributes.desTypography
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-description`,
            type: {
                "color": attributes.desColor,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-call-button`,
            type: {
                "justify-content": `${attributes.btnAlignment.desktop}`,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn`,
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
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn i`,
            type: {
                "color": attributes.btnColor,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn:hover`,
            type: {
                "background": attributes.btnBgColorHover,
                "color": attributes.btnColorHover,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn:hover i`,
            type: {
                "color": attributes.btnColorHover,
                },
        })}
        ${CompileStyle({
            selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn:hover`,
            type: {
                "border": attributes.btnBorderHover,
                "box-shadow": attributes.btnBoxShadowHover,
                },
        })}
        @media all and (max-width: 1024px){
            ${attributes.iconPosition === 'before' ? CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a i`,
                type: {
                    "margin-right": `${attributes.beforeIconSpacing.tablet.val}${attributes.beforeIconSpacing.tablet.unit}`,
                    },
            }) : CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a i`,
                type: {
                    "margin-left": `${attributes.afterIconSpacing.tablet.val}${attributes.afterIconSpacing.tablet.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card`,
                type: {
                    "margin": attributes.ctaMargin.tablet,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-inner-card`,
                type: {
                    "border-width": attributes.ctaBorder.width.tablet,
                    "border-radius": attributes.ctaBorderRadius.tablet,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-content-card`,
                type: {
                    "padding": attributes.ctaPadding.tablet,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card  .orbi-cta-card-subtitle`,
                type: {
                    "text-align": `${attributes.subTitleAlignment.tablet}`,
                    "margin": attributes.subTitleMargin.tablet,
                    "font-size": `${attributes.subTitleTypography.fontSize.tablet.val}${attributes.subTitleTypography.fontSize.tablet.unit}`,
                    "letter-spacing": `${attributes.subTitleTypography.letterSpacing.tablet.val}${attributes.subTitleTypography.letterSpacing.tablet.unit}`,
                    "word-spacing": `${attributes.subTitleTypography.wordSpacing.tablet.val}${attributes.subTitleTypography.wordSpacing.tablet.unit}`,
                    "line-height": `${attributes.subTitleTypography.lineHeight.tablet.val}${attributes.subTitleTypography.lineHeight.tablet.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-heading`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-description`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-call-button`,
                type: {
                    "justify-content": `${attributes.btnAlignment.tablet}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn:hover`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a i`,
                type: {
                    "margin-right": `${attributes.beforeIconSpacing.mobile.val}${attributes.beforeIconSpacing.mobile.unit}`,
                    },
            }) : CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a i`,
                type: {
                    "margin-left": `${attributes.afterIconSpacing.mobile.val}${attributes.afterIconSpacing.mobile.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card`,
                type: {
                    "margin": attributes.ctaMargin.mobile,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-inner-card`,
                type: {
                    "border-width": attributes.ctaBorder.width.mobile,
                    "border-radius": attributes.ctaBorderRadius.mobile,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-content-card`,
                type: {
                    "padding": attributes.ctaPadding.mobile,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card  .orbi-cta-card-subtitle`,
                type: {
                    "text-align": `${attributes.subTitleAlignment.mobile}`,
                    "margin": attributes.subTitleMargin.mobile,
                    "font-size": `${attributes.subTitleTypography.fontSize.mobile.val}${attributes.subTitleTypography.fontSize.mobile.unit}`,
                    "letter-spacing": `${attributes.subTitleTypography.letterSpacing.mobile.val}${attributes.subTitleTypography.letterSpacing.mobile.unit}`,
                    "word-spacing": `${attributes.subTitleTypography.wordSpacing.mobile.val}${attributes.subTitleTypography.wordSpacing.mobile.unit}`,
                    "line-height": `${attributes.subTitleTypography.lineHeight.mobile.val}${attributes.subTitleTypography.lineHeight.mobile.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-heading`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-description`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-call-button`,
                type: {
                    "justify-content": `${attributes.btnAlignment.mobile}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn`,
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
                selector: `.orbi-block-container-${attributes.yourId} .orbi-cta.orbi-cta-card .orbi-cta-card-read-more a.orbi-cta-btn:hover`,
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