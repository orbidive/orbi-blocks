const attributes = {
    yourId: {
        type: 'string',
    },
    image: {
        type: "string",
        selector: ".orbi-cta-inner-card",
    },
    imagePosition: {
        type: "string",
    },
    imageAttachment: {
        type: "string",
    },
    imageRepeat: {
        type: "string",
    },
    imageDisplaySize: {
        type: "string",
    },
    showSubTitle: {
        type: "boolean",
        default: true,
    },
    showTitle: {
        type: "boolean",
        default: true,
    },
    showDescription: {
        type: "boolean",
        default: true,
    },
    showButton:{
        type: 'boolean',
        default: true,
    },
    link: { 
        type: 'string', 
        default: ''
    },
    checkNewTab:{
        type: 'boolean',
        default: true,
    },
    hideDesktop:{
        type: 'boolean',
        default: false,
    },
    hideTablet:{
        type: 'boolean',
        default: false,
    },
    hideMobile:{
        type: 'boolean',
        default: false,
    },
    subTitle: { 
        type: 'string', 
        default: 'Get In Touch'
    },
    title: { 
        type: 'string', 
        default: 'Need Any Consultations Contact With Us'
    },
    description: { 
        type: 'string', 
        default: 'Aenean ut turpis blandit eros convallis congue sit amet a libero'
    },
    linkText: { 
        type: 'string', 
        default: 'Read More'
    },
    readMoreicon: { 
        type: 'string',
    },
    iconPosition: {
        type: 'string',
        default: 'after',
    },
    beforeIconSpacing: {
        default: {
            desktop: {
                val: undefined,
                unit: "px"
            },
            tablet:  {
                val: undefined,
                unit: "px"
            },
            mobile: {
                val: undefined,
                unit: "px"
            },
            resOption: "Desktop",
        },
        type: 'object',
    },
    afterIconSpacing: {
        default: {
            desktop: {
                val: undefined,
                unit: "px"
            },
            tablet:  {
                val: undefined,
                unit: "px"
            },
            mobile: {
                val: undefined,
                unit: "px"
            },
            resOption: "Desktop",
        },
        type: 'object',
    },
    backgroundGradientColor: {
        default: {
        colorOpt: 'gradient',
        colorOne: {
            enable: false,
            color: "#040524d9",
        },
        colorTwo: {
            enable: false,
            color: '#0036FF',
        },
        locationOne: 0,
        locationTwo: 100,
        type: 'linear-gradient',
        position: 'center center',
        angle: 180,
        },
        type: 'object',
    },
    ctaOpacity: {
        type: 'number',
        default: 1,
    },
    ctaBorder: {
        default: {
            type: "default",
            width: {
                desktop: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                tablet: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                mobile: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                resOption: "Desktop",
            },
            color: undefined,
        },
        type: 'object',
    },
    ctaBorderRadius: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    ctaMargin: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    ctaPadding: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    ctaBoxShadow: {
        default: {
            color: {
                enable: false,
                color: "",
            },
            horizontal: undefined,
            vertical: undefined,
            blur: undefined,
            spread: undefined,
            position: '',
            enable: false,
        },
        type: 'object',
    },
    subTitleAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
          },
        type: "object"
    },
    subTitleColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    subTitleMargin: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    subTitleTypography: {
        default: {
            fontSize: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            letterSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            wordSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            lineHeight: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
              },
            enable: false,
            fontFamily: "",
            fontWeight: "",
            fontStyle: "normal",
            fontTransform: "none",
            fontDecoration: "none",
        },
        type: 'object',
    }, 
    titleAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
          },
        type: "object"
    },
    titleColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    titleMargin: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    titleTypography: {
        default: {
            fontSize: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            letterSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            wordSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            lineHeight: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
              },
            enable: false,
            fontFamily: "",
            fontWeight: "",
            fontStyle: "normal",
            fontTransform: "none",
            fontDecoration: "none",
        },
        type: 'object',
    }, 
    desAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
          },
        type: "object"
    },
    desColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    desMargin: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    desTypography: {
        default: {
            fontSize: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            letterSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            wordSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            lineHeight: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
              },
            enable: false,
            fontFamily: "",
            fontWeight: "",
            fontStyle: "normal",
            fontTransform: "none",
            fontDecoration: "none",
        },
        type: 'object',
    }, 
    btnAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
          },
        type: "object"
    },
    btnBgColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    btnBgColorHover: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    btnColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    btnColorHover: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    btnBorder: {
        default: {
            type: "default",
            width: {
                desktop: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                tablet: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                mobile: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                resOption: "Desktop",
            },
            color: undefined,
        },
        type: 'object',
    },
    btnBorderHover: {
        default: {
            type: "default",
            width: {
                desktop: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                tablet: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                mobile: {
                    top: '',
                    left: '',
                    right: '',
                    bottom: '',
                    link: true,
                    unit: "px",
                },
                resOption: "Desktop",
            },
            color: undefined,
        },
        type: 'object',
    },
    btnBorderRadius: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    btnMargin: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    btnPadding: {
        type: 'object',
        default: {
            desktop: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            tablet: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            mobile: {
                top: '',
                left: '',
                right: '',
                bottom: '',
                link: true,
                unit: "px",
            },
            resOption: "Desktop",
        },
    },
    btnBoxShadow: {
        default: {
            color: {
                enable: false,
                color: "",
            },
            horizontal: undefined,
            vertical: undefined,
            blur: undefined,
            spread: undefined,
            position: '',
            enable: false,
        },
        type: 'object',
    },
    btnTypography: {
        default: {
            fontSize: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            letterSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            wordSpacing:{
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
            },
            lineHeight: {
                desktop: {
                    val: undefined,
                    unit: "px"
                },
                tablet:  {
                    val: undefined,
                    unit: "px"
                },
                mobile: {
                    val: undefined,
                    unit: "px"
                },
              },
            enable: false,
            fontFamily: "",
            fontWeight: "",
            fontStyle: "normal",
            fontTransform: "none",
            fontDecoration: "none",
        },
        type: 'object',
    }, 
};

export default attributes;