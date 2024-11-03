import { headerLogic } from "./header";
import { clearDOM } from "./cleardom"
import { backdrop } from "./backdrop";
import { over } from "./over";
import { merch } from "./merch";
import { shows } from "./shows";

headerLogic();

const routing = () => {
    const path = window.location.pathname;

    switch (path) {
        case('/'):
            clearDOM();
            backdrop();
            break;
        case('/over'):
            clearDOM();
            backdrop();
            over();
            break;
        case('/merch'):
            clearDOM();
            backdrop();
            merch();
            break;
        case('/shows'):
            clearDOM();
            backdrop();
            shows();
            break;
    }
};

window.onpopstate = routing;

routing();