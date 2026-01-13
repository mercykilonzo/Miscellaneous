interface ButtonProps 
    {
    buttonText:string, 
    Variant:string, 
    onclickHandler: () => void}

  
const Button = ({buttonText, Variant,onclickHandler}:ButtonProps) =>{
    const buttonVariants = () =>{
        switch(Variant){
            case 'primary':
                return 'bg-green-500 text-white ';
            case 'secondary':
                return 'bg- white text-green-500 border border-green-500';
            default:
                return 'bg-green-500 text-white';       
        }
    }
     const variantStyle = buttonVariants();
    return (
        <button className={`${variantStyle} px-[16px] py-[12px] cursor-pointer rounded-md border-none`}
        onClick={onclickHandler}>
            {buttonText}

        </button>
    )
}

export default Button