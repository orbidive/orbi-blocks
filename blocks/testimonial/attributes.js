const attributes = {
    layouts: {
        type: 'string',
        default: "Layout1",
    },
    yourId: {
    type: 'string',
    },
    image: {
        type: "string",
        source: "attribute",
        selector: ".orbi-testimonial-card-image img",
        attribute: "src",
        default: js_data.placeholder_url
    },
    rating:{
        type: 'string',
        default: '5',
    },
    icon: { 
        type: 'string', 
        default: 'fa fa-quote-left'
    },
    title: { 
        type: 'string', 
        selector: '.user-title',
        default: 'James Williom'
    },
    description: { 
        type: 'string', 
        default: 'They’re proof to prospective clients that you’re as amazing as everyone says while keeping your regulars at ease.'
    },
    designation: { 
        type: 'string', 
        default: 'Manager'
    },
    showImage:{
        type: 'boolean',
        default: true,
    },
    showIcon:{
        type: 'boolean',
        default: true,
    },
    showTitle:{
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
    showDescription:{
        type: 'boolean',
        default: true,
    },
    showDesignation:{
        type: 'boolean',
        default: true,
    },
    showRating:{
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
    testimonialBgColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    testimonialBorder: {
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
    testimonialBorderRadius: {
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
    testimonialMargin: {
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
    testimonialPadding: {
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
    testimonialBoxShadow: {
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
    iconBgColor: {
        default: {
            enable: false,
            color: "",
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
    ratingAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
          },
        type: "object"
    }, 
    ratingSize: {
        default: {
            desktop: {
                val: 16,
                unit: "px"
            },
            tablet:  {
                val: 16,
                unit: "px"
            },
            mobile: {
                val: 16,
                unit: "px"
            },
            resOption: "Desktop",
        },
        type: 'object',
    },
    ratingMargin: {
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
    ratingColor: {
        default: {
            enable: false,
            color: "",
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
                    val: 16,
                    unit: "px"
                },
                tablet:  {
                    val: 16,
                    unit: "px"
                },
                mobile: {
                    val: 16,
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
    imageAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
        },
        type: "object"
    },
    imageWidth: {
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
    imageHeight: {
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
    imageBorder: {
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
    imageBorderRadius: {
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
    imageMargin: {
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
    imageBoxShadow: {
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
    degAlignment: {
        default: {
            desktop: undefined,
            tablet: undefined,
            mobile: undefined,
          },
        type: "object"
    },
    degColor: {
        default: {
            enable: false,
            color: "",
        },
        type: 'object',
    },
    degMargin: {
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
    degTypography: {
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