
import './style.css';
import { Button } from '../shared-components/Button';

function Introduction(){
    return(
        <div className='introduction-container'>
            <h1>Introduction to ReactJs</h1>
            <p>I am learning ReactJs</p>
            <Button 
            buttonText={'Click Me!'}
            variant={'primary'} 
            handler={() =>{
                alert("Button Clicked");
            }}
            />
            <Button 
            buttonText={'Submit!'} 
            variant={'secondary'} 
            handler={() =>{
                alert("Data submitted!!");
            }}
            />
        </div>
    )
    
};

export default Introduction;