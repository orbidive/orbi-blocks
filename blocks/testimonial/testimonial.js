import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Fragment } from "@wordpress/element";
import Inspector from './inspector';
import attributes from "./attributes";
import { Style } from './style.js';
import  Layoutone  from "/templates/testimonial/layoutOne.js";
import Layouttwo from "/templates/testimonial/layoutTwo.js";
import Layoutthree from "/templates/testimonial/layoutThree.js";

registerBlockType( 'orbi-blocks/testimonial', {
    title: 'Testimonial Block',
    description: 'Testimonial Block Desc.',
    category: 'orbi-blocks',
    supports: {
      align: true,
      align: [ 'left', 'right', 'full' ]
    },
    icon: "testimonial",
    keywords: [
        __( 'Testimonial' ),
        __( 'review' ), 
        __( 'orbi' ), 
        __( 'client review' ), 
    ],
    attributes,
    example: {
      
    },
    
    edit: (props) => {
      const { attributes, className, clientId, setAttributes } = props;
      const { yourId, info = [], layouts } = attributes;
      setAttributes({ yourId: clientId });
      const project = (layouts) => {
          switch(layouts) {
              case "Layout1":   return <Layoutone { ...props } />;
              case "Layout2":   return <Layouttwo { ...props } />;
              case "Layout3":   return <Layoutthree { ...props } />;
          }
      }
      return(
        <Fragment >
          <Style { ...props } />
          <Inspector { ...props } />
          <div className={`orbi-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`}>
            {project(layouts)}
          </div>
        </Fragment>
    )
    },
    save: ( props ) => {
      const { attributes, className, clientId, setAttributes } = props;
      const { yourId, info = [], layouts } = attributes;
      const project = (layouts) => {
        switch(layouts) {
            case "Layout1":   return <Layoutone { ...props } />;
            case "Layout2":   return <Layouttwo { ...props } />;
            case "Layout3":   return <Layoutthree { ...props } />;
        }
    }
        return(
            <Fragment >
              <Style { ...props } />
              <div className={`orbi-block-container-${attributes.yourId} ${attributes.hideDesktop ? 'hidden-desktop' : ''} ${attributes.hideTablet ? 'hidden-tablet' : ''} ${attributes.hideMobile ? 'hidden-mobile' : ''}`}>
                {project(layouts)}
              </div>
            </Fragment>
      );
    },
});