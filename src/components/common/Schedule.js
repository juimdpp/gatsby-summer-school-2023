import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Event } from '.'
import data from '../../data/schedule.json'

const Schedule = () => {

    return (
        <div>
            {
                data.map((node, i) => (
                    <div id={"day"+(i+1)}>
                        <div className="schedule-header" >
                            <div className="schedule-day">
                                {"Day "}{i+1}
                            </div>
                            <div className="schedule-date">
                                {node.dayOfWeek}{", "}{node.date}
                            </div>
                        </div>
                        {
                            node.content.map((item) => (
                                <Event key={item.id} data={item} speakerId={item.speakerId}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>


    )
}



export default Schedule;