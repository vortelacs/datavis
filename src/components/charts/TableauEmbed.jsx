import React, {useRef, useEffect} from "react";

const {tableau} = window;

function TableauEmbed(props) {



    const ref = useRef(null);
//    url = "https://public.tableau.com/views/Aarhus_DataVis_Project_CAA2109/Dashboard1";

    const options = {
        device : "desktop"
    }

    function initViz(){
        new tableau.Viz(ref.current, props.url, options)
    }

    useEffect(() => {
        let viz = window.tableau.VizManager.getVizs()[0];

        if (viz) {

            viz.dispose();

        }
        initViz();
    }, []);

    return(
        <div className="vizContainer">
            <p>My Tableau chart</p>
            <div ref={ref}></div>
        </div>
    );
}

export default TableauEmbed;