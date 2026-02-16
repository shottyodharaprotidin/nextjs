"use client";
import React, { useState } from 'react';

const PollWidget = () => {
    // Mock Data for Poll
    const pollData = {
        question: "Is it fair for the WICB to ask for 20% of players' fees to allow them to participate in overseas T20 leagues?",
        options: [
            { id: 5444, label: "Yes, they have invested in developing talent" },
            { id: 5445, label: "No, this is restraint of trade" }
        ]
    };

    return (
        <div className="panel_inner poll-widget">
            <div className="panel_header">
                <h4>
                    <strong>Poll</strong>
                </h4>
            </div>
            <div className="panel_body poll-content">
                <form method="get" id="home_poll" onSubmit={(e) => e.preventDefault()}>
                    <h6>{pollData.question}</h6>
                    <ul>
                        {pollData.options.map((option) => (
                            <li key={option.id}>
                                <input
                                    id={`poll_${option.id}`}
                                    defaultValue={option.id}
                                    name="poll"
                                    type="radio"
                                />
                                <label htmlFor={`poll_${option.id}`}>
                                    {option.label}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button type="submit" className="btn btn-news">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PollWidget;