import React from 'react';

const PollWidget = () => {
    return (
        <div className="panel_inner poll-widget">
            <div className="panel_header">
                <h4>
                    <strong>Poll</strong>
                </h4>
            </div>
            <div className="panel_body poll-content">
                <form method="get" id="home_poll">
                    <h6>
                        Is it fair for the WICB to ask for 20% of players' fees to
                        allow them to participate in overseas T20 leagues?
                    </h6>
                    <ul>
                        <li>
                            <input
                                id="poll_5444"
                                defaultValue={5444}
                                name="poll"
                                type="radio"
                            />
                            <label htmlFor="poll_5444">
                                Yes, they have invested in developing talent
                            </label>
                        </li>
                        <li>
                            <input
                                id="poll_5445"
                                defaultValue={5445}
                                name="poll"
                                type="radio"
                            />
                            <label htmlFor="poll_5445">
                                No, this is restraint of trade
                            </label>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-news">
                        Submit
                    </a>
                </form>
            </div>
        </div>
    );
};

export default PollWidget;