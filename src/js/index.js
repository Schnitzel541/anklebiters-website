import { headerLogic } from "./header";
import { clearDOM } from "./cleardom"
import { over } from "./over";
import { merch } from "./merch";
import { shows } from "./shows";

headerLogic();

const routing = () => {
    const path = window.location.pathname;

    switch (path) {
        case('/'):
            clearDOM();
            break;
        case('/over'):
            clearDOM();
            over();
            break;
        case('/merch'):
            clearDOM();
            merch();
            break;
        case('/shows'):
            clearDOM();
            shows();
            break;
    }
};

window.onpopstate = routing;

routing();