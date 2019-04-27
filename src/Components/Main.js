import React, {Component} from 'react'
import astronomy from '../Media/Images/category/astronomy.svg'
import basketball from '../Media/Images/category/basketball.svg'
import camp from '../Media/Images/category/camp.svg'
import cinema from '../Media/Images/category/cinema.svg'
import football from '../Media/Images/category/football.svg'
import gallery from '../Media/Images/category/gallery.svg'
import map from '../Media/Images/category/map.svg'
import music from '../Media/Images/category/music.svg'
import sport from '../Media/Images/category/sport.svg'
import teather from '../Media/Images/category/teather.svg'
import traveling from '../Media/Images/category/traveling.svg'
import valleyball from '../Media/Images/category/valleyball.svg'
import Art from '../Media/Images/art.png'
import Travel from '../Media/Images/traveling.png'
import Sport from '../Media/Images/sport.png'
import Tech from '../Media/Images/technology.png'
import Location from '../Media/Images/Location'
import aparat from '../Media/Images/aparat.svg'
import telegram from '../Media/Images/telegram.svg'
import twitter from '../Media/Images/twitter.svg'
import insta from '../Media/Images/instagram.svg'
import facebook from '../Media/Images/facebook.svg'

class Main extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            page: 'home',
            tab: 1,
        }
        this.openApplication = this.openApplication.bind(this)
    }

    componentDidMount()
    {
        this.timer = setInterval(() =>
        {
            if (this.state.tab <= 3)
                this.setState({...this.state, tab: this.state.tab + 1})
            else this.setState({...this.state, tab: 1})
        }, 4000)
        window.addEventListener('mousewheel', this.onScroll)
    }

    componentWillUnmount()
    {
        window.removeEventListener('mousewheel', this.onScroll)
    }

    onScroll = (e) =>
    {
        if (!this.props.modalState)
            if (parseInt(e.deltaY) > 0)
            {
                if (this.state.page === 'home')
                {
                    this.setState({...this.state, page: 'most'}, () =>
                    {
                        this.home.style.transform = 'translateY(-1500px)'
                        this.most.style.transform = 'translateY(0)'
                    })
                }
                else if (this.state.page === 'most')
                {
                    this.setState({...this.state, page: 'category'}, () =>
                    {
                        this.most.style.transform = 'translateY(-1500px)'
                        this.category.style.transform = 'translateY(0)'
                    })
                }
                else if (this.state.page === 'category')
                {
                    this.setState({...this.state, page: 'contact'}, () =>
                    {
                        this.category.style.transform = 'translateY(-1500px)'
                        this.contact.style.transform = 'translateY(0)'
                    })
                }
            }
            else
            {
                if (this.state.page === 'contact')
                {
                    this.setState({...this.state, page: 'category'}, () =>
                    {
                        this.contact.style.transform = 'translateY(1500px)'
                        this.category.style.transform = 'translateY(0)'
                    })
                }
                else if (this.state.page === 'category')
                {
                    this.setState({...this.state, page: 'most'}, () =>
                    {
                        this.category.style.transform = 'translateY(1500px)'
                        this.most.style.transform = 'translateY(0)'
                    })
                }
                else if (this.state.page === 'most')
                {
                    this.setState({...this.state, page: 'home'}, () =>
                    {
                        this.most.style.transform = 'translateY(1500px)'
                        this.home.style.transform = 'translateY(0)'
                    })
                }
            }
    }

    handleClick(page)
    {
        const now = this.state.page
        this.setState({...this.state, page: page}, () =>
        {
            if (now === 'home' && page === 'most')
            {
                this[now].style.transform = 'translateY(-1500px)'
                this[page].style.transform = 'translateY(0)'
                this.category.style.transform = 'translateY(1500px)'
                this.contact.style.transform = 'translateY(1500px)'
            }
            else if (now === 'home' && page === 'category')
            {
                this[now].style.transform = 'translateY(-1500px)'
                this.most.style.transform = 'translateY(-1500px)'
                this[page].style.transform = 'translateY(0)'
                this.contact.style.transform = 'translateY(1500px)'
            }
            else if (now === 'most' && page === 'category')
            {
                this[now].style.transform = 'translateY(-1500px)'
                this.home.style.transform = 'translateY(-1500px)'
                this[page].style.transform = 'translateY(0)'
                this.contact.style.transform = 'translateY(1500px)'
            }
            else if (now === 'category' && page === 'most')
            {
                this[now].style.transform = 'translateY(1500px)'
                this.home.style.transform = 'translateY(-1500px)'
                this[page].style.transform = 'translateY(0)'
                this.contact.style.transform = 'translateY(1500px)'
            }
            else if (now === 'category' && page === 'home')
            {
                clearTimeout(this.timer)
                this.setState({...this.state, tab: 1})
                this.timer = setInterval(() =>
                {
                    if (this.state.tab <= 3)
                        this.setState({...this.state, tab: this.state.tab + 1})
                    else this.setState({...this.state, tab: 1})
                }, 4000)

                this[now].style.transform = 'translateY(1500px)'
                this.most.style.transform = 'translateY(1500px)'
                this[page].style.transform = 'translateY(0)'
                this.contact.style.transform = 'translateY(1500px)'
            }
            else if (now === 'most' && page === 'home')
            {
                clearTimeout(this.timer)
                this.setState({...this.state, tab: 1})
                this.timer = setInterval(() =>
                {
                    if (this.state.tab <= 3)
                        this.setState({...this.state, tab: this.state.tab + 1})
                    else this.setState({...this.state, tab: 1})
                }, 4000)

                this[now].style.transform = 'translateY(1500px)'
                this.category.style.transform = 'translateY(1500px)'
                this[page].style.transform = 'translateY(0)'
                this.contact.style.transform = 'translateY(1500px)'
            }
            else if (now === 'home' && page === 'contact')
            {
                this[now].style.transform = 'translateY(-1500px)'
                this.category.style.transform = 'translateY(-1500px)'
                this.most.style.transform = 'translateY(-3000px)'
                this.contact.style.transform = 'translateY(0)'
            }
            else if (now === 'most' && page === 'contact')
            {
                this[now].style.transform = 'translateY(-1500px)'
                this.category.style.transform = 'translateY(-1500px)'
                this.home.style.transform = 'translateY(-1500px)'
                this.contact.style.transform = 'translateY(0)'
            }
            else if (now === 'category' && page === 'contact')
            {
                this[now].style.transform = 'translateY(-1500px)'
                this.most.style.transform = 'translateY(-1500px)'
                this.home.style.transform = 'translateY(-1500px)'
                this.contact.style.transform = 'translateY(0)'
            }
            else if (now === 'contact' && page === 'category')
            {
                this[now].style.transform = 'translateY(1500px)'
                this.most.style.transform = 'translateY(-1500px)'
                this.home.style.transform = 'translateY(-1500px)'
                this.category.style.transform = 'translateY(0)'
            }
            else if (now === 'contact' && page === 'most')
            {
                this[now].style.transform = 'translateY(1500px)'
                this.most.style.transform = 'translateY(0)'
                this.home.style.transform = 'translateY(-1500px)'
                this.category.style.transform = 'translateY(1500px)'
            }
            else if (now === 'contact' && page === 'home')
            {
                clearTimeout(this.timer)
                this.setState({...this.state, tab: 1})
                this.timer = setInterval(() =>
                {
                    if (this.state.tab <= 3)
                        this.setState({...this.state, tab: this.state.tab + 1})
                    else this.setState({...this.state, tab: 1})
                }, 4000)

                this[now].style.transform = 'translateY(1500px)'
                this.most.style.transform = 'translateY(1500px)'
                this.home.style.transform = 'translateY(0)'
                this.category.style.transform = 'translateY(3000px)'
            }


        })
    }

    openApplication()
    {
        this.props.enableModal()
    }

    handleTabs(tab)
    {
        clearTimeout(this.timer)
        this.setState({...this.state, tab: tab}, () =>
        {
            this.timer = setInterval(() =>
            {
                if (this.state.tab <= 3)
                    this.setState({...this.state, tab: this.state.tab + 1})
                else this.setState({...this.state, tab: 1})
            }, 4000)
        })
    }

    render()
    {
        return (
            <main className='main'>

                <div className='home-titles-right'>
                    <div className='home-titles-right-cont'>

                        <div className={this.state.page === 'home' ? 'home-titles-home' : this.state.page === 'most' ? 'home-titles-most' : this.state.page === 'category' ? 'home-titles-category' : 'home-titles-contact'}/>

                        <div className='home-titles-right-item-cont' onClick={() => this.handleClick('home')}>
                            <div className={this.state.page === 'home' ? 'home-titles-right-item' : 'home-titles-right-item-none'}>خانه</div>
                        </div>
                        <div className='home-titles-right-item-cont' onClick={() => this.handleClick('most')}>
                            <div className={this.state.page === 'most' ? 'home-titles-right-item' : 'home-titles-right-item-none'}>پربازدیدها</div>
                        </div>
                        <div className='home-titles-right-item-cont' onClick={() => this.handleClick('category')}>
                            <div className={this.state.page === 'category' ? 'home-titles-right-item' : 'home-titles-right-item-none'}>دسته بندی</div>
                        </div>
                        <div className='home-titles-right-item-cont' onClick={() => this.handleClick('contact')}>
                            <div className={this.state.page === 'contact' ? 'home-titles-right-item' : 'home-titles-right-item-none'}>تماس با ما</div>
                        </div>
                    </div>
                </div>

                <div className='section' ref={e => this.home = e} style={{position: 'absolute', top: '0px', left: '0', overflow: 'hidden'}}>
                    <div className='home-titles-center'>
                        {
                            this.renderImage()
                        }
                    </div>

                    <div className='home-titles-left'>
                        <div className='home-titles-left-cont'>
                            <div className='home-titles-left-cont-cont'>
                                <div className='home-titles-left-radius-cont' onClick={() => this.handleTabs(1)}>
                                    <button className={this.state.tab === 1 ? 'home-titles-left-radius' : 'home-titles-left-radius-none'}/>
                                </div>
                                <div className='home-titles-left-radius-cont' onClick={() => this.handleTabs(2)}>
                                    <button className={this.state.tab === 2 ? 'home-titles-left-radius' : 'home-titles-left-radius-none'}/>
                                </div>
                                <div className='home-titles-left-radius-cont' onClick={() => this.handleTabs(3)}>
                                    <button className={this.state.tab === 3 ? 'home-titles-left-radius' : 'home-titles-left-radius-none'}/>
                                </div>
                                <div className='home-titles-left-radius-cont' onClick={() => this.handleTabs(4)}>
                                    <button className={this.state.tab === 4 ? 'home-titles-left-radius' : 'home-titles-left-radius-none'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section' ref={e => this.most = e} style={{position: 'absolute', top: '0', left: '0', transform: 'translateY(1500px)'}}>

                    <div className='most'>

                        <div className='most-items-cont'>
                            <div className='most-items' onClick={this.openApplication}>
                                <img className='most-items-img' src={'https://static.farakav.com/files/pictures/thumb/01362020.jpg'} alt=''/>
                                <div className='most-items-img-content'>منچستر سیتی</div>
                            </div>
                        </div>

                        <div className='most-items-cont'>
                            <div className='most-items' onClick={this.openApplication}>
                                <img className='most-items-img' src={'https://static.farakav.com/files/pictures/thumb/01362020.jpg'} alt=''/>
                                <div className='most-items-img-content'>بارسلونا</div>
                            </div>
                        </div>

                        <div className='most-items-cont'>
                            <div className='most-items' onClick={this.openApplication}>
                                <img className='most-items-img' src={'https://static.farakav.com/files/pictures/thumb/01362020.jpg'} alt=''/>
                                <div className='most-items-img-content'>کافه فوتبال</div>
                            </div>
                        </div>

                        <div className='most-items-cont'>
                            <div className='most-items' onClick={this.openApplication}>
                                <img className='most-items-img' src={'https://static.farakav.com/files/pictures/thumb/01362020.jpg'} alt=''/>
                                <div className='most-items-img-content'>خط سفید</div>
                            </div>
                        </div>

                        <div className='most-items-cont'>
                            <div className='most-items' onClick={this.openApplication}>
                                <img className='most-items-img' src={'https://static.farakav.com/files/pictures/thumb/01362020.jpg'} alt=''/>
                                <div className='most-items-img-content'>شنبه های راک</div>
                            </div>
                        </div>

                        <div className='most-items-cont'>
                            <div className='most-items' onClick={this.openApplication}>
                                <img className='most-items-img' src={'https://static.farakav.com/files/pictures/thumb/01362020.jpg'} alt=''/>
                                <div className='most-items-img-content'>فلان فلان</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='section' ref={e => this.category = e} style={{position: 'absolute', top: '0', left: '0', transform: 'translateY(1500px)'}}>
                    <div className='category-cont'>
                        <img src={astronomy} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={basketball} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={camp} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={cinema} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={football} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={gallery} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={map} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={music} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={sport} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={teather} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={traveling} className='category-logo' alt='' onClick={this.openApplication}/>
                        <img src={valleyball} className='category-logo' alt='' onClick={this.openApplication}/>
                    </div>
                </div>


                <div className='section' ref={e => this.contact = e} style={{position: 'absolute', top: '0', left: '0', overflow: 'hidden', transform: 'translateY(1500px)'}}>
                    <div className='contact-container'>
                        <Location className='contact-location'/>
                        <div className='contact-form'>
                            <div className='contact-form-headers'>
                                <div className='contact-form-header'>تماس‌با‌ما</div>
                                <div className='contact-form-subheader'>با ما در تماس باشید برای ؛ نقل قول ، کمک و همکاری</div>
                            </div>
                            <input type='text' className='contact-form-text' placeholder='نام'/>
                            <input type='text' className='contact-form-text' placeholder='ایمیل'/>
                            <textarea className='contact-form-area' placeholder='متن'/>
                            <button className='contact-send'>ارسال</button>
                        </div>
                    </div>
                </div>

                <div className='contact-footer'>
                    <img src={aparat} alt='' className='contact-footer-item' style={{opacity: this.state.page === 'contact' ? '1' : '0', zIndex: this.state.page === 'contact' ? '1' : '0'}}/>
                    <img src={facebook} alt='' className='contact-footer-item' style={{opacity: this.state.page === 'contact' ? '1' : '0', zIndex: this.state.page === 'contact' ? '1' : '0'}}/>
                    <img src={twitter} alt='' className='contact-footer-item' style={{opacity: this.state.page === 'contact' ? '1' : '0', zIndex: this.state.page === 'contact' ? '1' : '0'}}/>
                    <img src={telegram} alt='' className='contact-footer-item' style={{opacity: this.state.page === 'contact' ? '1' : '0', zIndex: this.state.page === 'contact' ? '1' : '0'}}/>
                    <img src={insta} alt='' className='contact-footer-item' style={{opacity: this.state.page === 'contact' ? '1' : '0', zIndex: this.state.page === 'contact' ? '1' : '0'}}/>
                    <div className='contact-footer-left' style={{opacity: this.state.page === 'contact' ? '1' : '0', zIndex: this.state.page === 'contact' ? '1' : '0'}}>000000 021 پاسخگویی</div>
                </div>

                <div className='home-about'>
                    <div style={{transitionDuration: '0.5s', opacity: this.state.page === 'contact' ? '0' : '1', zIndex: this.state.page === 'contact' ? '0' : '1'}}>
                        با اپلیکیشن "اینجا اونجا" میتونی بر اساس علایق خودت
                        <br/>
                        با رویداد ها و اتفاقات دور و ورت آشنا بشی ؛ زمانایی که برای تفریح و گشت و گذار داری رو درست برنامه ریزی کنی
                        <br/>
                        با آدمای هم فاز خودت آشنا بشی و گپ بزنی و ...
                    </div>
                </div>

            </main>
        )
    }

    renderImage()
    {
        if (this.state.tab === 1)
            return <img src={Art} className='home-titles-center-img' alt=''/>
        else if (this.state.tab === 2)
            return <img src={Travel} className='home-titles-center-img' alt=''/>
        else if (this.state.tab === 3)
            return <img src={Sport} className='home-titles-center-img' alt=''/>
        else if (this.state.tab === 4)
            return <img src={Tech} className='home-titles-center-img' alt=''/>
    }

}

export default Main