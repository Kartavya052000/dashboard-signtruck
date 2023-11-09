import {React} from 'react';

const FormComponentsControl = () => {
    return(
        <>
            <div className='manageForm_sec'>
                <div className='sec_ttl'>
                    <h2>Booking Form Control</h2>
                </div>
                <div className='manage_Form'>
                    <div className='cst_card'>
                        <div className='cst_cardBody'>
                            <ul className='formLabel_list'>
                                <li><input type="text" placeholder='Name' disabled /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Email' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Phone' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Website' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Which Side?' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Number of Days?' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder="How long it'll be on signtruck?" /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Do you have any design?' /><div className='radContainer'><label><input type='radio' disabled />Yes</label> <label><input type='radio' disabled />No</label></div> <span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Available Location' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><input type="text" placeholder='Preferred Location' /><span className='editBtn'><i className='fa fa-pencil'></i></span></li>
                                <li><button type="submit" className='btn btn_success'>Save</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FormComponentsControl;