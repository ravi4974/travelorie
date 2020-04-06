import React from 'react';

const AppContext = React.createContext(null);
const DefaultConfiguration = {
    "header": {
        "links": {
            "left": [],
            "right": []
        },
        "socials": []
    },
    "home": {
        "slides": [],
        "categories": [],
        "essentials":[]
    },
    "blogs": []
};

export default AppContext;
export { DefaultConfiguration };