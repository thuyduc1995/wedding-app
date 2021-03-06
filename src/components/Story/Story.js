import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './story.scss';

export default class Story extends Component {
  render() {
    return (
      <Element className='story'>
        <div className='story--title'>Girl Meets Boy</div>
        <i className="story--icon fa fa-bookmark"></i>
        <div className='story--content'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content
          and make changes to the font. Feel free to drag and drop me anywhere
          you like on your page. I’m a great place for you to tell a story
          and let your users know a little more about you. This is a great space to write long text
          about your company and your services</div>
      </Element>
    )
  }
}
