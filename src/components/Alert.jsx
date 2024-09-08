

export default function Alerts(props){

    const capitalizeWord = (word)=>{
        const lowerCase = word.toLowerCase(); //To convert Lower Case;
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1).toLowerCase();
    }
    
return (
    props.alerts &&  <>
        <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
                 <strong>{capitalizeWord(props.alerts.type)}  </strong>{props.alerts.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                </button> */}
            </div>
        </>
)}