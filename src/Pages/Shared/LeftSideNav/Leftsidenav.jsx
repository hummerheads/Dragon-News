import { useEffect } from "react";
import { useState } from "react";

const Leftsidenav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[]);

    return (
        <div>
            <p className="border-solid border-2 border-sky-500">LeftSide : {categories.length}</p>
        </div>
    );
};

export default Leftsidenav;