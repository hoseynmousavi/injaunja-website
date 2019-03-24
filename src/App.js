import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import Cusion from './Media/Images/cusion.svg'
import Android from './Media/Images/android.svg'
import Ios from './Media/Images/ios.svg'
import Event from './Components/Event'

class App extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            modal: false,
        }
    }

    enableModal = () =>
    {
        this.setState({...this.state, modal: true})
    }

    disableModal = () =>
    {
        this.setState({...this.state, modal: false})
    }

    render()
    {
        return (
            <div>

                <div className={this.state.modal ? 'modal-back' : 'modal-back-hide'}>
                    <Header/>
                    <Switch>

                        <Route exact path='/event/:id' render={(props) =>
                            <Event param={props}/>
                        }/>

                        <Route path='*' render={() =>
                            <Main enableModal={this.enableModal} modalState={this.state.modal}/>
                        }/>

                    </Switch>
                </div>

                {/*Modals*/}
                {/*coming soon*/}
                {/*<div className={'app-cont'}/>*/}
                {/*<div className={'app'}>*/}
                {/*<img className='app-cusion' src={Cusion} alt=''/>*/}
                {/*<div className='coming'>*/}
                {/*سایت در حال توسعه است...*/}
                {/*<br/><br/><br/>*/}
                {/*💙💜💚🧡*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*coming soon*/}


                <div className={this.state.modal ? 'app-cont' : 'app-cont-hide'} onClick={this.disableModal}/>
                <div className={this.state.modal ? 'app' : 'app-hide'}>
                    <img className='app-cusion' src={Cusion} alt=''/>
                    <div className='app-install'>
                        برای دسترسی بیشتر
                        <br/>
                        لطفا نرم افزار را نصب کنید
                    </div>
                    <img src={Android} className='app-logo' alt=''/>
                    <img src={Ios} className='app-logo' alt=''/>
                </div>

                {/*End-Modals*/}

            </div>
        )
    }
}

export default App
