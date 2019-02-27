import React from 'react'
import Cusion from '../Media/Images/cusion.svg'
import Android from '../Media/Images/android.svg'
import Ios from '../Media/Images/ios.svg'


const Application = () =>
    <main className='app-main'>
        <div className='app-cont'>
            <div className='app'>
                <img className='app-cusion' src={Cusion} alt=''/>
                <div className='app-install'>
                    برای دسترسی بیشتر
                    <br/>
                    لطفا نرم افزار را نصب کنید
                </div>
                <img src={Android} className='app-logo' alt=''/>
                <img src={Ios} className='app-logo' alt=''/>
            </div>
        </div>

        <div className='home-about' style={{position: 'absolute', bottom: '0', left: '0'}}>
            <div>
                با اپلیکیشن "اینجا اونجا" میتونی بر اساس علایق خودت
                <br/>
                با رویداد ها و اتفاقات دور و ورت آشنا بشی ؛ زمانایی که برای تفریح و گشت و گذار داری رو درست برنامه ریزی کنی
                <br/>
                با آدمای هم فاز خودت آشنا بشی و گپ بزنی و ...
            </div>
        </div>

    </main>

export default Application