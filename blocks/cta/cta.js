import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {  useBlockProps  } from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";
import Inspector from './inspector.js';
import attributes from "./attributes.js";
import { Style } from './style.js';
import { OpenSidebar } from '/src/components/compileStyle.js'; 

registerBlockType( 'orbi-blocks/cta', {
    title: 'Call To Action Block',
    description: 'Call To Action Desc.',
    category: 'orbi-blocks',
    supports: {
      align: true,
      align: [ 'left', 'right', 'full' ]
    },
    icon: "external",
    keywords: [
      __( 'Call To Action' ),
      __( 'cta' ), 
      __( 'orbi' ), 
      __( 'newslatter' ), 
      __( 'contact' )
    ],
    attributes,
    example: {
      
    },
    
    edit: (props) => {
      const { attributes, clientId, setAttributes } = props;
      setAttributes({ yourId: clientId });
      return(
        <Fragment >
          <Style { ...props } />
          <Inspector { ...props } />
          <div className={`orbi-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`} onClick={OpenSidebar} >
            <div class={`orbi-cta one orbi-cta-card`}>
              <div class="orbi-cta-overlay orbi-cta-inner-card">
                <div class="orbi-content orbi-cta-content-card">
                  <div class="orbi-title">
                  {attributes.showSubTitle &&
                    <h6 class="subtitle orbi-cta-card-subtitle">{attributes.subTitle}</h6>
                  }
                  {attributes.showTitle && 
                    <h2 class="title orbi-cta-card-heading">{attributes.title}</h2>
                  }
                  {attributes.showDescription && 
                    <span class="text orbi-cta-card-description">{attributes.description}</span>
                  }
                  </div>
                  {attributes.showButton && 
                  <div class="orbi-call-button">
                    <div class="orbi-cta-card-read-more">
                      <a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'} class="orbi-cta-btn">
                        {attributes.iconPosition === 'before' && (
                          <i class={attributes.readMoreicon}></i>
                        )} 
                        {attributes.linkText}
                        {attributes.iconPosition === 'after' && (
                          <i class={attributes.readMoreicon}></i>
                        )} 
                      </a>
                    </div>
                  </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    },
    save: ( props ) => {
      const { attributes } = props;
      return(
        <Fragment {...useBlockProps.save()}>
          <Style { ...props } />
          <div className={`orbi-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`} onClick={OpenSidebar} >
            <div class={`orbi-cta one orbi-cta-card`}>
              <div class="orbi-cta-overlay orbi-cta-inner-card">
                <div class="orbi-content orbi-cta-content-card">
                  <div class="orbi-title">
                  {attributes.showSubTitle &&
                    <h6 class="subtitle orbi-cta-card-subtitle">{attributes.subTitle}</h6>
                  }
                  {attributes.showTitle && 
                    <h2 class="title orbi-cta-card-heading">{attributes.title}</h2>
                  }
                  {attributes.showDescription && 
                    <span class="text orbi-cta-card-description">{attributes.description}</span>
                  }
                  </div>
                  {attributes.showButton && 
                  <div class="orbi-call-button">
                    <div class="orbi-cta-card-read-more">
                    <a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'} class="orbi-cta-btn">
                            {attributes.iconPosition === 'before' && (
                              <i class={attributes.readMoreicon}></i>
                            )} 
                            {attributes.linkText}
                            {attributes.iconPosition === 'after' && (
                              <i class={attributes.readMoreicon}></i>
                            )} 
                          </a>
                    </div>
                  </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    },
});