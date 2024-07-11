
const attributes = {
  yourId: {
    type: 'string',
  },
  planName: { 
    type: 'string', 
    default: 'Basic Plan'
  },
  currencySymbol: { 
    type: 'string', 
    default: '$'
  },
  priceAmount: { 
    type: 'string', 
    default: '69'
  },
  priceDuration: {
    type: 'string', 
    default: '/ Month'
  },
  openSale: {
    type: "boolean",
    default: false,
  },
  origPriceAmount: { 
    type: 'string', 
    default: '99'
  },
  icon: { 
    type: 'string', 
    default: 'fa fa-star'
  },
  showListIcon: {
    type: "boolean",
    default: true,
  },
  listIconPosition: {
    type: 'string',
    default: 'after'
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  showPlan: {
    type: "boolean",
    default: true,
  },
  showIcon: {
    type: "boolean",
    default: true,
  },
  showFeatures: {
    type: "boolean",
    default: true,
  },
  showButton: {
    type: "boolean",
    default: true,
  },
  showRibbon:{
    type: 'boolean',
    default: false,
  },
  ribbonStyle: {
    type: 'string',
    default: 'one'
  },
  ribbonTitle: { 
    type: 'string', 
    default: 'Popular'
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
  info: {
    type: 'array',
    selector: '.orbi-price-lists',
    default: [ {
        index: 0,
        feature: "Strategy & Marketing",
        icon: "fas fa-check",
        color: "",
        iconColor: "",
        bgColor: "",
        active: false,
        addUrl: false,
        link: "",
        checkNewTab: false
      },
      {
        index: 1,
        feature: "Advance Analytics",
        icon: "fas fa-check",
        color: "",
        iconColor: "",
        bgColor: "",
        active: false,
        addUrl: false,
        link: "",
        checkNewTab: false
      },
      {
        index: 2,
        feature: "Change Managment",
        icon: "fas fa-times",
        color: "",
        iconColor: "",
        bgColor: "",
        active: false,
        addUrl: false,
        link: "",
        checkNewTab: false
      },
      {
        index: 3,
        feature: "Corporate Finance",
        icon: "fas fa-check",
        color: "",
        iconColor: "",
        bgColor: "",
        active: false,
        addUrl: false,
        link: "",
        checkNewTab: false
      }
    ],
  },
  link: { 
    type: 'string', 
    default: ''
  },
  checkNewTab:{
      type: 'boolean',
      default: true,
  },
  linkText: { 
    type: 'string', 
    default: 'Choose Plan '
  },
  readMoreicon: { 
    type: 'string',
    default: 'fa fa-arrow-right'
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
  priceBoxBgColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  priceBoxBorderType: {
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
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  priceBoxBorderRadius: {
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
  priceBoxPadding: {
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
  priceBoxMargin: {
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
  priceBoxShadow: {
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
  ribbonTypography: {
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
        }
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
        }
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
        }
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
        }
      },
      enable: false,
      fontFamily: "",
      fontWeight: "",
      fontStyle: "normal",
      fontTransform: "Uppercase",
      fontDecoration: "none",
    },
    type: 'object',
  },
  ribbonColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  ribbonBgColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  planNameAlignment: {
    default: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
    type: "object"
  }, 
  planNameColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  planNameTypography: {
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
        }
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
        }
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
        }
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
        }
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
  planNameMargin: {
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
  pricePlanAlignment: {
    default: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
    type: "object"
  }, 
  currencyColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  currencyTypography: {
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
        }
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
        }
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
        }
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
        }
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
  priceColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  priceTypography: {
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
        }
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
        }
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
        }
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
        }
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
  durationColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  durationTypography: {
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
        }
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
        }
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
        }
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
        }
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
  saleColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  saleTypography: {
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
        }
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
        }
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
        }
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
        }
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
  pricePlanMargin: {
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
  iconAlignment: {
    default: {
      desktop: undefined,
      tablet:  undefined,
      mobile: undefined,
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
  iconColor:{
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
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
    },
    type: 'object',
  },
  iconBorderType: {
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
      color:  {
        enable: false,
        color: "",
      },
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
  iconShadow: {
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
  featureColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  featureIconColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  featureIconSize: {
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
    },
    type: 'object',
  },
  featureBorderType: {
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
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  featurePadding: {
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
  featureTypography: {
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
        }
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
        }
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
        }
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
        }
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
  featureTopSpacing: {
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
    },
    type: 'object',
  },
  featureBottomSpacing: {
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