import './style.css';
export const Button = ({buttonText, variant,handler})=>{
    return(
          <button 
          className={`shared-button ${variant}`}
          onClick={handler}
          >{buttonText}</button>
    )
}