import React, {Component} from 'react'
import {ClipLoader} from 'react-spinners'
import Slick from 'react-slick'
import CategoryImage from './CategoryImage'

class Event extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            event: null,
            ios: null,
        }
    }

    componentDidMount()
    {
        this.setState({...this.state, ios: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)}, () => this.getData())
    }

    getData()
    {
        const id = parseInt(this.props.param.match.params.id)
        fetch(`https://restful.injaunja.com/event/${id}`, {
            headers: {
                'Cache-Control': 'no-cache',
            },
        })
            .then(res => res.json())
            .then(resJson =>
            {
                if (resJson.state === 1)
                {
                    this.setState({...this.state, event: {...resJson.form}})
                }
                else
                {
                    this.getData()
                }
            })
    }

    render()
    {
        if (this.state.event)
        {
            if (this.state.ios) window.location.href = `injaunja://event/${this.props.param.match.params.id}`
            const {event} = this.state
            const {pictures, name, description, info, address, start_year, start_month, start_day, end_year, end_month, end_day} = event
            return (
                <div className='event'>
                    <div className='event-name'>{name}</div>
                    <div className='slider-here'>
                        <Slick {...{dots: true, adaptiveHeight: true}}>
                            {
                                JSON.parse(pictures) && JSON.parse(pictures).map((img, i) =>
                                    <CategoryImage key={i} picture={img}/>,
                                )
                            }
                        </Slick>
                    </div>
                    {description && <div className='event-description'>{description}</div>}
                    {info && <div className='event-description'>{info}</div>}
                    {address && <div className='event-description'>آدرس: {address}</div>}
                    <div className='event-description'>تاریخ شروع: {start_year + '/' + start_month + '/' + start_day}</div>
                    {end_day && <div className='event-description'>تاریخ پایان: {end_year + '/' + end_month + '/' + end_day}</div>}
                </div>
            )
        }
        else
        {
            return (
                <div className='loading-cont'>
                    <ClipLoader size={50}/>
                </div>
            )
        }
    }
}

export default Event