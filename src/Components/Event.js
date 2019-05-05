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
        }
    }

    componentDidMount()
    {
        this.getData()
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
            const {event} = this.state
            return (
                <div className='event'>
                    <div className='event-name'>{event.name}</div>
                    <div className='slider-here'>
                        <Slick {...{dots: true, adaptiveHeight: true}}>
                            {
                                JSON.parse(event.pictures) && JSON.parse(event.pictures).map((img, i) =>
                                    <CategoryImage key={i} picture={img}/>,
                                )
                            }
                        </Slick>
                    </div>
                    {event.description && <div className='event-description'>{event.description}</div>}
                    {event.info && <div className='event-description'>{event.info}</div>}
                    {event.address && <div className='event-description'>آدرس: {event.address}</div>}
                    <div className='event-description'>تاریخ شروع: {event.start_year + '/' + event.start_month + '/' + event.start_day}</div>
                    {event.end_day && <div className='event-description'>تاریخ پایان: {event.end_year + '/' + event.end_month + '/' + event.end_day}</div>}
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