import React from 'react';

const FooterButton = () => {
    return (
        <div className="bg-dark text-center py-2  text-white">
            <p className="mt-4">© {(new Date()).getFullYear()} Fixurpixels | All right reserved.</p>
        </div>
    );
};

export default FooterButton;