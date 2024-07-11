import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {  useBlockProps, RichText  } from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";
import Inspector from './inspector.js';
import attributes from "./attributes.js";
import { Style } from './style.js';
import { OpenSidebar } from '/src/components/compileStyle.js'; 


registerBlockType( 'orbi-blocks/price-table', {
    title: 'Price Table Block',
    description: 'Price Table Block Desc.',
    category: 'orbi-blocks',
    supports: {
      align: true,
      align: [ 'left', 'right', 'full' ]
    },
    icon: "editor-table",
    keywords: [
      __( 'Price Table Block' ),
      __( 'orbi' ), 
      __( 'plan' ), 
      __( 'Price Table' )
    ],
    attributes,
    example: {
      
    },
    edit: (props) => {
      const { attributes, clientId, setAttributes } = props;
      const { info = [] } = attributes;
      setAttributes({ yourId: clientId });
      const infoList = (value) => {
        return(
            value.sort((a, b) => a.index - b.index).map(infoItem => {
                return(
                        <li className={`orbi-price-card-feature ${infoItem.active === true ? 'line-th' : ''}`}  style={{backgroundColor: infoItem.bgColor.color}}>
                        {attributes.listIconPosition === 'before' && attributes.showListIcon === true && (
                          <i aria-hidden="true" className={`${ infoItem.icon }`} style={{color: infoItem.iconColor.color}}></i>	
                        )}
                        {infoItem.addUrl === true ? (
                          <a href={`${ infoItem.link }`} target={infoItem.checkNewTab && "_blank"} rel={infoItem.checkNewTab && 'noopener noreferrer'} style={{color: infoItem.color.color}}>
                            {infoItem.feature}
                          </a>
                        ) : (
                          <a style={{color: infoItem.color.color}}>
                            {infoItem.feature}
                          </a>
                        )}
                        {attributes.listIconPosition === 'after' && attributes.showListIcon === true && (
                          <i aria-hidden="true" className={`${ infoItem.icon }`} style={{color: infoItem.iconColor.color}}></i>	
                        )}	
                        </li>
                )
            })
        )
      }
      return(
        <Fragment >
          <Style { ...props } />
          <Inspector { ...props } />
          <div className={`orbi-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`} onClick={OpenSidebar}>
            <div className={`price-wapper-${attributes.yourId} orbi-price one orbi-price-card`} >
              { attributes.showRibbon === true && 
                <div className={`orbi-price-ribbon ${attributes.ribbonStyle}`}>
                    <span class="orbi-price-card-ribbon">{attributes.ribbonTitle}</span>
                </div>		
              }
              <div class="orbi-price-header">
                { attributes.showTitle === true && 
                  <div class="orbi-price-heading">
                    <h6 class="title orbi-price-card-heading">{attributes.planName}</h6>
                  </div>
                }
                { attributes.showPlan === true && 
                  <div class="orbi-currency orbi-price-card-plan">
                    { attributes.openSale === true && 
                      <span class="orbi-currency-sale orbi-price-currency-sale">
                        <s>
                        <span class="orbi-currency-sign">{attributes.currencySymbol}</span>
                            {attributes.origPriceAmount}
                        </s>
                      </span>
                    }
                    <span class="orbi-currency-sign orbi-price-currency-sign">{attributes.currencySymbol}</span>
                    <span class="orbi-currency-value orbi-price-currency-value">{attributes.priceAmount}</span>
                    <span class="orbi-duration orbi-price-duration">{attributes.priceDuration}</span>
                  </div>
                }
                { attributes.showIcon === true && 
                  <div class="orbi-icon orbi-price-card-icon">
                    <div class="icon">
                      <i aria-hidden="true" class={attributes.icon}></i>							
                    </div>
                  </div>
                }
              </div>
              <ul class="orbi-price-lists orbi-price-inner-card">
                { attributes.showFeatures === true && (
                  infoList(info)
                )}
              </ul>
              { attributes.showButton === true &&
              <div class="orbi-price-footer orbi-price-card-read-more">
                <a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'} class="orbi-price-btn">
                  {attributes.iconPosition === 'before' && (
                    <i class={attributes.readMoreicon}></i>
                  )} 
                  {attributes.linkText}
                  {attributes.iconPosition === 'after' && (
                    <i class={attributes.readMoreicon}></i>
                  )} 
                </a>
              </div>
              }
            </div>
          </div>
        </Fragment>
      )
    },
    save: ( props ) => {
      const { attributes } = props;
      const { info = [], } = attributes;
      const displayInfoList = (value) => {
        return(
          value.sort((a, b) => a.index - b.index).map(infoItem => {
              return(
                      <li className={`orbi-price-card-feature ${infoItem.active === true ? 'line-th' : ''}`}  style={{backgroundColor: infoItem.bgColor.color}}>
                      {attributes.listIconPosition === 'before' && attributes.showListIcon === true && (
                        <i aria-hidden="true" className={`${ infoItem.icon }`} style={{color: infoItem.iconColor.color}}></i>	
                      )}
                      {infoItem.addUrl === true ? (
                        <a href={`${ infoItem.link }`} target={infoItem.checkNewTab && "_blank"} rel={infoItem.checkNewTab && 'noopener noreferrer'} style={{color: infoItem.color.color}}>
                          {infoItem.feature}
                        </a>
                      ) : (
                        <a style={{color: infoItem.color.color}}>
                          {infoItem.feature}
                        </a>
                      )}
                      {attributes.listIconPosition === 'after' && attributes.showListIcon === true && (
                        <i aria-hidden="true" className={`${ infoItem.icon }`} style={{color: infoItem.iconColor.color}}></i>	
                      )}	
                      </li>
              )
          })
        )
      }
      return(
          <Fragment {...useBlockProps.save()}>
            <Style { ...props } />
            <div className={`orbi-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`} onClick={OpenSidebar}>
              <div className={`price-wapper-${attributes.yourId} orbi-price one orbi-price-card`} >
                { attributes.showRibbon === true && 
                  <div className={`orbi-price-ribbon ${attributes.ribbonStyle}`}>
                      <span class="orbi-price-card-ribbon">{attributes.ribbonTitle}</span>
                  </div>		
                }
                <div class="orbi-price-header">
                  { attributes.showTitle === true && 
                    <div class="orbi-price-heading">
                      <h6 class="title orbi-price-card-heading">{attributes.planName}</h6>
                    </div>
                  }
                  { attributes.showPlan === true && 
                    <div class="orbi-currency orbi-price-card-plan">
                      { attributes.openSale === true && 
                        <span class="orbi-currency-sale orbi-price-currency-sale">
                          <s>
                          <span class="orbi-currency-sign">{attributes.currencySymbol}</span>
                              {attributes.origPriceAmount}
                          </s>
                        </span>
                      }
                      <span class="orbi-currency-sign orbi-price-currency-sign">{attributes.currencySymbol}</span>
                      <span class="orbi-currency-value orbi-price-currency-value">{attributes.priceAmount}</span>
                      <span class="orbi-duration orbi-price-duration">{attributes.priceDuration}</span>
                    </div>
                  }
                  { attributes.showIcon === true && 
                    <div class="orbi-icon orbi-price-card-icon">
                      <div class="icon">
                        <i aria-hidden="true" class={attributes.icon}></i>							
                      </div>
                    </div>
                  }
                </div>
                <ul class="orbi-price-lists orbi-price-inner-card">
                  { attributes.showFeatures === true && (
                    displayInfoList(info)
                  )}
                </ul>
                { attributes.showButton === true &&
                <div class="orbi-price-footer orbi-price-card-read-more">
                  <a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'} class="orbi-price-btn">
                    {attributes.iconPosition === 'before' && (
                      <i class={attributes.readMoreicon}></i>
                    )} 
                    {attributes.linkText}
                    {attributes.iconPosition === 'after' && (
                      <i class={attributes.readMoreicon}></i>
                    )} 
                  </a>
                </div>
                }
              </div>
            </div>
        </Fragment>
      );
    },
});