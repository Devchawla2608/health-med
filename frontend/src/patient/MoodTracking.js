import React from 'react'
import Landing from '../layout/Landing'

const Mood = (props) => {
    const handleChange = (e) => {
        console.log(e)
    }
    return (
        <>
            <div className="col-sm-8 col-lg-8 col-lg-md-8 mx-auto">
                <div className="card p-lg-3">
                    <div className="card-body">
                        <h5 className="card-title pb-3">{props.qn}</h5>
                        <div className="card-text d-flex labels">
                            {/* <select name="ques"
                                onChange={handleChange}>
                                <option value="1">Not at all</option>
                                <option value="2">Several days</option>
                                <option value="3">More than half the days</option>
                                <option value="4">Nearly every day</option>
                            </select> */}
                            <label class="form-control"><input type="radio" name="Qn-3" value="Not at all" />Not at all</label>
                            <label class="form-control"><input type="radio" name="Qn-3" value="Several Days" />Several Days</label>
                            <label class="form-control"><input type="radio" name="Qn-3" value="More than half the days" />More than half the days</label>
                            <label class="form-control"><input type="radio" name="Qn-3" value="Nearly every day" />Nearly every day</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
        //     <div class="col-sm-8 col-lg-8 col-lg-md-8 mx-auto">
        //     <div class="card p-lg-3">
        //         <div class="card-body">
        //             <h5 class="card-title pb-3 ">Over the last two weeks have you had trouble falling
        //                 asleep,
        //                 staying asleep, or have you been
        //                 sleeping too much?</h5>
        //             <div class="card-text d-flex labels">
        //                 <label class="form-control"><input type="radio" name="Qn-3" value="Not at all">Not
        //                     at
        //                     all</label>
        //                 <label class="form-control"><input type="radio" name="Qn-3"
        //                         value="Several Days">Several
        //                     Days</label>
        //                 <label class="form-control"><input type="radio" name="Qn-3"
        //                         value="More than half the days">More than
        //                     half the
        //                     days</label>
        //                 <label class="form-control"><input type="radio" name="Qn-3"
        //                         value="Nearly every day">Nearly every
        //                     day</label>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}


const Comp = () => {
    return (
        <>
            <section id="team" className="team">
                <div className="container" data-aos="fade-up" />

                <div className="section-header">
                    <h2>Mood Tracker Quiz</h2>
                    <p>Answer these simple questions and get your mood chart !</p>
                </div>

                <form id="formid">
                    <div className="row d-grid gap-lg-5">
                        <Mood
                            name="Qn-1"
                            qn="Little interest or pleasure in doing things?"
                        />
                        <Mood
                            name="Qn-2"
                            qn="Feeling persistent, sad, anxious or empty mood ?"
                        />
                        <Mood
                            name="Qn-3"
                            qn="Had a loss of appetite and weight loss -or- incread appetite and weight gain ?"
                        />
                        <Mood
                            name="Qn-4"
                            qn="Feeling tired or having little energy.?"
                        />
                        <Mood
                            name="Qn-5"
                            qn="Trouble falling or staying asleep, or sleeping too much?"
                        />
                        <Mood
                            name="Qn-6"
                            qn="Too much bothered by feeling down, depressed, irritable, or hopeless?"
                        />
                        <Mood
                            name="Qn-7"
                            qn="Feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down?"
                        />
                        <Mood
                            name="Qn-8"
                            qn="Moving or speaking so slowly that other people could have noticed. Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?"
                        />
                        <Mood
                            name="Qn-9"
                            qn="Had thoughts that you would be better off dead, or of hurting yourself in some way?"
                        />
                        <Mood
                            name="Qn-10"
                            qn="If you experience any of the problems above, have they made it difficult for you to do your work, take care of things at home, or get along with other people?"
                        />
                    </div>
                </form>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                    <button type='submit' class="btn btn-primary btn-lg">Submit</button>
                </div>

            </section>
        </>
    )
}


const Mood_Tracking = () => {
    return (
        <>
            <Landing />
            <Comp />
        </>
    )
}

export default Mood_Tracking
