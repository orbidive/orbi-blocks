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
        attributes.degTypography.fontFamily.value,
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
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card`,
                type: {
                    "background": attributes.testimonialBgColor,
                    "border": attributes.testimonialBorder,
                    "border-radius": attributes.testimonialBorderRadius.desktop,
                    "padding": attributes.testimonialPadding.desktop,
                    "margin": attributes.testimonialMargin.desktop,
                    "box-shadow": attributes.testimonialBoxShadow,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-star`,
                type: {
                    "color": attributes.ratingColor,
                    "font-size": `${attributes.ratingSize.desktop.val}${attributes.ratingSize.desktop.unit}`,
                    "text-align": `${attributes.ratingAlignment.desktop}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-star i`,
                type: {
                    "margin": attributes.ratingMargin.desktop,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-icon`,
                type: {
                    "background": attributes.iconBgColor,
                    "border-radius": attributes.iconBorderRadius.desktop,
                    "margin": attributes.iconMargin.desktop,
                    "width": `${attributes.iconWidth.desktop.val}${attributes.iconWidth.desktop.unit}`,
                    "height": `${attributes.iconWidth.desktop.val}${attributes.iconWidth.desktop.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-icon i`,
                type: {
                    "color": attributes.iconColor,
                    "font-size": `${attributes.iconSize.desktop.val}${attributes.iconSize.desktop.unit}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-description`,
                type: {
                    "text-align": `${attributes.desAlignment.desktop}`,
                    "color": attributes.desColor,
                    "margin": attributes.desMargin.desktop,
                    "typography": attributes.desTypography
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-image`,
                type: {
                    "margin": attributes.imageMargin.desktop,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.testimonial_three.orbi-testimonial-card .sub-qute`,
                type: {
                    "justify-content": `${attributes.imageAlignment.desktop}`,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-image img`,
                type: {
                    "border-radius": attributes.imageBorderRadius.desktop,
                    "width": `${attributes.imageWidth.desktop.val}${attributes.imageWidth.desktop.unit}`,
                    "height": `${attributes.imageHeight.desktop.val}${attributes.imageHeight.desktop.unit}`,
                    "border": attributes.imageBorder,
                    "box-shadow": attributes.imageBoxShadow,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-name`,
                type: {
                    "text-align": `${attributes.titleAlignment.desktop}`,
                    "margin": attributes.titleMargin.desktop,
                    "typography": attributes.titleTypography
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-name a`,
                type: {
                    "color": attributes.titleColor,
                    },
            })}
            ${CompileStyle({
                selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-designation`,
                type: {
                    "text-align": `${attributes.degAlignment.desktop}`,
                    "color": attributes.degColor,
                    "margin": attributes.degMargin.desktop,
                    "typography": attributes.degTypography
                    },
            })}

            @media all and (max-width: 1024px){
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card`,
                    type: {
                        "border-width": attributes.testimonialBorder.width.tablet,
                        "border-radius": attributes.testimonialBorderRadius.tablet,
                        "padding": attributes.testimonialPadding.tablet,
                        "margin": attributes.testimonialMargin.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-star`,
                    type: {
                        "font-size": `${attributes.ratingSize.tablet.val}${attributes.ratingSize.tablet.unit}`,
                        "text-align": `${attributes.ratingAlignment.tablet}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-star i`,
                    type: {
                        "margin": attributes.ratingMargin.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-icon`,
                    type: {
                        "border-radius": attributes.iconBorderRadius.tablet,
                        "margin": attributes.iconMargin.tablet,
                        "width": `${attributes.iconWidth.tablet.val}${attributes.iconWidth.tablet.unit}`,
                        "height": `${attributes.iconWidth.tablet.val}${attributes.iconWidth.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-icon i`,
                    type: {
                        "font-size": `${attributes.iconSize.tablet.val}${attributes.iconSize.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-description`,
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
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-image`,
                    type: {
                        "margin": attributes.imageMargin.tablet,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.testimonial_three.orbi-testimonial-card .sub-qute`,
                    type: {
                        "justify-content": `${attributes.imageAlignment.tablet}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-image img`,
                    type: {
                        "border-radius": attributes.imageBorderRadius.tablet,
                        "border-width": attributes.imageBorder.width.tablet,
                        "width": `${attributes.imageWidth.tablet.val}${attributes.imageWidth.tablet.unit}`,
                        "height": `${attributes.imageHeight.tablet.val}${attributes.imageHeight.tablet.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-name`,
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
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-designation`,
                    type: {
                        "text-align": `${attributes.degAlignment.tablet}`,
                        "margin": attributes.degMargin.tablet,
                        "font-size": `${attributes.degTypography.fontSize.tablet.val}${attributes.degTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.degTypography.letterSpacing.tablet.val}${attributes.degTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.degTypography.wordSpacing.tablet.val}${attributes.degTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.degTypography.lineHeight.tablet.val}${attributes.degTypography.lineHeight.tablet.unit}`,
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
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card`,
                    type: {
                        "border-width": attributes.testimonialBorder.width.mobile,
                        "border-radius": attributes.testimonialBorderRadius.mobile,
                        "padding": attributes.testimonialPadding.mobile,
                        "margin": attributes.testimonialMargin.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-star`,
                    type: {
                        "font-size": `${attributes.ratingSize.mobile.val}${attributes.ratingSize.mobile.unit}`,
                        "text-align": `${attributes.ratingAlignment.mobile}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-star i`,
                    type: {
                        "margin": attributes.ratingMargin.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-icon`,
                    type: {
                        "border-radius": attributes.iconBorderRadius.mobile,
                        "margin": attributes.iconMargin.mobile,
                        "width": `${attributes.iconWidth.mobile.val}${attributes.iconWidth.mobile.unit}`,
                        "height": `${attributes.iconWidth.mobile.val}${attributes.iconWidth.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .testi-icon i`,
                    type: {
                        "font-size": `${attributes.iconSize.mobile.val}${attributes.iconSize.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-description`,
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
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-image`,
                    type: {
                        "margin": attributes.imageMargin.mobile,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.testimonial_three.orbi-testimonial-card .sub-qute`,
                    type: {
                        "justify-content": `${attributes.imageAlignment.mobile}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-image img`,
                    type: {
                        "border-radius": attributes.imageBorderRadius.mobile,
                        "border-width": attributes.imageBorder.width.mobile,
                        "width": `${attributes.imageWidth.mobile.val}${attributes.imageWidth.mobile.unit}`,
                        "height": `${attributes.imageHeight.mobile.val}${attributes.imageHeight.mobile.unit}`,
                        },
                })}
                ${CompileStyle({
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-name`,
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
                    selector: `.orbi-testimonial-wrapper-${attributes.yourId}.orbi-testimonial-card .orbi-testimonial-card-designation`,
                    type: {
                        "text-align": `${attributes.degAlignment.mobile}`,
                        "margin": attributes.degMargin.mobile,
                        "font-size": `${attributes.degTypography.fontSize.mobile.val}${attributes.degTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.degTypography.letterSpacing.mobile.val}${attributes.degTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.degTypography.wordSpacing.mobile.val}${attributes.degTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.degTypography.lineHeight.mobile.val}${attributes.degTypography.lineHeight.mobile.unit}`,
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
            `
        }</style>
    );
}