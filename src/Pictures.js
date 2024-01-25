import './pictures.scss';
import pic from "./allPic";
import PictureItem from "./PictureItem";

function Pictures(){
    return(
        <>
        <div className="wrapper__pictures">
        {pic.map(elem => <PictureItem 
                                    key = {elem.id}
                                    url = {elem.url}
                                    />)}
            
        </div>
        </>
    )
}

export default Pictures;