import React from 'react'
import Logo from '../Media/Images/logo'
import android from '../Media/Images/androidLogo.svg'
import ios from '../Media/Images/iosLogo.png'
import {Link} from 'react-router-dom'

class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            open: false,
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
    }

    componentDidMount()
    {
        document.addEventListener('mousedown', this.handleMouseDown)
    }

    handleMouseDown(e)
    {
        if (this.header && !this.header.contains(e.target) && this.state.open)
            this.setState({...this.state, open: false})
    }

    componentWillUnmount()
    {
        document.removeEventListener('mousedown', this.handleMouseDown)
    }

    render()
    {
        return (
            <header ref={e => this.header = e} className='header'>
                <Link to='/'><Logo className='logo'/></Link>
                <button className='app-button' onClick={() =>
                {
                    this.setState({...this.state, open: !this.state.open})
                }}>
                    اپلیکیشن
                </button>

                <img src={android} alt='' className={this.state.open ? 'android-button-show' : 'android-button'}/>
                <img src={ios} alt='' className={this.state.open ? 'ios-button-show' : 'ios-button'}/>

            </header>
        )
    }
}

export default Header