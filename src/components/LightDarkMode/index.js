// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkmode: true,
  }
  onClickBtn = () => {
    this.setState(preVal => ({
      isDarkmode: !preVal.isDarkmode,
    }))
  }
  render() {
    const {isDarkmode} = this.state
    const modeContainerClassName = isDarkmode
      ? 'darkmode-container'
      : 'lightmode-container'
    const BtnText = isDarkmode ? 'Light Mode' : 'Dark Mode'
    const headingClassName = isDarkmode ? 'dark-heading' : 'light-heading'
    return (
      <div className="container">
        <div className={`${modeContainerClassName}`}>
          <h1 className={`${headingClassName}`}>Click to change mode</h1>
          <button type="button" onClick={this.onClickBtn}>
            {BtnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
