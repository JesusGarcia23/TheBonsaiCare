import React, {useContext} from 'react';
import { Context } from '../hookAndContext/context'
import { useForm } from 'react-hook-form';

const BecomeCarer = (props) => {

    const careContext = useContext(Context);
    const { handleSubmit , register } = useForm();
    const {currentUser, handleSubmitForm, message} = careContext;
    const onData = (thedata) => { handleSubmitForm(thedata, "createCareAccount") };
    let value = "Hello";

    if(currentUser) {
        return (
            <div>
            <h1>Hello Become a Carer page</h1>
            <form onSubmit={handleSubmit(onData)}>

            <h2>Services you provide</h2>
            <div>
            <h3>Bonsai Sitting:</h3>
            
            <ul>
            <li>
            <label>Drop-in visit</label>
            <input type='checkbox' name='dropinVisit'></input>
            </li>
            
            <li>
            <label>Boarding</label>
            <input type='checkbox' name='boarding'></input>
            </li>


            </ul>
           

           
            </div>

            <div>
            <h3>Bonsai Maintenance:</h3>
            <ul>
            <li>
            <label>Trimming</label>
            <input type='checkbox' name='trimming' ref={register}></input>
            </li>
            
            <li>
            <label>Repotting</label>
            <input type='checkbox' name='repotting' ref={register}></input>
            </li>

            <li>
            <label>Wiring/Styling</label>
            <input type='checkbox' name='wiringStyling' ref={register}></input>
            </li>

            <li>
            <label>Fertilizer Application</label>
            <input type='checkbox' name='fertilizer' ref={register}></input>
            </li>

            <li>
            <label>Insect/Pest Control</label>
            <input type='checkbox' name='pestControl' ref={register}></input>
            </li>

            </ul>
            </div>

            <div>
            <h3>Service Rates</h3>
            <ul>
            
            <li>
            <label>Boarding $</label>
            <input type='number' name='boardingPrice' ref={register}></input>
            <label>per night</label>
            </li>
            
            <li>
            <label>Maintenance $</label>
            <input type='number' name='maintenancePrice' ref={register}></input>
            <label>per hour</label>
            </li>
            
            </ul>
            </div>

            <div>
            <h3>Tree Preferences (Size)</h3>
            
            <ul>
            
            <li>
            <label>Small</label>
            <input type='checkbox' name='small' ref={register}></input>
            </li>

            <li>
            <label>Medium</label>
            <input type='checkbox' name='medium' ref={register}></input>
            </li>

            <li>
            <label>Large</label>
            <input type='checkbox' name='large' ref={register}></input>
            </li>

            <li>
            <label>X-Large</label>
            <input type='checkbox' name='xLarge' ref={register}></input>
            </li>
            
            </ul>
            </div>

            <div>
            <h3>Tree Species you are familiar with</h3>
            <h6>Use "," to separate</h6>
            <textarea name='treesClasses' ref={register}>
            </textarea>
            </div>
            <button>Register</button>
            </form>
            </div>
        )

    }else {
        return null;
    }
   
}

export default BecomeCarer;