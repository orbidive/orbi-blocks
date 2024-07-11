import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {  useBlockProps } from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";
import Inspector from './inspector';
import attributes from "./attributes";
import { Style } from './style.js';
import { OpenSidebar } from '/src/components/compileStyle.js'; 

registerBlockType( 'orbi-blocks/service', {
    title: 'Service Block',
    description: 'Service Block Desc.',
    category: 'orbi-blocks',
    supports: {
      align: true,
      align: [ 'left', 'right', 'full' ]
    },
    icon: "portfolio",
    keywords: [
      __( 'service Block' ),
      __( 'orbi' ), 
      __( 'info box' ), 
      __( 'feature' ), 
      __( 'icon box' ), 
      __( 'service' )
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
            <div className={`orbi-service-wapper-${attributes.yourId} service_one orbi-service-card`} >
              <div className='inner orbi-service-inner-card'>
                <div className='content'>
                  {attributes.showIcon &&
                    <div className='orbi-service-card-icon'>
                        <div class="icon">
                            <i class={attributes.icon}></i>
                        </div>
                    </div>
                  }
                  {attributes.showTitle &&
                      <div class="heading">
                          <h3 class="title orbi-service-card-heading">
                            {attributes.title}
                          </h3>
                      </div>
                  }
                  {attributes.showDescription &&
                    <p class="text orbi-service-card-description">{attributes.description}</p>
                  }
                  {attributes.showReadMore &&                                    
                  <div className='orbi-service-card-read-more'>
                        <a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'} class="more">
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
            <div className={`orbi-service-wapper-${attributes.yourId} service_one orbi-service-card`} >
              <div className='inner orbi-service-inner-card'>
                <div className='content'>
                  {attributes.showIcon &&
                    <div className='orbi-service-card-icon'>
                        <div class="icon">
                            <i class={attributes.icon}></i>
                        </div>
                    </div>
                  }
                  {attributes.showTitle &&
                      <div class="heading">
                          <h3 class="title orbi-service-card-heading">
                            {attributes.title}
                          </h3>
                      </div>
                  }
                  {attributes.showDescription &&
                    <p class="text orbi-service-card-description">{attributes.description}</p>
                  }
                  {attributes.showReadMore &&                                    
                  <div className='orbi-service-card-read-more'>
                        <a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'} class="more">
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
            </div>
          </div>
        </Fragment>
      );
    },
});