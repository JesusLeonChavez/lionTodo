import React from 'react'

import "./featuredInfo.css"

import { Task, ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Tasks </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">20</span>
                    <span className="featuredMoneyRate">
                        pendings
                        <Task className="taskIcon"/>
                    </span>
                </div>
                <div className="featuredSub">Compared to las month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Homework done</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4</span>
                    <span className="featuredMoneyRate">
                        complete
                        <ArrowDownward className="featuredIcon"/>
                    </span>
                </div>
                <div className="featuredSub">Compared to las month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Incomplete tasks</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">16</span>
                    <span className="featuredMoneyRate">
                        incomplete
                        <ArrowUpward className="featuredIcon negative"/>
                    </span>
                </div>
                <div className="featuredSub">Compared to las month</div>
            </div>
        </div>
  )
}
