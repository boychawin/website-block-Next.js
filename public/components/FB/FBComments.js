import React from "react";
import FacebookProvider, { Comments } from "react-facebook-next";

const FBComments = ({ URL_data }) => {
    return (
        <>
            <FacebookProvider appId="3710740645722239">
                <Comments href={"https://boychawin.com" + URL_data}
                    width="100%"
                />
            </FacebookProvider>
        </>
    )
}


export default FBComments
