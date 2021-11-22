import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <Loader type="Puff" color="#00Bfff" height={500} width={80} />
        </div>
    );
};

export default Loading;
