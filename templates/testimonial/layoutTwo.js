import { __ } from '@wordpress/i18n';
import React from 'react'
import { Fragment, Component, RawHTML } from "@wordpress/element";
import { OpenSidebar } from '/src/components/compileStyle.js'; 

export default function layouttwo(props) {
    const { attributes, className, setAttributes } = props;

        return(
            <Fragment >
                    <div className={`orbi-testimonial-wrapper-${attributes.yourId} orbi-testimonial-card testimonial_two`} onClick={OpenSidebar}>
                            <div class="sub-qute">
                                {attributes.showRating &&
                                <>
                                {attributes.rating === "5" &&
                                <div class="testi-star">
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                </div>
                                }
                                {attributes.rating === "4" &&
                                <div class="testi-star">
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="fas fa-star fa-md"></i>
                                <i class="far fa-star "></i>
                                </div>
                                }
                                {attributes.rating === "3" &&
                                <div class="testi-star">
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                </div>
                                }
                                {attributes.rating === "2" &&
                                <div class="testi-star">
                                <i class="fa fa-star fa-md"></i>
                                <i class="fa fa-star fa-md"></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                </div>
                                }
                                {attributes.rating === "1" &&
                                <div class="testi-star">
                                <i class="fa fa-star fa-md"></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                </div>
                                }
                                {attributes.rating === "0" &&
                                <div class="testi-star">
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                <i class="far fa-star "></i>
                                </div>
                                }
                                </>
                                }
                                {attributes.showDescription &&<p class="discription orbi-testimonial-card-description">{attributes.description}</p>}
                            </div>
                            <div class="testi-content">	
                                {attributes.showImage &&
                                <div class="testi-img orbi-testimonial-card-image">
                                <img src={ attributes.image } class="clg" alt="client"/>
                                </div>
                                }
                                <div class="testi-heading">
                                {attributes.showTitle &&
                                    <h6 class="user-title orbi-testimonial-card-name"><a href={attributes.link} target={attributes.checkNewTab && '_blank'} rel={attributes.checkNewTab && 'noopener noreferrer'}>{attributes.title}</a></h6>
                                }
                                {attributes.showDesignation &&<p class="details orbi-testimonial-card-designation">{attributes.designation}</p>}
                                </div>
                            </div>
					</div>
            </Fragment>
    );
}