import Country from "./Country";
import City from "./City";
import Founded from "./Founded";

export default function Content(){
    return(
        <>
            <div className="wrapper__content">
                <Country/>
                <City/>
                <Founded/>
            </div>
        </>
    )
}