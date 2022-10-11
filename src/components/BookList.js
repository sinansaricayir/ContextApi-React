import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {

  static contextType = ThemeContext;
  
  render() {

    const {isLightTheme,dark,light} = this.context;

    const theme = isLightTheme ? light : dark;

    return (
      <div className='book-list' style={{background:theme.bg,color:theme.syntax}}>
        <ul>
            <li style={{background:theme.ui}}>Var mısın</li>
            <li style={{background:theme.ui}}>Hayvan Çiftliği</li>
            <li style={{background:theme.ui}}>Bir Ömür Nasıl Yaşanır</li>
            <li style={{background:theme.ui}}>Fight Club</li>
        </ul>
      </div>
    )
  }
}
