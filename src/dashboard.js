import React from 'react';
import tennis from './assets/images/tennis.jpg';
import hiking from './assets/images/hiking.jpg';
import running from './assets/images/running.jpg';
import yoga from './assets/images/yoga.jpg';
import cycling from './assets/images/cycling.jpg';
import swim from './assets/images/swim.jpg';
import fastrun from './assets/images/fastrun.png';
import longcycling from './assets/images/longcycling.png';
import roller from './assets/images/roller.png';

const Dashboard = () => {
    return(
        <>
            <div className="left-content">
                <div className="activities">
                    <h1>Popular Activities</h1>
                    <div className="activity-container">
                        <div className="image-container img-one">
                            <img src={tennis} alt="Tennis" />
                            <div className="overlay">
                            <h3>Tennis</h3>
                            </div>
                        </div>

                        <div className="image-container img-two">
                            <img src={hiking} alt="Hiking" />
                            <div className="overlay">
                            <h3>Hiking</h3>
                            </div>
                        </div>

                        <div className="image-container img-three">
                            <img src={running} alt="Running" />
                            <div className="overlay">
                            <h3>Running</h3>
                            </div>
                        </div>

                        <div className="image-container img-four">
                            <img src={cycling} alt="Cycling" />
                            <div className="overlay">
                            <h3>Cycling</h3>
                            </div>
                        </div>

                        <div className="image-container img-five">
                            <img src={yoga} alt="Yoga" />
                            <div className="overlay">
                            <h3>Yoga</h3>
                            </div>
                        </div>

                        <div className="image-container img-six">
                            <img src={swim} alt="Swimming" />
                            <div className="overlay">
                            <h3>Swimming</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="left-bottom">
                    <div className="weekly-schedule">
                        <h1>Weekly Schedule</h1>
                        <div className="calendar">
                            <div className="day-and-activity activity-one">
                                <div className="day">
                                    <h1>13</h1>
                                    <p>mon</p>
                                </div>
                                <div className="activity">
                                    <h2>Swimming</h2>
                                    <div className="participants">
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68" alt="" />
                                    </div>
                                </div>
                                <button className="btn">Join</button>
                            </div>

                            <div className="day-and-activity activity-two">
                                <div className="day">
                                    <h1>15</h1>
                                    <p>wed</p>
                                </div>
                                <div className="activity">
                                    <h2>Yoga</h2>
                                    <div className="participants">
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9" alt="" />
                                    </div>
                                </div>
                                <button className="btn">Join</button>
                            </div>

                            <div className="day-and-activity activity-three">
                                <div className="day">
                                    <h1>17</h1>
                                    <p>fri</p>
                                </div>
                                <div className="activity">
                                    <h2>Tennis</h2>
                                    <div className="participants">
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e082b965-bb88-4192-bce6-0eb8b0bf8e68" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf" alt="" />
                                    </div>
                                </div>
                                <button className="btn">Join</button>
                            </div>

                            <div className="day-and-activity activity-four">
                                <div className="day">
                                    <h1>18</h1>
                                    <p>sat</p>
                                </div>
                                <div className="activity">
                                    <h2>Hiking</h2>
                                    <div className="participants">
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/32037044-f076-433a-8a6e-9b80842f29c9" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07d4fa6f-6559-4874-b912-3968fdfe4e5e" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf" alt="" />
                                        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/90affa88-8da0-40c8-abe7-f77ea355a9de" alt="" />
                                    </div>
                                </div>
                                <button className="btn">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="personal-bests">
                        <h1>Personal Bests</h1>
                        <div className="personal-bests-container">
                            <div className="best-item box-one">
                                <p>Fastest 5K Run: 22min</p>
                                <img src={fastrun} alt="" />
                            </div>
                            <div className="best-item box-two">
                                <p>Longest Distance Cycling: 4 miles</p>
                                <img src={longcycling} alt="" />
                            </div>
                                <div className="best-item box-three">
                                <p>Longest Roller-Skating: 2 hours</p>
                                <img src={roller} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;