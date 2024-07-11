
const attributes = {
    yourId: {
        type: 'string',
    },
    showTitle: {
        type: "boolean",
        default: true,
    },
    showDescription: {
        type: "boolean",
        default: true,
    },
    showIcon: {
        type: "boolean",
        default: true,
    },
    showReadMore:{
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
    icon: { 
        type: 'string', 
        default: 'fa fa-star'
    },
    title: { 
        type: 'string', 
        default: 'Consultancy & Advising'
    },
    description: { 
        type: 'string', 
        default: 'A set of certitudes based on deductions founded on false premise guerrilla marketing'
    },
    linkText: { 
        type: 'string', 
        default: 'Read More'
    },
    readMoreicon: { 
        type: 'string', 
        default: 'fa fa-arrow-right'
    },
    iconPosition: {
        type: 'string',
        default: 'after'
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
        colorOpt: undefined,
        colorOne: {
            enable: false,
            color: "",
        },
        colorTwo: {
            enable: false,
            color: '#F2295B',
        },
        locationOne: 0,
        locationTwo: 100,
        type: 'linear-gradient',
        position: 'center center',
        angle: 180,
        },
        type: 'object',
    },
    backgroundGradientColorHover: {
        default: {
        colorOpt: undefined,
        colorOne: {
            enable: false,
            color: "",
        },
        colorTwo: {
            enable: false,
            color: '#F2295B',
        },
        locationOne: 0,
        locationTwo: 100,
        type: 'linear-gradient',
        position: 'center center',
        angle: 180,
        },
        type: 'object',
    },
    serviceBorder: {
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
    serviceBorderHover: {
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
    serviceBorderRadius: {
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
    serviceMargin: {
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
    servicePadding: {
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
    serviceBoxShadow: {
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
    serviceBoxShadowHover: {
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
    iconAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
        },
        type: "object"
    }, 
    iconBgColor: {
        default: {
            colorOpt: undefined,
            colorOne: {
                enable: false,
                color: "",
            },
            colorTwo: {
                enable: false,
                color: '#F2295B',
            },
            locationOne: 0,
            locationTwo: 100,
            type: 'linear-gradient',
            position: 'center center',
            angle: 180,
        },
        type: 'object',
    },
    iconBgColorHover: {
        default: {
            colorOpt: undefined,
            colorOne: {
                enable: false,
                color: "",
            },
            colorTwo: {
                enable: false,
                color: '#F2295B',
            },
            locationOne: 0,
            locationTwo: 100,
            type: 'linear-gradient',
            position: 'center center',
            angle: 180,
        },
        type: 'object',
    },
    iconColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    iconColorHover: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    iconBorder: {
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
    iconBorderHover: {
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
    iconBorderRadius: {
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
    iconMargin: {
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
    iconWidth: {
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
    iconSize: {
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
    titleColorHover: {
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
                    val: 24,
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
            fontWeight: "600",
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
    desColorHover: {
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
                    val: 24,
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
            fontWeight: "600",
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
    btnBoxShadowHover: {
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
                    val: 24,
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
            fontWeight: "600",
            fontStyle: "normal",
            fontTransform: "none",
            fontDecoration: "none",
        },
        type: 'object',
    },
};

export default attributes;